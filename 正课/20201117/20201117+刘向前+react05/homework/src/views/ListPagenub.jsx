import { NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import data from '../data.js'
const len = 5 //每页5条数据
function Listpagenub() {
  const curPage = useSelector(state => state.page)
  const dispatch = useDispatch()
  let { type = 'all', page = '1' } = useParams()
  let nowData = []
  if (type !== 'all') {
    nowData = data[type]
  } else if (type === 'all') {
    let temp = []
    for (let type in data) {
      temp = [...temp, ...data[type]]
    }
    nowData = [...temp]
  }
  let pageLength = Math.ceil(nowData.length / len)
  function render() {
    let navs = []
    for (let i = 1; i <= pageLength; i++) {
      navs.push(
        <NavLink key={i} to={`/list/${type}/${i}`}>
          {i}
        </NavLink>
      )
    }
    navs.unshift(
      <NavLink
        key={Date.now()}
        to={`/list/${type}/${parseInt(curPage) - 1}`}
        onClick={() => {
          if (curPage > 0) {
            dispatch({
              type: 'SET_PAGE',
              page: curPage - 1
            })
          }
        }}>
        上一页
      </NavLink>
    )
    navs.push(
      <NavLink
        key={Date.now() + 1}
        to={`/list/${type}/${parseInt(curPage) + 1}`}
        onClick={() => {
          if (parseInt(curPage) < pageLength) {
            dispatch({
              type: 'SET_PAGE',
              page: curPage + 1
            })
          }
        }}>
        下一页
      </NavLink>
    )
    return navs
  }
  return <nav className='pagination'>{render()}</nav>
}
export default Listpagenub
