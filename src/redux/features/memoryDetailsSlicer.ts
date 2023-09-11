import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type MemoryDetailsState = {
  open: boolean,
  id: string | null
}

const initialState ={
  open: false,
  id: null
} as MemoryDetailsState

export const memoryDetails = createSlice({
  name: 'memoryDetails',
  initialState,
  reducers: {
    open: (state, action:PayloadAction<string>) => {
      state.open = true
      state.id = action.payload
    },
    close: (state) => {
      state.open = false
      state.id = null
    }
  }
})

export const {
  open,
  close
} = memoryDetails.actions

export default memoryDetails.reducer