const { NavLink, useParams } = require('react-router-dom')

export default function Nav() {
  const { type = 'all' } = useParams()
  return (
    <nav className='nav'>
      <NavLink
        to={'/list/all'}
        activeClassName='active'
        isActive={() => {
          console.log(type)
          return type === 'all'
        }}>
        全部
      </NavLink>
      <NavLink to={'/list/good'} activeClassName='active'>
        精华
      </NavLink>
      <NavLink to={'/list/share'} activeClassName='active'>
        分享
      </NavLink>
      <NavLink to={'/list/ask'} activeClassName='active'>
        问答
      </NavLink>
    </nav>
  )
}
