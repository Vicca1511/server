import { Controller, Get, Patch, Body, Post } from '@nestjs/common/decorators';
import { get } from 'http';
import { IUserEntity } from '../entities/user.entity';
import { userService } from '../user.service';
import { UserDto } from './dto/userImput.dto';
import { PartialUserDto } from './partialUserInput.do';

@Controller()
export class userController {
  constructor(private service: userService) {}
  @Get()
  async getAllUser(): Promise<IUserEntity[]> {
    return this.service.getAllUsers();
  }

  @Post()
  async createUser(
    @Body() { name, password, email, cpf, role }: UserDto,
  ): Promise<IUserEntity> {
    try {
      return await this.service.createUser({
        name,
        password,
        email,
        cpf,
        role,
      });
    } catch (err) {
      console.log(err);
    }
  }
  @Patch()
  async updateUser(@Body() userData: PartialUserDto) {
    try {
        return await this.service.updateUser(userData);
        
    } catch (err) {
        console.log(err)
    }
  }
}
