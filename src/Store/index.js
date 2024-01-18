import { configureStore } from "@reduxjs/toolkit";
import groupsReducer from "./Slices/groups";


const store = configureStore({
  reducer: {
    groups: groupsReducer
  }
})

export default store