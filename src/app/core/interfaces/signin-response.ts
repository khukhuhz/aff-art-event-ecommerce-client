import { Role } from '@core/enums';

export interface SignInResponse {
  token: string;
  status: boolean;
  message: string;
  role: Role;
}
