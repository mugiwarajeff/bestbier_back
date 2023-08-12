import { Body, Controller, Post } from "@nestjs/common";
import { Public } from "src/common/decorators/public.decorator";
import { CreateLoginDto } from "./dto/createLogin.dto";
import { AuthService } from "./auth.service";

@Controller("login")
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Public()
    @Post()
    async signIn(@Body() login: CreateLoginDto): Promise<string> {
        return this.authService.signIn(login);
    }
}