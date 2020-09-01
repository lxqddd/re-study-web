export default class KPromise{
    constructor(handle){
        this.status = "pending";
        this.value = undefined;
        // call apply  bind();
        handle(this._resolve.bind(this),this._reject.bind(this));
        this.fulfilledFn = undefined;
        this.rejectedFn = undefined;
    }
    _resolve(val){
        // console.log(this);
        this.status = "fulfilled";
        this.value = val;
        this.fulfilledFn && this.fulfilledFn(val);
    }
    _reject(val){
        this.status = "rejected";
        this.value = val;
        this.rejectedFn && this.rejectedFn(val);
    }
    then(onResolved,onRejected){
        if(this.status === "fulfilled"){
            onResolved && onResolved(this.value);
        }else if(this.status === "rejected"){
            onRejected && onRejected(this.value);
        }else if(this.status === "pending"){
            // 不执行 ，保存 onResolved 或者是onRejected；
            // onResolved && onResolved(this.value);
            // onRejected && onRejected(this.value);
            this.fulfilledFn = onResolved;
            this.rejectedFn = onRejected;
        }
    }


}
// KPromise.all