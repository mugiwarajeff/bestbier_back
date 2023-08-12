import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/common/services/prisma.service";
import { CreateLoginDto } from "./dto/createLogin.dto";
import { User } from "@prisma/client";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly JstService: JwtService
    ) { }

    async signIn(login: CreateLoginDto): Promise<any> {

        const user: User = await this.prismaService.user.findUnique({ where: { user: login.user } });

        if (user?.password !== login.password) {
            throw new UnauthorizedException();
        }

        const newRefreshToken = await this.prismaService.refreshToken.create({data: {userId: user.id}});

        
        const payload = { sub: user.id, username: user.user };

        return {
            acess_token: await this.JstService.signAsync(payload),
            refresh_token: newRefreshToken.id
        };
    }
}