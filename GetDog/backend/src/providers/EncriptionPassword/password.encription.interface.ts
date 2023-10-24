export interface PasswordEncryption {
    encryptPassword(password: string): Promise<string>;
    comparePassword(password: string): Promise<boolean>;
}