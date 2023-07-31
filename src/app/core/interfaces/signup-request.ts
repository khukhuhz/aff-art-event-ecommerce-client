import { Role } from '@core/enums';

export interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
}
