import { EntityRepository, Repository } from 'typeorm';
import { User } from '../model/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(userData: Partial<User>): Promise<User> {
    const user = this.create(userData);
    return this.save(user);
  }

  async findAllUsers(): Promise<User[]> {
    return this.find();
  }

  async findUserById(id: string): Promise<User | null> {
    return this.findOne({ where: { id } });
  }

  async updateUser(id: string, userData: Partial<User>): Promise<User | null> {
    await this.update(id, userData);
    return this.findUserById(id);
  }

  async deleteUser(id: string): Promise<void> {
    await this.delete(id);
  }
}
