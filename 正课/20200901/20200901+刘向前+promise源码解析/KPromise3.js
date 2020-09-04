export default class KPromise {
  constructor(handle) {
    this.status = 'pending'
    this.value = undefined
    // call apply  bind();
    handle(this._resolve.bind(this), this._reject.bind(this))
    this.fulfilledFnQueue = []
    this.rejectedFnQueue = []
  }
  _resolve(val) {
    let run = () => {
      // console.log(this);
      this.status = 'fulfilled'
      this.value = val
      // console.log(this.fulfilledFnQueue);
      // 执行；
      // this.fulfilledFn && this.fulfilledFn(val);
      // [f1,f2,f3..]
      // 循环执行函数；
      let cb
      while ((cb = this.fulfilledFnQueue.shift())) {
        cb && cb(val)
      }
    }
    // setTimeout(run, 0);
    let ob = new MutationObserver(run)
    ob.observe(document.body, {
      attributes: true
    })
    document.body.setAttribute('kkb', Math.random())
  }
  _reject(val) {
    let run = () => {
      this.status = 'rejected'
      this.value = val
      // 执行；
      // this.rejectedFn && this.rejectedFn(val);
      let cb
      while ((cb = this.rejectedFnQueue.shift())) {
        cb && cb(val)
        // if(cb){
        //     cb(val)
        // }
      }
    }
    // setTimeout(run,0);

    let ob = new MutationObserver(run)
    ob.observe(document.body, {
      attributes: true
    })
    document.body.setAttribute('kkb', Math.random())
  }
  then(onResolved, onRejected) {
    // return this;
    return new KPromise((resolve, reject) => {
      if (this.status === 'fulfilled') {
        onResolved && onResolved(this.value)
      } else if (this.status === 'rejected') {
        onRejected && onRejected(this.value)
      } else if (this.status === 'pending') {
        // 不执行 ，保存 onResolved 或者是onRejected；
        // onResolved && onResolved(this.value);
        // onRejected && onRejected(this.value);
        // 第一then的时候this.fulfilledFn  = res=>{console.log("111",res);}
        // 第二个then的时候this.fulfilledFn = res=>{console.log("222",res);}

        // this.fulfilledFn = onResolved;
        // this.rejectedFn = onRejected;
        // 保存函数队列；
        // 需要onResolved、onRejected 执行结果；
        // 没有执行 通过一个函数 把逻辑放在了fulfilledFnQueue或者是rejectedFnQueue队列里；
        let resolveFn = val => {
          let res = onResolved && onResolved(val)
          if (res instanceof KPromise) {
            // 返还的是KPromise对象；
            // res.then(res=>{
            //     resolve(res);
            // })
            // 简写；
            res.then(resolve)
          } else {
            resolve(res)
          }
        }

        let rejectFn = val => {
          let res = onRejected && onRejected(val)
          reject(res)
        }

        this.fulfilledFnQueue.push(resolveFn)
        this.rejectedFnQueue.push(rejectFn)
      }
    })
  }
  static resolve(val) {
    return new KPromise(res => {
      res(val)
    })
  }
  static reject(val) {
    return new KPromise((res, rej) => {
      rej(val)
    })
  }
  static all(lists) {
    return new KPromise(resolve => {
      let arr = []
      let num = 0
      lists.forEach(item => {
        item.then(res => {
          // console.log(res);
          num++
          arr.push(res)
          if (num >= lists.length) {
            resolve(arr)
          }
        })
      })
    })
  }
  static race(lists) {
    return new KPromise((resolve, reject) => {
      lists.forEach(item => {
        // item  多个promise对象；
        item.then(
          res => {
            // item 谁快 谁就先调用resolve
            resolve(res)
          },
          err => {
            reject(err)
          }
        )
      })
    })
  }

  // 小猫
  finally(cb) {
    return this.then(
      data => {
        return new KPromise(cb).then(() => data)
      },
      err => {
        return new KPromise(cb).then(() => {
          throw err
        })
      }
    )
  }
}
// KPromise.all
