import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data'
const len = 5

export default function ListPage() {
  let { type = 'good', page = '1' } = useParams()
  page = Number(page)
  let start = (page - 1) * len
  let end = start + len
  let nowData = []
  if (type !== 'all') {
    nowData = data[type].filter((item, index) => {
      return index >= start && index < end
    })
  } else if (type === 'all') {
    let temp = []
    for (let type in data) {
      temp = [...temp, ...data[type]]
    }
    nowData = temp.filter((item, index) => {
      return index >= start && index < end
    })
  }
  return (
    <ul className='list'>
      {nowData.length > 0 ? nowData.map(item => <li key={item.id}>{item.title}</li>) : '暂无数据'}
    </ul>
  )
}
