import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Deve impedir que o usuário veja um perfil sem está autenticado', ()=>{
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

    it('/v1/users/profile/ccac805f-0d3b-4ad8-9075-012bf1019d95 GET', () => {
        return request(app.getHttpServer())
            .get('/v1/users/profile/ccac805f-0d3b-4ad8-9075-012bf1019d95')
            .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYWUwNDE5MS01ZTM2LTQxMGQtYmVmZS00NzQzZTRmNTc1NjkiLCJuYW1lIjoiVGVzdGVyIE1hc3RlciIsImVtYWlsIjoidGVzdGVyLm1hc3RlckBlbWFpbC5jb20iLCJ0eXBlVXNlciI6IkRPR19XQUxLIiwiYWRkcmVzcyI6Im5vdCBmb3VuZCIsImlhdCI6MTY5ODc4MzIzNSwiZXhwIjoxNzAxMzc1MjM1fQ.P0wh2AAATk42HaH1ZloBs6N0rYWXA2CTyuEvDpCwPX4')
            .expect(200)

    })

})