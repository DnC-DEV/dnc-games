import { Module } from "@nestjs/common";
import { Bcrypt } from "./Bcrypt/bcrypt";

@Module({
    imports: [],
    providers: [Bcrypt],
    controllers: [],
    exports: [Bcrypt],
  })
  export class AuthModule { }