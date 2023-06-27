import { MigrationInterface, QueryRunner } from 'typeorm';

export class ClientEntity1687657766267 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    CREATE TABLE Cliente (
      cliente_id SERIAL PRIMARY KEY,
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

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
