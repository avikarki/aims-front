import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "../../types";

// Initialize from localStorage or sessionStorage
const loadInitialState = (): AuthState => {
  const authData =
    localStorage.getItem("auth") || sessionStorage.getItem("auth");
  return authData
    ? JSON.parse(authData)
    : {
        token: null,
        refreshToken: null,
        user: null,
        persist: false,
      };
};

const initialState: AuthState = loadInitialState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        token: string;
        refreshToken: string;
        user: User;
        persist?: boolean;
      }>
    ) => {
      const { token, refreshToken, user, persist = false } = action.payload;
      state.token = token;
      state.refreshToken = refreshToken;
      state.user = user;
      state.persist = persist;

      // Store in appropriate storage
      const storage = persist ? localStorage : sessionStorage;
      storage.setItem(
        "auth",
        JSON.stringify({
          token,
          refreshToken,
          user,
          persist,
        })
      );
    },

    clearCredentials: (state) => {
      state.token = null;
      state.refreshToken = null;
      state.user = null;

      // Clear both storages
      localStorage.removeItem("auth");
      sessionStorage.removeItem("auth");
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
