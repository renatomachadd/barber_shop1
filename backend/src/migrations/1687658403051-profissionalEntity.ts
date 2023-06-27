import { MigrationInterface, QueryRunner } from 'typeorm';

export class ProfissionalEntity1687657766269 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE Profissional (
        profissional_id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        cpf VARCHAR(14) NOT NULL,
        telefone VARCHAR(20) NOT NULL,
        data_nascimento DATE NOT NULL,
        endereco VARCHAR(100) NOT NULL,
        numero VARCHAR(10),
        cidade VARCHAR(50) NOT NULL,
        cep VARCHAR(10) NOT NULL,
        estado VARCHAR(50) NOT NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE Profissional
    `);
  }
}
