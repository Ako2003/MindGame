import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { v4 } from 'uuid';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
    private mailService: MailService,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async login(loginDto: LoginDto) {
    try {
      const user = await this.usersService.findOneByEmail(loginDto.email);

      const isMatch = await bcrypt.compare(loginDto.password, user.password);

      if (!isMatch) {
        throw new ForbiddenException('Password is incorrect');
      }

      return {
        access_token: this.jwtService.sign({ email: user.email, sub: user.id }),
      };
    } catch (error) {
      throw error;
    }
  }

  async register(createUserDto: CreateUserDto) {
    try {
      const user = await this.usersService.create(createUserDto);

      console.log('here', user)
      return user;
    } catch (error) {
      throw error;
    }
  }

  async validateWs(token: string) {

    try {
      await this.jwtService.verifyAsync(token)
      const data = this.jwtService.decode(token);
      console.log(data);
      return true;
      
    } catch (error) {
      return false;
    }
  }

  async extractUser(token: string) {

    try {
      const data = this.jwtService.decode(token);
      const user = await this.usersService.findOneByEmail(data['email']);
      delete user.password;
      return user;
      
    } catch (error) {
      return null;
    }
  }
}
