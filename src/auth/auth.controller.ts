import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    login(@Request() req: any): Promise<any> {
        return this.authService.login(req.user)
    }

    @UseGuards(JwtAuthGuard) // @UseGuards(AuthGuard('jwt')) same
    @Get('profile')
    getProfile(@Request() req: any): Promise<any> {
        return req.user
    }
}
