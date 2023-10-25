import { hash, compare } from "bcryptjs";
import { PasswordEncryption } from "./password.encription.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BCryptProvider implements PasswordEncryption {
    private readonly PASSWORD_LENGHT = 12;

    async encryptPassword(password: string): Promise<string> {
        const passwordHash = await hash(password, this.PASSWORD_LENGHT)
        return passwordHash;
    }
    
    async comparePassword(password: string, hash: string): Promise<boolean> {
        return await compare(password, hash);
    }

}