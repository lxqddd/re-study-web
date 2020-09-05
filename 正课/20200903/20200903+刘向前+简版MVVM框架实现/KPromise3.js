export default class KPromise {
    constructor(handle) {
        this.status = "pending";
        this.value = undefined;
        // call apply  bind();
        this.fulfilledFnQueue = [];
        this.rejectedFnQueue = [];
        handle(this._resolve.bind(this), this._reject.bind(this));
        
    }
    _resolve(val) {
        let run = () => {
            // console.log(this);
            this.status = "fulfilled";
            this.value = val;
            // console.log(this.fulfilledFnQueue);
            // 执行；
            // this.fulfilledFn && this.fulfilledFn(val);
            // [f1,f2,f3..]
            // 循环执行函数；
            let cb;
            while (cb = this.fulfilledFnQueue.shift()) {
                cb && cb(val);
            }
        }
        // run();
        // setTimeout(run, 0);
        let ob = new MutationObserver(run)
        ob.observe(document.body, {
            attributes: true
        })
        document.body.setAttribute("kkb", Math.random())
    }
    _reject(val) {
        let run = () => {
            this.status = "rejected";
            this.value = val;
            // 执行；
            // this.rejectedFn && this.rejectedFn(val);
            let cb;
            while (cb = this.rejectedFnQueue.shift()) {
                cb && cb(val);
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
        document.body.setAttribute("kkb", Math.random())

    }
    then(onResolved, onRejected) {
        // return this;
        return new KPromise((resolve, reject) => {
            let resolveFn = (val) => {
                // then 里return的结果 就是res
                let res = onResolved && onResolved(val);
                if (res instanceof KPromise) {
                    // 返还的是KPromise对象；
                    // res.then(res=>{
                    //     resolve(res);
                    // })
                    // 简写；
                    res.then(resolve);
                } else {
                    resolve(res);
                }
            }

            let rejectFn = (val) => {
                let res = onRejected && onRejected(val);
                reject(res);
            }


            // if (this.status === "fulfilled") {
            //     console.log("fulfilled")
            //     resolveFn && resolveFn(this.value);
            // } else if (this.status === "rejected") {
            //     rejectFn && rejectFn(this.value);
            // } else if (this.status === "pending") {
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

                this.fulfilledFnQueue.push(resolveFn);
                this.rejectedFnQueue.push(rejectFn);

            // }
        })
    }
    static resolve(val) {
        return new KPromise(res => {
            res(val);
        })
    }
    static reject(val) {
        return new KPromise((res, rej) => {
            rej(val);
        })
    }
    static all(lists) {
        return new KPromise((resolve) => {
            let arr = [];
            let num = 0;
            lists.forEach(item => {
                item.then(res => {
                    // console.log(res);
                    num++;
                    arr.push(res);
                    if(num>=lists.length){
                        resolve(arr);
                    }
                })
            })
        })
    }
    static race(lists){
        return new KPromise((resolve,reject)=>{
            lists.forEach(item=>{
                // item  多个promise对象；
                item.then(res=>{
                    // item 谁快 谁就先调用resolve
                    resolve(res);
                },err=>{
                    reject(err);
                })
            })
        })
    }
    finally(cb){
        // cb(); 错误的；
        // cb();
        // this.then(res=>{
        //     cb();
        // },err=>{
        //     cb();
        // });
        this.then(cb,cb);
    }

}
// KPromise.all
