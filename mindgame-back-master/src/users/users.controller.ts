import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from './entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { ApiBadRequestResponse, ApiBody, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  @ApiOkResponse({
    status: 201,
    description: 'Successfully returned user information'
  })
  @ApiBadRequestResponse({
    status: 404,
    description: 'Failed to return user information'
  })
  getUserInfo(@GetUser() user: User) {
    return this.usersService.getUserInfo(user);
  }
}
