import { Entity } from '../entity';

export interface User extends Entity {
  username: string;
  email: string;
}
