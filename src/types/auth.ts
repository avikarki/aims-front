// types/auth.ts
export interface AuthState {
  accessToken: string | null;
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
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}
