import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {

  @ApiProperty({ description: 'User username', example: 'JohnDoe' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  username: string;

  @ApiProperty({ description: 'User name', example: 'John' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  firstname: string;

  @ApiProperty({ description: 'User surname', example: 'Doe' })
  @IsString()
  @IsNotEmpty() 
  @MaxLength(20)
  lastname: string;

  @ApiProperty({ description: 'User email', example: 'john@gmail.com' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'User password', example: '12345678' })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  password: string;

}
