import { PostModel } from "@/models/postModel";

const postsJSON = 	[{
    "id": "3a4eccb2-f54a-42b7-a7f4-3c18c88f13e34",
    "title": "Passeios Alegres com Seu Melhor Amigo!",
    "legend": "Ofereço serviços de passeio de cachorro com amor e cuidado. Seu companheiro peludo terá momentos felizes e divertidos!",
    "disponibility": [
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z"
    ],
    "address": "Rua dos Animais Felizes, nº 123",
    "likes": 0,
    "unlikes": 0,
    "createdAt": "2023-11-13T20:10:05.207Z",
    "updatedAt": "2023-11-13T20:10:05.207Z",
    "photos": [
      "cachorro.jpeg",
      "cachorro2.jpeg"
    ],
    "authorId": "ccac805f-0d3b-4ad8-9075-012bf1019d95"
  },
  {
    "id": "3a4eccb2-f54a-42b7-a7f4-3c18c88f13e23",
    "title": "Passeios Alegres com Seu Melhor Amigo!",
    "legend": "Ofereço serviços de passeio de cachorro com amor e cuidado. Seu companheiro peludo terá momentos felizes e divertidos!",
    "disponibility": [
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z"
    ],
    "address": "Rua dos Animais Felizes, nº 123",
    "likes": 0,
    "unlikes": 0,
    "createdAt": "2023-11-13T20:10:05.207Z",
    "updatedAt": "2023-11-13T20:10:05.207Z",
    "photos": [
      "cachorro.jpeg",
      "cachorro2.jpeg"
    ],
    "authorId": "ccac805f-0d3b-4ad8-9075-012bf1019d935"
  },
  {
    "id": "3a4eccb2-f54a-42b7-a7f4-3c18c88f13e3",
    "title": "Passeios Alegres com Seu Melhor Amigo!",
    "legend": "Ofereço serviços de passeio de cachorro com amor e cuidado. Seu companheiro peludo terá momentos felizes e divertidos!",
    "disponibility": [
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z"
    ],
    "address": "Rua dos Animais Felizes, nº 123",
    "likes": 0,
    "unlikes": 0,
    "createdAt": "2023-11-13T20:10:05.207Z",
    "updatedAt": "2023-11-13T20:10:05.207Z",
    "photos": [
      "cachorro.jpeg",
      "cachorro2.jpeg"
    ],
    "authorId": "ccac805f-0d3b-4ad8-9075-0123bf1019d95"
  },
  {
    "id": "3a4eccb2-f54a-42b7-a7f4-3c18c88f13ef3",
    "title": "Passeios Alegres com Seu Melhor Amigo!",
    "legend": "Ofereço serviços de passeio de cachorro com amor e cuidado. Seu companheiro peludo terá momentos felizes e divertidos!",
    "disponibility": [
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z"
    ],
    "address": "Rua dos Animais Felizes, nº 123",
    "likes": 0,
    "unlikes": 0,
    "createdAt": "2023-11-13T20:10:05.207Z",
    "updatedAt": "2023-11-13T20:10:05.207Z",
    "photos": [
      "cachorro.jpeg",
      "cachorro2.jpeg"
    ],
    "authorId": "ccac805f-0d3b-4ad8-9075-012bf31019d95"
  },
  {
    "id": "3a4eccb2-f54a-42b7-a7f4-3c18c88f1df3e3",
    "title": "Passeios Alegres com Seu Melhor Amigo!",
    "legend": "Ofereço serviços de passeio de cachorro com amor e cuidado. Seu companheiro peludo terá momentos felizes e divertidos!",
    "disponibility": [
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z",
      "2023-11-13T00:00:00.000Z"
    ],
    "address": "Rua dos Animais Felizes, nº 123",
    "likes": 0,
    "unlikes": 0,
    "createdAt": "2023-11-13T20:10:05.207Z",
    "updatedAt": "2023-11-13T20:10:05.207Z",
    "photos": [
      "cachorro.jpeg",
      "cachorro2.jpeg"
    ],
    "authorId": "ccac805f-0d3b-4ad8-9075-012bf1019d95"
  },

]
  

export const posts = postsJSON.map(post => PostModel.fromJSON(post));
