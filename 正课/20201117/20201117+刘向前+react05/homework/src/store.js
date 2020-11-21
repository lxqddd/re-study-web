// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// const page = (page = '1', action) => {
//   console.log(action)
//   // if (action.type === 'SET_PAGE') {
//   //   return page
//   // }
//   switch (action.type) {
//     case 'SET_PAGE':
//       console.log(page)
//       return page
//   }
//   return page
// }

// const store = createStore(
//   combineReducers({
//     page
//   }),
//   applyMiddleware(thunk)
// )
// export default store

import { createStore } from 'redux'
const reducer = (
  state = {
    page: 1
  },
  action
) => {
  const { page } = action
  switch (action.type) {
    case 'SET_PAGE':
      return {
        ...state,
        page
      }
  }
  return state
}
const store = createStore(reducer)
export default store
