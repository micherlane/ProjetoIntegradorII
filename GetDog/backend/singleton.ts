import { PrismaClient } from '@prisma/client';

import { mockDeep, mockReset, DeepMockProxy} from 'jest-mock-extended';

import prismaClient from './src/prisma';

jest.mock('./src/prisma', () => ({
    __esModule: true,
    default: mockDeep<PrismaClient>(),
}))

beforeEach(() => {
  mockReset(prismaMock)
})

export const prismaMock = prismaClient as unknown as DeepMockProxy<PrismaClient>