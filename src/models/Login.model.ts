export enum LoginState{
  LOGIN_OK = "LOGIN_OK",
  BAD_USERNAME = "BAD_USERNAME",
  BAD_PASSWORD = "BAD_PASSWORD"
}
export interface AuthInfo{
  token: string;
  id: string;
}
