import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) { }
    @Post('/signup')
    signUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto) {
        //email, password가 authCredentialsDto에 들어온다.
        return this.authService.signUp(authCredentialsDto);

    }
}