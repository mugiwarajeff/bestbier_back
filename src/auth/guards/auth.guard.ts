import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, InternalServerErrorException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Request } from "express"
import { IS_PUBLIC_KEY } from "src/common/decorators/public.decorator";
import { JwtService } from "@nestjs/jwt";
import { jwtSecret } from "../constants/jtw.secret";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private readonly reflector: Reflector,
        private readonly jwtService: JwtService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [context.getHandler(), context.getClass()]);

        if (isPublic) {
            return true;
        }

        const request: Request = context.switchToHttp().getRequest();
        const token = this.extractAuth(request);

        if (token) {
            try {
                console.log(token);
                const payload = await this.jwtService.verifyAsync(token, { secret: jwtSecret.secret });
                return true;
            } catch {
                throw new UnauthorizedException();
            }
        }

        throw new UnauthorizedException();
    }

    private extractAuth(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(" ") ?? [];

        return type === 'Bearer' ? token : undefined;
    }
}