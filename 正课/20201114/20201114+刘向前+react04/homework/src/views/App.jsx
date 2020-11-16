import React from 'react'
import './css/index.css'
import Nav from './Nav'
import About from './About'
import JoinUs from './JoinUs'
const { Route } = require('react-router-dom')
const { default: Home } = require('./Home')

export default function App() {
  return (
    <div>
      <Nav />
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/joinUS' component={JoinUs} />
    </div>
  )
}
