import { hash } from "bcryptjs";
import { PasswordEncryption } from "./password.encription.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BCryptProvider implements PasswordEncryption {
    private readonly PASSWORD_LENGHT = 12;

    async encryptPassword(password: string): Promise<string> {
        const passwordHash = await hash(password, this.PASSWORD_LENGHT)
        return passwordHash;
    }
    
    async comparePassword(password: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}