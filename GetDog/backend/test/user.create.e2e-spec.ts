import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Verifica se o usuário consegue criar um usuário sem passar as informações', ()=>{
    let app: INestApplication;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    it('/v1/users (POST)', () => {
        return request(app.getHttpServer())
            .post('/v1/users')
            .send({
                name: "Teste",
                password: "teste",
                address: "Rua Teste, Nº Teste",
                typeUser: "DOG_OWNER"
            })
            .expect(400)           
    });

})