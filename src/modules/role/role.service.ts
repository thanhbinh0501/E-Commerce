import { Role } from 'src/entities/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  getByNames(names: string[]): Promise<Role[]> {
    return this.roleRepository.findBy({
      name: In(names),
    });
  }
}
