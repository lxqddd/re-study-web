/*
 * @Author       : your name
 * @Date         : 2020-11-18 21:45:19
 * @LastEditTime : 2020-11-21 10:20:45
 * @LastEditors  : Please set LastEditors
 * @Description  : In User Settings Edit
 * @FilePath     : \re-study-web\正课\20201117\20201117+刘向前+react05\homework\src\index.js
 */
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
