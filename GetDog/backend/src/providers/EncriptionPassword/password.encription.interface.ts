export interface PasswordEncryption {
    encryptPassword(password: string): Promise<string>;
    comparePassword(password: string, hash: string): Promise<boolean>;
}