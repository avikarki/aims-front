import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface userState {
  name: string;
  contact: string;
  id: string;
  isActive: boolean;
}

const initialState: userState[] = [];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<userState>) => {
      return [...state, { ...action.payload, id: uuidv4() }];
    },
    editUser: (state, action: PayloadAction<userState>) => {
      return state.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, editUser } = userSlice.actions;

export default userSlice.reducer;
