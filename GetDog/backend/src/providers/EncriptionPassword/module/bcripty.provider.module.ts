import { Global, Module } from "@nestjs/common";
import { BCryptProvider } from "../bcripty.provider";

@Global()
@Module({
    providers: [BCryptProvider],
    exports: [BCryptProvider],
})

export class BCriptyProviderModule {}