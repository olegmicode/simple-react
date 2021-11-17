import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    title: 'I think I will buy the red car, or I will lease the blue one.',
    image: '/images/1.jpg',
    content: 'It seemed like it should have been so simple. There was nothing inherently difficult with getting the project done. It was simple and straightforward enough that even a child should have been able to complete it on time, but that wasn\'t the case. The deadline had arrived and the project remained unfinished.'
  }, {
    id: '2',
    title: 'Kevin embraced his ability to be at the wrong place at the wrong time.',
    image: '/images/2.jpg',
    content: 'Cake or pie? I can tell a lot about you by which one you pick. It may seem silly, but cake people and pie people are really different. I know which one I hope you are, but that\'s not for me to decide. So, what is it? Cake or pie?'
  }, {
    id: '3',
    title: 'The Guinea fowl flies through the air with all the grace of a turtle.',
    image: '/images/3.jpg',
    content: 'Spending time at national parks can be an exciting adventure, but this wasn\'t the type of excitement she was hoping to experience. As she contemplated the situation she found herself in, she knew she\'d gotten herself in a little more than she bargained for. It wasn\'t often that she found herself in a tree staring down at a pack of wolves that were looking to make her their next meal.'
  }, {
    id: '4',
    title: 'The furnace repairman indicated the heating system was acting as an air conditioner.',
    image: '/images/4.jpg',
    content: 'Patricia\'s friend who was here hardly had any issues at all, but she wasn\'t telling the truth. Yesterday, before she left to go home, she heard that her husband is in the hospital and pretended to be surprised. It later came out that she was the person who had put him there.'
  }, {
    id: '5',
    title: 'David proudly graduated from high school top of his class at age 97.',
    image: '/images/5.jpg',
    content: 'He was aware there were numerous wonders of this world including the unexplained creations of humankind that showed the wonder of our ingenuity. There are huge heads on Easter Island. There are the Egyptian pyramids. There’s Stonehenge. But he now stood in front of a newly discovered monument that simply didn\'t make any sense and he wondered how he was ever going to be able to explain it.'
  }
]

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find(post => post.id === id)

      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }
  }
})

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer