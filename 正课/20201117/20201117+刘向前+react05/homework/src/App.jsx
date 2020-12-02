import React from 'react'
import './static/index.css'
import Nav from './views/Nav'
import ErrorPageOf404 from './views/ErrorPageOf404'
import ListPage from './views/List/index'
import Listpagenub from './views/ListPagenub'
import { useDispatch } from 'react-redux'
const { Redirect, Switch, Route } = require('react-router-dom')
export default function App() {
  const dispatch = useDispatch()
  return (
    <div className='wrap'>
      <Nav />
      <Switch>
        <Route
          path={['/', '/list', '/list/:type', '/list/:type/:page']}
          exact
          render={props => {
            const { match } = props
            const { type = 'all', page = '1' } = match.params
            dispatch({
              type: 'SET_PAGE',
              page
            })
            const hasType = ['all', 'good', 'share', 'ask'].includes(type)
            const hasPage = parseInt(page) > 0
            if (hasPage && hasType) {
              return <ListPage />
            }
            return <Redirect to='/404' />
          }}
        />
        <Route component={ErrorPageOf404} />
      </Switch>
      <Listpagenub />
    </div>
  )
}

// duibian bi xie bian
对边比斜边
