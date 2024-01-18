import { createSlice } from "@reduxjs/toolkit";

const initialState = null



const groupsSlice = createSlice({
  name: "Mygroups-slice",
  initialState,
  reducers: {
    setGroups(_state, action) {
      return action.payload
    },
 

    addGroupsMember: (state, {payload}) => {
      state.info = {...state, ...payload}
    },

    addGroups:(state, {payload}) => {
      state.info  = {...state, ...payload}
    },
  
  },
});

const groupsReducer = groupsSlice.reducer;

export default groupsReducer;

export const { setGroups, addMember, addGroup} = groupsSlice.actions;
