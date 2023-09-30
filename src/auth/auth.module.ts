import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./guards/auth.guard";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaService } from "src/common/services/prisma.service";
import { CommomModule } from "src/common/common.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtSecret } from "./constants/jtw.secret";
import { DateTimeService } from "src/common/services/dateTime.service";

@Module({
    imports: [CommomModule, JwtModule.register({
        global: true,
        secret: jwtSecret.secret,
        signOptions: {
            expiresIn: "180s",
        }
    }),],
    providers: [
        { provide: APP_GUARD, useClass: AuthGuard },
        AuthService,
        PrismaService,
        DateTimeService
    ],
    controllers: [AuthController],

})
export class AuthModule {

}