import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginReq } from "./dto/login.req";

@Controller('auth')
export class AuthController{
    constructor( private readonly authService: AuthService) {}

    @Post('login')
    async login(@Body() req: LoginReq) {
        return this.authService.login(req);
    }
}