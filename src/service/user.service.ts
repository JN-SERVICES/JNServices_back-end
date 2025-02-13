import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../model/user.entity';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  createUser(userData: Partial<User>): Promise<User> {
    return this.userRepository.createUser(userData);
  }

  findAllUsers(): Promise<User[]> {
    return this.userRepository.findAllUsers();
  }

  findUserById(id: string): Promise<User | null> {
    return this.userRepository.findUserById(id);
  }

  updateUser(id: string, userData: Partial<User>): Promise<User | null> {
    return this.userRepository.updateUser(id, userData);
  }

  deleteUser(id: string): Promise<void> {
    return this.userRepository.deleteUser(id);
  }
}
