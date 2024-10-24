import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from '../../entities/user.entity';
import { RoleModule } from '../role/role.module';

@Module({
    imports: [TypeOrmModule.forFeature([User]),
    RoleModule,
],
    providers: [UserService],
    exports: [UserService],
    controllers: [UserController],
})
export class UserModule{}