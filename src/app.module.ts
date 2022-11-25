import { Module } from '@nestjs/common';
import { userController } from './user/services/user.controller';
import { userService } from './user/user.service';


@Module({
    controllers:[userController],
    providers:[userService]
})
export class AppModule {}
