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

// push
type Push<Arr extends Array<unknown>, Ele> = [...Arr, Ele ]
type resPush = Push<[1, 2, 3], 4>

// unshift
type Unshift<Arr extends Array<unknown>, I> = [I, ...Arr]
type resUnshift = Unshift<[0, 2, 3, 4, 5, 6], 0>



// zip
type tuple1 = [1, 2]
type tuple2 = ['xiang', 'yang']

type Zip<One extends [unknown, unknown], Other extends [unknown, unknown]> =
  One extends [infer OneFirst, infer OneSecond]
    ? Other extends [infer OtherFirst, infer OtherSecond]
      ? [[OneFirst, OtherFirst], [OneSecond, OtherSecond]] : []
      : []
type resZip = Zip<tuple1, tuple2>

type Zip2<One extends Array<unknown>, Other extends Array<unknown>> =
  One extends [infer OneFirst, ...infer OneRest]
    ? Other extends [infer OtherFirst, ...infer OtherRest ]
      ? [[OneFirst, OtherFirst], ...Zip2<OneRest, OtherRest>] : []
      : []
type resZip2 = Zip2<tuple1, tuple2>

// CapitalizeStr
type CapitalizeStr<Str extends string> =
  Str extends `${infer F}${infer R}`
    ? `${Uppercase<F>}${R}` : Str
type resCapitalizeStr = CapitalizeStr<'xiang'>


// CamelCase
type CamelCase<Str extends string> =
  Str extends `${infer L}_${infer T}${infer R}`
    ? `${L}${Uppercase<T>}${CamelCase<R>}` : Str
type resCamelCase = CamelCase<'liu_xiang_qian'>

// DropSubStr
type DropSubStr<Str extends string, SubStr extends string> =
  Str extends `${infer F}${SubStr}${infer R}`
    ? `${F}${DropSubStr<R, SubStr>}` : Str
type resDropStr = DropSubStr<'xiang_yang_', '_'>


// 函数类型重新构造
// appendArgument
type AppendArgument<Func extends Function, Arg> =
  Func extends (...args: infer Args) => infer R
    ? (...args: [...Args, Arg]) => R : never
type FnT = (name: string, age: number) => string
type resAppendArgument = AppendArgument<FnT, number>

// Mapping
type Obj = {
  name: 'hello'
  age: 12
}
type Mapping<Obj extends object> = {
  [Key in keyof Obj] : Obj[Key]
}

type resMapping = Mapping<Obj>

// UppercaseKey
type UppercaseKey<Obj extends object> = {
  [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key]
}
type resUppercaseKey = UppercaseKey<Obj>
type UppercaseKey2<Obj extends Record<string, any>> = {
  [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key]
}
type resUppercaseKey2 = UppercaseKey2<Obj>

// ToReadonly
type ToReadonly<T> = {
  readonly [Key in keyof T]: T[Key]
}
type resToReadonly = ToReadonly<Obj>
  

// toPartial
type ToPartial<T> = {
  [Key in keyof T]?: T[Key]
}
type resToPartial = ToPartial<Obj>
// 内置的
type resToPartial2 = Partial<Obj>


// ToMutable
type ToMutable<T> = {
  -readonly [Key in keyof T]: T[Key]
}
type resToMutable = ToMutable<ToReadonly<Obj>>

// ToRequired
type ToRequired<T> = {
  [Key in keyof T] -?: T[Key]
}
type resToRequired = ToRequired<ToPartial<Obj>>
type resToRequired2 = Required<ToPartial<Obj>>

// FilterByValueType
type FilterByValueType<Obj extends Record<string, any>, ValueType> = {
  [
    Key in keyof Obj
      as ValueType extends Obj[Key]
        ? Key : never
  ]: Obj[Key]
}
type resFilterByValueType = FilterByValueType<{
  name: string;
  age: number;
  hobby: string[];
}, number | string>


// 递归
type ttt = Promise<Promise<Promise<Record<string, any>>>>
type DeepPromiseValueType<T> =
  T extends Promise<infer valueType>
    ? DeepPromiseValueType<valueType>
    : T
