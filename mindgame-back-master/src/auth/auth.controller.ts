import { Controller, Get, Post, Body, Param, UseGuards, Redirect } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { GetUser } from './decorators/get-user.decorator';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth-guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
    private usersService: UsersService,
  ) {}

  @Post('/login')
  @ApiOkResponse({
    status: 201,
    description: 'The user has been successfully logged in.',
  })
  @ApiBadRequestResponse({
    status: 404,
    description: 'Failed to log in. Try again!',
  })
  @ApiBody({ type: [LoginDto] })
  create(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('/register')
  @ApiOkResponse({
    status: 201,
    description: 'The user has been successfully registered.',
  })
  @ApiCreatedResponse({
    description: 'Registered user',
    type: User,
  })
  @ApiBadRequestResponse({
    status: 404,
    description: 'User can not register. Try again!',
  })
  @ApiBody({ type: [CreateUserDto] })
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }
  
}
