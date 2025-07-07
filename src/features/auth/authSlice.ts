import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, User } from "../../types";
import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Initialize from localStorage or sessionStorage
const loadInitialState = (): AuthState => {
  const authData =
    localStorage.getItem("auth") || sessionStorage.getItem("auth");
  return authData
    ? JSON.parse(authData)
    : {
        accessToken: null,
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
        accessToken: string;
        refreshToken: string;
        user: User;
        persist?: boolean;
      }>
    ) => {
      const {
        accessToken,
        refreshToken,
        user,
        persist = false,
      } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.user = user;
      state.persist = persist;

      // Store in appropriate storage
      const storage = persist ? localStorage : sessionStorage;
      storage.setItem(
        "auth",
        JSON.stringify({
          accessToken,
          refreshToken,
          user,
          persist,
        })
      );
    },

    clearCredentials: (state) => {
      state.accessToken = null;
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

// Basic selectors
const selectAuthState = (state: RootState) => state.auth;

// Memoized selectors
export const selectTokens = createSelector([selectAuthState], (auth) => ({
  accessToken: auth.accessToken,
  refreshToken: auth.refreshToken,
}));

// export const selectUserRoles = createSelector(
//   [selectAuthState],
//   (auth) => auth.user?.roles || []
// );
