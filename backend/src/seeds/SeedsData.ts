import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedData1630435807706 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Criar clientes
    await queryRunner.query(`
      INSERT INTO Cliente (nome, cpf, telefone, data_nascimento, endereco, numero, cidade, cep, estado)
      VALUES
        ('João Silva', '123.456.789-00', '(12) 1234-5678', '1990-01-01', 'Rua A, 123', '10', 'São Paulo', '12345-678', 'SP'),
        -- Adicione mais clientes aqui, se necessário
        ;
    `);

    // Criar serviços
    await queryRunner.query(`
      INSERT INTO Servico (descricao, valor)
      VALUES
        ('Corte de cabelo', 50.0),
        -- Adicione mais serviços aqui, se necessário
        ;
    `);

    // Criar profissionais
    await queryRunner.query(`
      INSERT INTO Profissional (nome, cpf, telefone, data_nascimento, endereco, numero, cidade, cep, estado)
      VALUES
        ('Maria Oliveira', '987.654.321-00', '(12) 9876-5432', '1995-05-10', 'Rua B, 456', '20', 'São Paulo', '54321-987', 'SP'),
        -- Adicione mais profissionais aqui, se necessário
        ;
    `);

    // Obter os registros criados para Cliente, Servico e Profissional
    const [clientes] = await queryRunner.query(
      'SELECT cliente_id FROM Cliente;',
    );
    const [servicos] = await queryRunner.query(
      'SELECT servico_id FROM Servico;',
    );
    const [profissionais] = await queryRunner.query(
      'SELECT profissional_id FROM Profissional;',
    );

    // Criar agendamentos
    await queryRunner.query(`
      INSERT INTO Agendamentos (cliente_id, profissional_id, servico_id, data, horario_inicio, horario_fim)
      VALUES
        (${clientes[0].cliente_id}, ${profissionais[0].profissional_id}, ${servicos[0].servico_id}, current_date, '10:00', '11:00'),
        -- Adicione mais agendamentos aqui, se necessário
        ;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remover todos os registros das tabelas
    await queryRunner.query('DELETE FROM Agendamentos;');
    await queryRunner.query('DELETE FROM Cliente;');
    await queryRunner.query('DELETE FROM Profissional;');
    await queryRunner.query('DELETE FROM Servico;');
  }
}
