import { createSlice } from "@reduxjs/toolkit";

const initialState = null



const groupsSlice = createSlice({
  name: "groups-slice",
  initialState,
  reducers: {
    setGroups(_state, action) {
      return action.payload
    },
    // resetGroups(state) {
    //   state.groups = []
    // },

    addMember: (state, {payload}) => {
      state.info = {...state, ...payload}
    },

    addGroup:(state, {payload}) => {
      // state.groups.push(payload)
      state.info  = {...state, ...payload}
    },
    // removeGroups(state, payload) {
    //   state.groups = state.groups.filter((group) => group._id !== payload);

    // },
  },
});

const groupsReducer = groupsSlice.reducer;

export default groupsReducer;

export const { setGroups, addMember, addGroup} = groupsSlice.actions;
