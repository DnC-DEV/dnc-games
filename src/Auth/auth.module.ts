import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsuarioModule } from "../Usuario/usuario.module";
import { Bcrypt } from "./Bcrypt/bcrypt";
import { jwtConstants } from "./Constants/constants";
import { AuthService } from "./Services/auth.service";
import { JwtStrategy } from "./Strategy/jwt.strategy";
import { LocalStrategy } from "./Strategy/local.strategy";

@Module({
    imports: [
      UsuarioModule,
      PassportModule,
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '24h' }
      })
    ],
    providers: [Bcrypt, AuthService, LocalStrategy, JwtStrategy],
    controllers: [AbortController],
    exports: [Bcrypt],
  })
  export class AuthModule { }