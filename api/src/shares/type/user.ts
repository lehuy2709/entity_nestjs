export enum Role {
  ADMIN = 'admin',
  STUDENT = 'student',
  TEACHER = 'teacher'
}

export interface UserBaseI {
  name: string;
  email: string;
  password: string;
  role: string;
  status: string;
  avatar: number | null;
  parent_name: string;
  parent_phone: string;
}

export interface UserI extends UserBaseI {
  id: number;
}

export type UserReqI = UserBaseI;

export type UserResI = UserI;

export interface LoginI {
  email: string;
  password: string;
}
export interface RegisterI {
  name: string;
  email: string;
  password: string;
}


export interface LoginResI {
  accessToken: string;
  refreshToken: string;
}
