import { UserDto } from '../services/dto/userImput.dto';

export interface IUserEntity extends UserDto {
  id: string;
}
