import {
  BadRequestException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { IException } from './IException';

export enum Exception {
  InvalidData,
  DataBaseException,
  NotFoundData,
  UnauthorizedException,
}

export function handleException({ exception , message }: IException) {
  if (exception === Exception.DataBaseException) {
    throw new InternalServerErrorException('Error in DataBase');
  }

  if (exception === Exception.InvalidData) {
    throw new BadRequestException(message ? message: "Invalid Data");
  }

  if (exception === Exception.UnauthorizedException) {
    throw new UnauthorizedException(
      message ? message : 'You need authorization to this action',
    );
  }
}
