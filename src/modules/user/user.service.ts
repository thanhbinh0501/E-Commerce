import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
import { UserCreateReq } from './dto/user-create.req';
import { Role } from 'src/entities/role.entity';
import { RoleService } from '../role/role.service';
import { PasswordUtil } from 'src/utils/password.util';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    private readonly roleService: RoleService,
  ) {}

  async create(createUserDto: UserCreateReq): Promise<User> {
    const {email, name, password, phoneNumber, roles} = createUserDto;

    const rolesEntity: Role[] = await this.roleService.getByNames(roles);
    const userData = {
      email,
      password: await PasswordUtil.generatePassword(password),
      name,
      phoneNumber,
      roles: rolesEntity,
    } as User;
    return this.userRepository.save(userData);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // async update(id: number, updateUserDto: UserCreateReq): Promise<User> {
  //   await this.usersRepository.update(id, updateUserDto);
  //   return this.findOne(id);
  // }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async getByEmail(email: string) {
    return this.userRepository.findOneBy({
      email,
    })
  }
}
