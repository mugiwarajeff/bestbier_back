import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { Public } from "src/common/decorators/public.decorator";
import { CreateLoginDto } from "./dto/createLogin.dto";
import { AuthService } from "./auth.service";
import { RefreshTokenDto } from "./dto/refreshToken.dto";

@Controller("login")
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Public()
    @Post()
    async signIn(@Body() login: CreateLoginDto): Promise<string> {
        return this.authService.signIn(login);
    }

    @Public()
    @Post("/refresh")
    async refreshToken(@Body() refreshToken: RefreshTokenDto): Promise<string> {

        return this.authService.refresh(refreshToken.refreshToken);
    }
}