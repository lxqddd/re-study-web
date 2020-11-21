import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../static/data'
const len = 5

export default function ListPage() {
  let { type = 'good', page = '1' } = useParams()
  page = Number(page)
  let start = (page - 1) * len
  let end = start + len
  let nowData = data[type].filter((item, index) => {
    return index >= start && index < end
  })
  return (
    // <ul className='list'>
    //   <li>Easy-Monitor 3.0 开源 - 基于 Egg 的 Node.js 性能监控解决方案</li>
    //   <li>Easy-Monitor 3.0 开源 - 基于 Egg 的 Node.js 性能监控解决方案</li>
    //   <li>Easy-Monitor 3.0 开源 - 基于 Egg 的 Node.js 性能监控解决方案</li>
    //   <li>Easy-Monitor 3.0 开源 - 基于 Egg 的 Node.js 性能监控解决方案</li>
    //   <li>Easy-Monitor 3.0 开源 - 基于 Egg 的 Node.js 性能监控解决方案</li>
    //   <li>Easy-Monitor 3.0 开源 - 基于 Egg 的 Node.js 性能监控解决方案</li>
    // </ul>
    <ul className='list'>
      {nowData.length > 0 ? nowData.map(item => <li key={item.id}>{item.title}</li>) : '暂无数据'}
    </ul>
  )
}
