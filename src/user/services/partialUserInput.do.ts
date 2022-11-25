import {PartialType} from '@nestjs/mapped-types';
import { UserDto } from './dto/userImput.dto';

export  class PartialUserDto extends PartialType(UserDto)  {
    id: string;
}