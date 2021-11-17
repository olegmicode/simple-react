import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    image: '1-image.jpg',
    joinedDate: '2019',
    email: 'george.bluth@reqres.in',
    booksWritten: 26
  }, {
    image: '2-image.jpg',
    joinedDate: '2019',
    email: 'janet.weaver@reqres.in',
    booksWritten: 27
  }, {
    image: '3-image.jpg',
    joinedDate: '2019',
    email: 'emma.wong@reqres.in',
    booksWritten: 28
  }, {
    image: '4-image.jpg',
    joinedDate: '2019',
    email: 'eve.holt@reqres.in',
    booksWritten: 29
  }, {
    image: '5-image.jpg',
    joinedDate: '2019',
    email: 'charles.morris@reqres.in',
    booksWritten: 30
  }, {
    image: '6-image.jpg',
    joinedDate: '2019',
    email: 'tracey.ramos@reqres.in',
    booksWritten: 31
  }
]

export const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {}
})

export default authorsSlice.reducer