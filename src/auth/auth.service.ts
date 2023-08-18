import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/common/services/prisma.service";
import { CreateLoginDto } from "./dto/createLogin.dto";
import { RefreshToken, User } from "@prisma/client";
import { JwtService } from "@nestjs/jwt";
import dayjs from "dayjs";
import { DateTimeService } from "src/common/services/dateTime.service";
import { withLatestFrom } from "rxjs";

@Injectable()
export class AuthService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly JstService: JwtService,
        private readonly dateTimeService: DateTimeService
    ) { }

    async signIn(login: CreateLoginDto): Promise<any> {
    
        const user: User = await this.prismaService.user.findUnique({ where: { user: login.user } });

        if (user?.password !== login.password) {
            throw new UnauthorizedException();
        }

        const alreadyExistsRefreshToken = await this.verifyRefreshTokenExists(user.id);

        if(alreadyExistsRefreshToken) {
            await this.prismaService.refreshToken.delete({ where: {userId: user.id}});
        }

        const newRefreshToken = await this.prismaService.refreshToken.create(
            {data: 
                {
                    userId: user.id, 
                    expireIn: this.dateTimeService.getOneDayFutureTimestamp()
                }
            });

        const payload = { sub: user.id, username: user.user };

        return {
            acess_token: await this.JstService.signAsync(payload),
            refresh_token: newRefreshToken.id
        };
    }

    private async verifyRefreshTokenExists(userId: number): Promise<boolean> {
        const refreshToken = await this.prismaService.refreshToken.findFirst({where: { userId: userId}});
        if(refreshToken!) {
            return true;
        }
        return false;
     }

    async refresh(refreshTokenId: string) : Promise<any> {
       
        const refreshToken = await this.validateRefreshToken(refreshTokenId);
        const user: User = await this.prismaService.user.findFirst({where: {refreshToken: refreshToken}});
        
        const payload = { 
            sub: user.id, 
            username: user.user
        }

        return { 
            acess_token: await this.JstService.signAsync(payload)
        }
    }
    
    private async validateRefreshToken(refreshTokenId: string): Promise<RefreshToken>{

        const refreshToken = await this.prismaService.refreshToken.findFirst({ where: { id: refreshTokenId}});

        if(!refreshToken){
            throw new UnauthorizedException();
        }

        const expired = this.dateTimeService.verifyIfIsAfter(refreshToken.expireIn);

        if(expired){
            throw new UnauthorizedException("please redo login step");
        }

        return refreshToken;
    }
}