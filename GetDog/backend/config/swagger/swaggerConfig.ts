import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
            .setTitle('Documentação API rede social GetDog')
            .setDescription('A presente documentação é um guia de como poder acessar os recursos da rede social GetDog')
            .setVersion('1.0')
            .addTag('Usuario')
            .addTag('Postagem')
            .addTag('Reserva')
            .addBearerAuth()
            .build();