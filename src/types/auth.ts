// types/auth.ts
export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  user: User | null;
  persist: boolean; // New: Remember me option
}

export interface User {
  id: string;
  email: string;
  name: string;
  // Add other user properties as needed
}

export interface LoginRequest {
  // email: string;
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: User;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  token: string;
  refreshToken: string;
}
