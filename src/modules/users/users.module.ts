import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from '../../entities/user.entity';
import { RoleModule } from '../roles/role.module';

@Module({
    imports: [TypeOrmModule.forFeature([User]),
    RoleModule,
],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule{}