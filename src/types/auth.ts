export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthUser {
  email: string;
  role: string;
  name: string;
}

export interface AuthResponse {
  token?: string;
  access_token?: string;
  role: string;
  user?: AuthUser;
}
