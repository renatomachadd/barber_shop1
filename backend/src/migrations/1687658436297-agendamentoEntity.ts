import { MigrationInterface, QueryRunner } from 'typeorm';

export class AgendamentoEntity1687657766270 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE Agendamentos (
        agendamento_id SERIAL PRIMARY KEY,
        cliente_id INT REFERENCES Cliente(cliente_id),
        profissional_id INT REFERENCES Profissional(profissional_id),
        servico_id INT REFERENCES Servico(servico_id),
        data DATE NOT NULL,
        horario_inicio TIME NOT NULL,
        horario_fim TIME NOT NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE Agendamentos
    `);
  }
}
