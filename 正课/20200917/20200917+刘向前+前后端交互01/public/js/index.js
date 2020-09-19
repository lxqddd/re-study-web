let uploadBtnElement = document.querySelector('#uploadBtn')
let attachmentElement = document.querySelector('#attachment')
let taskPanelElement = document.querySelector('#taskPanel')
let taskBodyElement = document.querySelector('#taskBody')
const contentListElement = document.querySelector('.content-list')

getPhotos()

uploadBtnElement.onclick = function () {
  attachmentElement.click()
}

attachmentElement.onchange = function () {
  // console.log('开始上传', attachmentElement.files[0]);

  // attachmentElement.files.forEach(file => {
  //     // 上传
  // })

  let xhr = new XMLHttpRequest()

  // console.log(xhr);

  xhr.open('post', '/upload', true)

  let li = document.createElement('li')
  let span = document.createElement('span')
  span.innerHTML = attachmentElement.files[0].name
  let div1 = document.createElement('div')
  div1.classList.add('task-progress-status')
  let div2 = document.createElement('div')
  div2.classList.add('progress')

  li.appendChild(span)
  li.appendChild(span)
  li.appendChild(div1)
  li.appendChild(div2)

  xhr.upload.onloadstart = function () {
    taskPanelElement.style.display = 'block'

    div1.innerHTML = '准备上传……'
    taskBodyElement.appendChild(li)
  }

  // 与上传下载有关的数据（上传总大小，已经上传的大小）都可以通过事件对象来获取
  xhr.upload.onprogress = function (e) {
    div1.innerHTML = '上传中……'
    console.log(e, (e.loaded / e.total) * 100)

    div2.style.width = ((e.loaded / e.total) * 100).toFixed(2) + '%'
  }

  // 后端响应完成以后出发
  xhr.onload = function () {
    console.log('over')
    div1.innerHTML = '上传完成'
    taskPanelElement.style.display = 'none'
    getPhotos()
  }

  // 通过正文发送数据，数据作为send方法的参数传入的
  // xhr.setRequestHeader('');

  // 如果通过 multipart/form-data 发送数据，数据必须得组织成 form-data 格式
  // 我们可以借助一个对象来完成这个工作 FormData 对象
  let fd = new FormData()
  // fd.append('username', 'zmouse');
  fd.append('attachment', attachmentElement.files[0])
  xhr.send(fd)
}

function getPhotos() {
  // ajax /getPhotos
  // 获取到数据以后，通过dom操作渲染到页面中
  const xhr = new XMLHttpRequest()
  xhr.open('get', '/getPhotos')
  xhr.onload = function () {
    const res = JSON.parse(xhr.response).data
    let imgs = ''
    res.forEach(imgItem => {
      imgs += `<img src="/upload/${imgItem.filename}" width='100px' alt="" />`
    })
    contentListElement.innerHTML = imgs
  }
  xhr.send()
}
