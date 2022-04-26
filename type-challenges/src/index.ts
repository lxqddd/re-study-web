// 构造器

interface IPerson {
  name: string
  age: number
}
interface IPersonConstructor {
  new (name: string, age: number): IPerson
}

function CreatePerson (ctor: IPersonConstructor): IPerson {
  return new ctor('向阳', 18)
}

// type res = 1 extends 2 ? true : false

type isTwo<T> = T extends 2 ? true : false
type res1 = isTwo<1>
type res2 = isTwo<2>


type First<Tuple extends Array<unknown>> = Tuple extends [infer X, ...infer R] ? X : never

type resFirst = First<[1, '2', 3, 5]>

type Last<Tuple extends Array<unknown>> = Tuple extends [...infer P, infer X] ? X : never
type resLast = Last<[1, 2, 3, '4']>

// 联合类型
type Union = 1 | 2 | '3'


type MapType<T> = {
  [Key in keyof T]: T[Key]
}
type resMap = MapType<{a: 1, b: 2}>

const map: resMap = {
  a: 1,
  b: 2
}

// 剔除数组中的最后一个
type PopArr<Arr extends Array<unknown>> = 
  Arr extends [] ? [] 
  : Arr extends [...infer Rest, unknown] ? Rest : never
type resPopArr = PopArr<[]>


// 剔除数组中的第一个
type ShiftArr<Arr extends Array<unknown>> =
  Arr extends [] ? []
  : Arr extends [infer F, ...infer R] ? R : never

type resShiftArr = ShiftArr<[1, 2, 3, 4, 5]>


// 判断字符串是否是以某字符串开头
type StartWidth<Str extends string, Prefix extends string> =
  Str extends `${Prefix}${string}` ? true : false

type resStartWidth = StartWidth<'#strings', '#'>


// 替换字符串中的某一部分
type ReplaceStr<Str extends string, From extends string, To extends string> =
  Str extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${Suffix}` : Str

type resReplaceStr = ReplaceStr<'hello world', 'lo', 'ol'>


// 去掉字符串中的空格
type TrimRight<Str extends string> =
  Str extends `${infer R}${' ' | '\n' | '\t'}`
  ? TrimRight<R> : Str

type resTrimRight = TrimRight<'hello world      '>

type TrimLeft<Str extends string> =
  Str extends `${' ' | '\n' | '\t'}${infer R}`
  ? TrimLeft<R> : Str

type resTrimLeft = TrimLeft<`   
   hello world`>

type Trim<Str extends string> = TrimLeft<TrimRight<Str>>

type resTrim = Trim<`   
hello world     
`>


// 函数
// 获取参数类型
type GetParameters<Func extends Function> =
  Func extends (...args: infer Args) => unknown
  ? Args : never
type TFn = (name: string, age: number) => number
type resGetParameters = GetParameters<TFn>

// 获取返回值类型
type GetReturnType<Func extends Function> =
  Func extends (...args: infer Args) => infer R
  ? R : never
type resGetReturnType = GetReturnType<TFn>


// 方法调用时的this指向问题
class Dog {
  constructor(private name = 'dog') {
    this.name = name
  }

  sayHello(this: Dog): string {
    return `hello ${this.name}`
  }
}

const dog = new Dog()
dog.sayHello()
type GetThisParameterTypeRes<T> =
  T extends (this: infer ThisType, ...args: Array<any>) => any
  ? ThisType : never
type resGetThisParameterTypeRes = GetThisParameterTypeRes<typeof dog.sayHello>

type Push<Arr extends Array<unknown>, Ele> = [...Arr, Ele ]
type resPush = Push<[1, 2, 3], 4>

