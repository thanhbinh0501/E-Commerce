import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class LoginReq {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
