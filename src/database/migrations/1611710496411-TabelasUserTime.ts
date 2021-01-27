import {MigrationInterface, QueryRunner} from "typeorm";

export class TabelasUserTime1611710496411 implements MigrationInterface {
    name = 'TabelasUserTime1611710496411'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "time" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "registered_time" TIMESTAMP NOT NULL, "userId" uuid, CONSTRAINT "PK_9ec81ea937e5d405c33a9f49251" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "time" ADD CONSTRAINT "FK_7b3dd81032421f6d0830cba3888" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "time" DROP CONSTRAINT "FK_7b3dd81032421f6d0830cba3888"`);
        await queryRunner.query(`DROP TABLE "time"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
