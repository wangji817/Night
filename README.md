# 前端开发必备的知识

### 1.Promise的原理，在new时是异步的还是同步的
- promise有三种状态，分别是pedding 、Fulfilled、 Rejected。
> Pending Promise对象实例创建时候的初始状态

> Fulfilled 可以理解为成功的状态

> Rejected可以理解为失败的状态

- 构造一个Promise实例需要给Promise构造函数传入一个函数。传入的函数需要有两个形参，两个形参都是function类型的参数。分别是resolve和reject，resolve执行时，用then方法接收，reject执行时，用catch接收
- Promise本身是同步的，他的then方法和catch方法是异步的
### 2.this指向，如何改变this指向
- 在全局作用域下，this指向window，
- 在函数作用域下，this指向依旧是window，在严格模式下，this指向报undefined，
- 在对象里，this指向当前对象
- apply、call、bind，apply方法和call方法有些相似，它也可以改变this的指向，也可以有多个参数，但是不同的是，第二个参数必须是一个数组，call和apply都是改变上下文中的this并立即执行这个函数，bind方法可以让对应的函数想什么时候调就什么时候调用，并且可以将参数在执行的时候添加，这是它们的区别
### 3.闭包
- 闭包就是能够读取其他函数内部变量的函数。在js中，只有函数内部的子函数才能读取局部变量，可以将闭包理解成“函数中的函数”
### 4.深拷贝、浅拷贝
### 5.类组件、函数组件
### 6.HOC高阶组件
### 7.React Hooks
### 8.怎么创建一个object，并判断是否是一个object
- 可直接new Object，或直接赋值等式申明，即var obj = {}
- 一般使用for in遍历该对象的-key是否存在即可。
### 9.React.Component与React.PureComponent的区别
- PureComponent其实就是一个继承自Component的子类，会自动加载shouldComponentUpdate函数。当组件需要更新的时候，shouldComponentUpdate会对组件的props和state进行一次浅比较。如果props和state都没有发生变化，那么render方法也就不会出发，当然也就省去了之后的虚拟dom的生成和对比，在react性能方面得到了优化。
- 而Component必须要通过自己去调用生命周期函数shouldComponentUpdate来实现react组件的优化。
### 10.有哪几种数组遍历方法 for循环，for in，map，forEach
- forEach：用来遍历数组中的每一项，这个方法执行没有返回值，不影响原数组
- map：支持return，相当于原数组克隆了一份，把克隆的每项改变了，也不影响原数组
- for in：可以遍历数组的键值，for of遍历的是数组的值
### 11.函数防抖和节流
- 所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间
- 所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数