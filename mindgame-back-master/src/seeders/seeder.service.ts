import { Injectable } from '@nestjs/common';
import { About } from 'src/about/entities/about.entity';
import { DataSource, QueryRunner } from 'typeorm';

@Injectable()
export class SeederService {

    constructor(private readonly dataSource: DataSource){}


    async seed (){
        await this.seedAbout()
        .then(completed => {Promise.resolve(completed)})
        .catch(error => {Promise.reject(error)})
    }

    async seedAbout (){
        const queryRunner: QueryRunner = this.dataSource.createQueryRunner();

        await queryRunner.connect();

        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 0;');
        await queryRunner.query('TRUNCATE TABLE avatars;');
        await queryRunner.query('SET FOREIGN_KEY_CHECKS = 1;');

        await queryRunner.query('TRUNCATE TABLE about');

        await queryRunner.manager.createQueryBuilder()
        .insert()
        .into(About)
        .values([
            {
                fullName: "Rafig Hajili", 
                role:"UI/UX, Backend Developer", 
                text:"Figma, NestJs",
            },
            {
                fullName: "AKif Mursalov", 
                role:"Backend Developer", 
                text:"NestJs, MySQL",
            },
            {
                fullName: "Revan Osmanli", 
                role:"Team Lead, Backend Developer", 
                text:"NestJs, Redis",
            },
            {
                fullName: "Ferid Muradzade", 
                role:"Frontend Developer, Security manager", 
                text:"ReactJs, CloudFlare",
            },
        ])
        .execute();

        

        await queryRunner.release();
    } 
}