import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";



export class UserDto {
    @ApiProperty()
    @IsString()
    name: string;
    
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email: string;
    
    @ApiProperty()
    password: string;
    
    @ApiProperty()
    @IsString()
    cpf: string;
    
    @ApiProperty()
    @IsString()
    role: string;
}
