import Foo from './foo.es6.js'
import {each} from 'lodash'
let foo = new Foo()
console.log(foo.bar())

each(['1', '2', '3'], (num)=>{
    console.log(num)
})