type resDeepPromiseValueType = DeepPromiseValueType<ttt>


// 数组递归
type arr = [1, 2, 3, 3, 4, 5]
type RevertArr<A extends Array<unknown>> =
  A extends [infer F, ...infer R]
  ? [...RevertArr<R>, F]
  : A
type resRevertArr = RevertArr<arr>

// include
type IsEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false)
type Include<Arr extends Array<unknown>, Find> =
  Arr extends [infer F, ...infer R]
    ? IsEqual<Find, F> extends true
      ? true
      : Include<R, Find>
    : false
type resInclude = Include<arr, 9>


// removeItem
type RemoveItem<Arr extends Array<unknown>, Target, Result extends Array<unknown>> =
  Arr extends [infer F, ...infer R]
  ? IsEqual<F, Target> extends true
    ? RemoveItem<R, Target, Result>
    : RemoveItem<R, Target, [...Result, F]>
  : Result
type resRemoveItem = RemoveItem<arr, 3, []>


// buildArr
type BuildArr<Length extends number, Ele = unknown, Arr extends Array<unknown> = []> =
  Arr['length'] extends Length
  ? Arr : BuildArr<Length, Ele, [...Arr, Ele]>
type resBuildArr = BuildArr<5, 3, []>


// 字符串递归
// replaceAll
type ReplaceAll<Str extends string, From extends string, To extends string> =
  Str extends `${infer L}${From}${infer R}`
  ? `${L}${To}${ReplaceAll<R, From, To>}`
  : Str
type resReplaceAll = ReplaceAll<'hello world', 'l', 'L'>


// string to union
type StringToUnion<Str extends string> =
  Str extends `${infer F}${infer R}`
  ? F | StringToUnion<R>
  : Str
type resStringToUnion = StringToUnion<'hello world'>


// reverseStr
type ReverseStr<Str extends string, Res extends string = ''> =
  Str extends `${infer F}${infer R}`
  ? ReverseStr<R, `${F}${Res}`>
  : Res
type resReverseStr = ReverseStr<'hello'>



// 对象类型的递归
type DeepReadonly<Obj extends Record<string, any>> =
  Obj extends any 
  ? {
    readonly [Key in keyof Obj]: 
      Obj[Key] extends object
      ? Obj[Key] extends Function
        ? Obj[Key]
        : DeepReadonly<Obj[Key]>
      : Obj[Key]
    } 
  : never
type obj = {
  a: 1,
  b: {
    a: 2,
    c: {
      a: 3
      d: {
        a: 4
      }
    }
  }
}
type resDeepReadonly = DeepReadonly<obj>

// 数组长度做计数
// add
type BuildArray<L extends number, Ele = unknown, Arr extends Array<unknown> = []> =
  Arr['length'] extends L
    ? Arr
    : BuildArray<L, Ele, [...Arr, Ele]>
type Add<N1 extends number, N2 extends number> =
  [...BuildArray<N1>, ...BuildArray<N2>]['length']
type resAdd = Add<32, 33>


// subtract
type Subtract<N1 extends number, N2 extends number> =
  BuildArray<N1> extends [...Arr1: BuildArray<N2>, ...Arr2: infer Rest]
    ? Rest['length']
    : never
type resSubtract = Subtract<33, 12>

// StrLen
type StrLen<Str extends string, CountArr extends unknown[] = []> =
  Str extends `${infer F}${infer R}`
    ? StrLen<R, [...CountArr, F]>
    : CountArr['length']
type resStrLen = StrLen<'hello '>


// GreaterThan
type GreaterThan<N1 extends number, N2 extends number, CountArr extends unknown[] = []> =
  N1 extends N2
    ? false
    : CountArr['length'] extends N2
      ? true
      : CountArr['length'] extends N1
        ? false
        : GreaterThan<N1, N2, [...CountArr, unknown]>
type resGreaterThan = GreaterThan<25, 23>

