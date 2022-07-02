import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/signup-dto';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async signUp(signUpDto: SignUpDto) {
        try {
            return await this.userRepository.save(signUpDto);
        } catch (error) {
            throw new ConflictException({
                message: ['Username has been already using.']
            })
        }

    }

    async getAllUser() {
        return await this.userRepository.find();
    }

    async getUserById(id: number): Promise<User> {
        try {
            const user = this.userRepository.findOne({ where: { id } })
            return user
        } catch (error) {
            throw new NotFoundException({
                message: ['user not found'],
            });
        }
    }

}
