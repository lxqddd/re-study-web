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
