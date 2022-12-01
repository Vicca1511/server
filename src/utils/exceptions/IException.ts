import { Exception } from './exceptionsHelper';

export interface IException {
  message?: string;
  exception: Exception;
}