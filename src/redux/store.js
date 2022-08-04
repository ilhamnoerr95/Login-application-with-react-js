import { configureStore } from '@reduxjs/toolkit'
import authentication from './authentication'
import listData from './list'
export const store = configureStore({
  reducer: {
    auth: authentication,
    listUser: listData
  },
})