import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profissional } from '../entities/profissional.entity';
import { CreateProfissionalDto } from '../dto/create-profissional.dto';
import { format } from 'date-fns';
@Injectable()
export class ProfissionalService {
  constructor(
    @InjectRepository(Profissional)
    private readonly profissionalRepository: Repository<Profissional>,
  ) {}

  findAll(): Promise<Profissional[]> {
    return this.profissionalRepository.find();
  }

  /* create(profissionalDto: CreateProfissionalDto): Promise<Profissional> {
    const profissional = this.profissionalRepository.create(profissionalDto);
    return this.profissionalRepository.save(profissional);
  } */

  async create(profissionalDto: CreateProfissionalDto): Promise<Profissional> {
    const dataAtual = new Date();
    const dataNascimento = new Date(profissionalDto.data_nascimento);
    const cpf = profissionalDto.cpf;
    if (dataNascimento > dataAtual) {
      throw new HttpException(
        'Data de nascimento inválida. Deve ser anterior à data atual.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const profissionalExistente = await this.profissionalRepository.findOne({
      where: { cpf },
    });
    if (profissionalExistente) {
      throw new ConflictException('CPF já está em uso');
    }

    const profissional = this.profissionalRepository.create({
      ...profissionalDto,
      data_nascimento: format(dataNascimento, 'yyyy-MM-dd'),
    });

    return this.profissionalRepository.save(profissional);
  }

  async atualizarProfissional(
    id: number,
    dadosProfissional: Partial<Profissional>,
  ): Promise<Profissional> {
    const profissional = await this.profissionalRepository.preload({
      profissional_id: id,
      ...dadosProfissional,
    });

    if (!profissional) {
      throw new NotFoundException('profissional não encontrado');
    }

    return this.profissionalRepository.save(profissional);
  }

  async excluirprofissional(id: number): Promise<void> {
    const profissional = await this.profissionalRepository.delete(id);

    if (profissional.affected === 0) {
      throw new NotFoundException('profissional não encontrado');
    }
  }
}
