import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { UserCreateReq } from './dto/user-create.req';
import { Role } from 'src/entities/role.entity';
import { RoleService } from '../roles/role.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    private readonly roleService: RoleService,
  ) {}

  async create(createUserDto: UserCreateReq): Promise<User> {
    const {email, name, password, phoneNumber, roles} = createUserDto;

    const rolesEntity: Role[] = await this.roleService.getByNames(roles);
    const userData = {
      email,
      password,
      name,
      phoneNumber,
      roles: rolesEntity,
    } as User;
    return this.usersRepository.save(userData);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  // async update(id: number, updateUserDto: UserCreateReq): Promise<User> {
  //   await this.usersRepository.update(id, updateUserDto);
  //   return this.findOne(id);
  // }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
