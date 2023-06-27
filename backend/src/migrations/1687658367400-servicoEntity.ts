import { MigrationInterface, QueryRunner } from 'typeorm';

export class ServicoEntity1687657766268 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE Servico (
        servico_id SERIAL PRIMARY KEY,
        descricao VARCHAR(100) NOT NULL,
        valor NUMERIC(10, 2) NOT NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE Servico
    `);
  }
}
