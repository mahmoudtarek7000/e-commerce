import {UserRole} from "../ENUMS/user-role";

export interface User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  token?: string;
}
