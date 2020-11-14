import React from 'react'

export default function States(props) {
  const { data } = props
  console.log(data)
  const selectCount = data.filter(item => item.isSelect).length
  return (
    <p>
      当前选中{selectCount}项，共{data.length}条留言
    </p>
  )
}
