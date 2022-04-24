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
  [Key in keyof T]: Key extends 'a' ? string : number
}
type resMap = MapType<{a: 1, b: 2}>

const map: resMap = {
  a: '1',
  b: 2
}