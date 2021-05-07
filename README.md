# 前端开发必备的知识

## javaScript篇

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
- 浅拷贝（shallowCopy）只是增加了一个指针指向已存在的内存地址；
    用法：
    > 用 = 号赋值引用地址，

    > for in 嵌套到新的对象，

    > Object.assign() 是一种可以对非嵌套对象进行深拷贝的方法，如果对象中出现嵌套情况，那么其对被嵌套对象的行为就成了普通的浅拷贝
- 深拷贝（deepCopy）是增加了一个指针并且申请了一个新的内存，使这个增加的指针指向这个新的内存； 
    用法：
    > JSON.parse(JSON.stringify())，

    > 递归去复制所有层级属性，

    > $.extend( [deep ], target, object1 [, objectN ] )

         deep表示是否深拷贝，为true为深拷贝，为false，则为浅拷贝

         target Object类型 目标对象，其他对象的成员属性将被附加到该对象上。
        
         object1 objectN可选。 Object类型 第一个以及第N个被合并的对象。
### 5.类组件、函数组件
- 函数组件没有this，没有生命周期，没有状态state；类组件有this，有生命周期，有状态state。且因为类组件使用的时候要实例化，而函数组件直接执行函数取返回结果即可
### 6.HOC高阶组件
> 高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件
> 
我们写的纯函数组件只负责处理展示，很多时候会发现，由于业务需求，组件需要被“增强”，例如响应浏览器事件等。如果只有一两个组件我们大可以全部重写为class形式，但如果有许多组件需要进行相似或相同的处理（例如都响应浏览器窗口改变这个事件）时，考虑到代码的复用性，很容易想到用函数处理，HOC也正是为了解决这样的问题而出现的。
说白了，高阶组件的存在和React mixins类似，都是为了解决代码复用的问题

基本原理
HOC高阶组件的基本原理可以写成这样：

    const HOCFactory = (Component) => {
        return class HOC extends React.Component {
            render(){
                return <Component {...this.props} />
            }
        }
    }
很明显HOC最大的特点就是：接受一个组件作为参数，返回一个新的组件。

- 优点：
    - 支持ES6，光这一项就战胜了mixins

    - 复用性强，HOC是纯函数且返回值仍为组件，在使用时可以多层嵌套，在不同情境下使用特定的HOC组合也方便调试。

    - 同样由于HOC是纯函数，支持传入多个参数，增强了其适用范围。

- 缺点：

    - 当有多个HOC一同使用时，无法直接判断子组件的props是哪个HOC负责传递的。

    - 重复命名的问题：若父子组件有同样名称的props，或使用的多个HOC中存在相同名称的props，则存在覆盖问题，而且react并不会报错。当然可以通过规范命名空间的方式避免。

    - 可以发现HOC产生了许多无用的组件，加深了组件层级。

- 所以即使React HOC（高阶组件）比古老的React mixins在解决代码复用问题上进步了不少，但是依然不能令人满意。进一步的方案，参考下篇文章：React render props。    

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
### 12.js的数据类型有哪些
- 有5种数据类型：Undefined、Null、Boolean、Number和String，其中undefined和null只有自身值，boolean只有true和false，而string则字符串，number是数值，非数值类型判断可用isNaN判断
- 复杂的数据类型：Object，Object本质是一组无序的名值对组成的。
### 13.Spread / Rest 操作符
- 
### 14.可选链接运算符【?.】
    if (data && data.children && data.children[0] && data.children[0].title) {
        // I have a title!
    }
    
- 使用可选链接运算符后

    let title = data?.children?.[0]?.title;
### 15.以ES6 Array.filter方法重写一个
    Array.prototype.filterFn = function (func) {
        var rst = [];
        var arr = this;        
        for (var i = 0; i < arr.length; i++)
            if (func.call(this, arr[i], i, arr))
                rst.push(arr[i]);
        return rst;
    }

## CSS篇

### 1.盒模型