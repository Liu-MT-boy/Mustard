<template>
  <div style="height: 500px; width: 500px; border: 1px solid seagreen; margin: 10px 0 0 10px">
    <iframe
      id="virtual"
      name="virtual"
      src="../../public/virtuarlist/virtual.html"
      frameborder="0"
      style="height: 500px; width: 500px"
    ></iframe>
  </div>
  <div class="virtuarlist">
    <scrollList :scrollList="items" :size="size" :shownumber="shownumber" />
  </div>
  <div>
    <ul>
      <li>苹果</li>
      <li>凤梨</li>
      <li>鸡蛋</li>
    </ul>
  </div>
  <div class="between">
    <div class="between-content-2">居中</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import scrollList from './scrollList.vue'
import '../../mock/login'
// import axios from 'axios'
import { getUser } from '../api/login'
// 定义对象类型
interface MyObject {
  id: number
  name: string
}
const size = ref(50)
const shownumber = ref(20)
const items = ref<MyObject[]>([])

onMounted(() => {
  for (let i = 0; i < 100; i++) {
    let list = {
      id: i,
      name: `蒋讲讲 - ` + i
    }
    items.value.push(list)
  }

  // 获取用户信息
  getUser().then((resp) => {
    console.log(resp);
  })

  // axios.get('/api/users').then(res => {
  //   console.log();
  // })

  // let virtualIframe = document.querySelector('#virtual')
  // console.log(virtualIframe);
  // console.log(virtualIframe.window);
  // console.log(virtual);
  // console.log(virtual.window);

  // console.log(virtualIframe);
  // console.log(virtualIframe.contentWindow);
  // virtualIframe.contentWindow.postMessage('Hello from parent!','*')

  // 数据类型
  // Number
  // Object
  // undefined
  // Symbol
  // String
  // Boolean
  // null
  // Array

  // js继承
  // 1.class继承
  // class Parent {
  //   constructor(name) {
  //     this.name = name
  //   }
  // }
  // class Child extends Parent {
  //   constructor(name) {
  //     super(name)
  //   }
  // }
  // var child = new Child('hello')
  // console.log(child);
  // 2.原型链继承
  // function Parent() {
  //   this.name = 'Parent'
  // }

  // function Child() {

  // }

  // Child.prototype = new Parent()
  // var child = new Child()
  // console.log(child.name);
  // 3.构造函数继承
  // function Parent() {
  //   this.name = 'Parent'
  // }

  // function Child() {
  //   console.log(this);
  //   Parent.call(this)
  // }

  // var child = new Child()
  // console.log(child.name);

  // var person1 = new Person('张三', '1102236652')
  // var person2 = new Person('李四', '9118827723')
  // console.log(person1);
  // console.log(person2);
  // console.log(person1.getFullName());
  // console.log(person2.getFullName());
  // console.log(Object.keys(person1));
  // console.log(Object.values(person1));

  // console.log(Object.create(person1));
  // console.log(Object.toString());

  // console.log(Person.prototype);
  // console.log(Person.__proto__);
  // console.log(Object.getPrototypeOf(Person) === Person.__proto__);
  // Object
  // String
  // Number
  // Function
  // Boolean
  // undefined
  // Symbol

  // const person1 = { name: '张三' }
  // const person2 = { phone: '15985699858' }
  // person2.__proto__ = person1
  // console.log(person2.name)
  // console.log(person2.phone)
  // let counter = createContent()
  // counter()
  // console.log(counter())
  // console.log(counter())

  // let num = 1
  // console.log(typeof(num));
  // console.log(num.constructor === Number);

  // console.log(Object.apply);
  // let s1 = {
  //   name: 'som',
  //   old: 20
  // }
  // Object.defineProperty(s1,'phone', {
  //   value: '15813550665',
  //   enumerable: false
  // })
  // console.log(s1);
  // console.log(Object.keys(s1));
  // console.log(Object.getOwnPropertyNames(s1));

  // // js call()
  // let pettyNum = {
  //   name: 'Array',
  //   old: 24
  // }
  // function parent() {
  //   console.log(this.name + ':' + this.old);
  // }
  // parent.call(pettyNum)

  // new 一个对象全过程---四个过程
  // function newParent(name:string) {
  //   this.name = name
  // }
  // const newChild = new newParent('hello')
  // console.log(newChild.name);
  // 四个过程
  // 1
  // let obj = {}
  // // 2.
  // obj.constructor = newParent
  // obj.__proto__ = newParent.prototype
  // // 3.
  // var result = newParent.call()

  // // 闭包模块化封装
  // const createParent = (function(){
  //   let count = 0
  //   function add(x:number) {
  //     count += x
  //   }
  //   function subtract(y:number) {
  //     count -= y
  //   }
  //   function getCount() {
  //     return count
  //   }
  //   return {
  //     add,
  //     subtract,
  //     getCount,
  //   }
  // })()
  // createParent.add(5)
  // createParent.subtract(10)
  // console.log(createParent.getCount());

  // // 闭包-私有变量
  // function createPetty(name:string) {
  //   let pettyName = name
  //   function pettyFuc() {
  //     return pettyName
  //   }
  //   return {
  //     getPetty: pettyFuc
  //   }
  // }
  // let pettyname = createPetty('petty')
  // console.log(pettyname.getPetty());
})
</script>

<style lang="scss" scoped>
.virtuarlist {
  padding: 20px;
}
.between {
  height: 500px;
  width: 500px;
  border: 1px solid salmon;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .between-content-1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .between-content-2 {
  }
}
</style>
