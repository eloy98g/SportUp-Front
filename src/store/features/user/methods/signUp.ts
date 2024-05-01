import { createAsyncThunk } from "@reduxjs/toolkit";

// Api
import Api from "../../../../services/api";

// Types
import User from "../../../types/user/User";
import mapUser from "./mapUser";

const signUp = createAsyncThunk("user/signUp", async (input: any) => {
  const response = await Api.auth.signUp(input);
  const { status, data, message } = response;
  if (status === "success") {
    return mapUser(data) as User;
  } else {
    throw new Error(message);
  }
});

export default signUp;