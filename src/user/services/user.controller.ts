import {
  Controller,
  Get,
  Patch,
  Body,
  Post,
  Param,
  Delete,
} from '@nestjs/common/decorators';
import { get } from 'http';
import { IUserEntity } from '../entities/user.entity';
import { userService } from '../user.service';
import { UserDto } from './dto/userImput.dto';
import { PartialUserDto } from './partialUserInput.do';
import { IHttpResponse } from '../../utils/IHttpResponse';
import { handleException } from 'src/utils/exceptions/exceptionsHelper';

@Controller()
export class userController {
  constructor(private service: userService) {}
  @Get()
  async getAllUser(): Promise<IUserEntity[]> {
    return this.service.getAllUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') Userid: string): Promise<IUserEntity> {
    try {
      return this.service.getUserById(Userid);
    } catch (err) {
      handleException(err);
    }
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
      handleException(err);
    }
  }
  @Patch()
  async updateUser(@Body() userData: PartialUserDto) {
    try {
      return await this.service.updateUser(userData);
    } catch (err) {
      handleException(err);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') userId: string): Promise<string> {
    const userIsDeleted = await this.service.deleteByid(userId);
    if (!userIsDeleted) {
      return 'User deleted successfully';
    } else {
      return 'User not found';
    }
  }
}
