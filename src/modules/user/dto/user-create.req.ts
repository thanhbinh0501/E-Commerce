import { IsString, IsEmail, IsOptional, IsArray, IsNotEmpty } from 'class-validator';
import { Role } from '../../../entities/role.entity';

export class UserCreateReq {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @IsArray()
  @IsNotEmpty()
  roles: string[];
}
