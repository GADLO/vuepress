**ES5之后的JS语法统称ES6**

`ECMAscript 2015`是在`2015年6月`发布ES6的第一个版本。

以此类推，`ECMAscript 2016`是ES6的第二个版本、 `ECMAscript 2017`是ES6的第三个版本。**ES6**既是一个历史名词也是一个泛指，含义是`5.1版本`以后的`JavaScript下一代标准`，目前涵盖了`ES2015`、`ES2016`、`ES2017`、`ES2018`、`ES2019`、`ES2020`。

ES6更新的内容主要分为以下几点:

- **表达式**：声明、解构赋值
- **内置对象**：字符串扩展、数值扩展、对象扩展、数组扩展、函数扩展、正则扩展、Symbol、Set、Map、Proxy、Reflect
- **语句与运算**：Class、Module、Iterator

## ES2015

### 声明

**const命令**：声明常量

**let命令**：声明变量

作用域

- **全局作用域**
- **函数作用域**：`function() {}`
- **块级作用域**：`{}`

作用范围

- `var命令`在全局代码中执行
- `const命令`和`let命令`只能在代码块中执行

赋值使用

- `const命令`声明常量后必须立马赋值
- `let命令`声明变量后可立马赋值或使用时赋值

重点难点

- 不允许重复声明
- 未定义就使用会报错：`const命令`和`let命令`不存在变量提升
- 暂时性死区：在代码块内使用`const命令`和`let命令`声明变量之前，该变量都不可用

### 解构赋值

**字符串解构**：`const [a, b, c, d, e] = "hello"`

**数值解构**：`const { toString: s } = 123`

**对象解构**

- 形式：`const { x, y } = { x: 1, y: 2 }`
- 默认：`const { x, y = 2 } = { x: 1 }`
- 改名：`const { x, y: z } = { x: 1, y: 2 }`

**数组解构**

- 规则：数据结构具有`Iterator接口`可采用数组形式的解构赋值
- 形式：`const [x, y] = [1, 2]`
- 默认：`const [x, y = 2] = [1]`
---
layout: post
title:  "Welcome to Jekyll!"
---




**函数参数解构**

- 数组解构：`function Func([x = 0, y = 1]) {}`
- 对象解构：`function Func({ x = 0, y = 1 } = {}) {}`
- 交换变量值：`[x, y] = [y, x]`
- 返回函数多个值：`const [x, y, z] = Func()`
- 定义函数参数：`Func([1, 2])`
- 提取JSON数据：`const { name, version } = packageJson`
- 定义函数参数默认值：`function Func({ x = 1, y = 2 } = {}) {}`
- 遍历Map结构：`for (let [k, v] of Map) {}`
- 输入模块指定属性和方法：`const { readFile, writeFile } = require("fs")`

> 重点难点
> 
- 匹配模式：只要等号两边的模式相同，左边的变量就会被赋予对应的值
- 解构赋值规则：只要等号右边的值不是对象或数组，就先将其转为对象
- 解构默认值生效条件：属性值严格等于`undefined`
- 解构遵循匹配模式
- 解构不成功时变量的值等于`undefined`
- `undefined`和`null`无法转为对象，因此无法进行解构

### 字符串扩展

**Unicode表示法**：`大括号包含`表示Unicode字符(`\u{0xXX}`或`\u{0XXX}`)

**字符串遍历**：可通过`for-of`遍历字符串 

**字符串模板**：可单行可多行可插入变量的增强版字符串

**标签模板**：函数参数的特殊调用

**String.raw()**：返回把字符串所有变量替换且对斜杠进行转义的结果 

**String.fromCodePoint()**：返回码点对应字符

**codePointAt()**：返回字符对应码点(`String.fromCodePoint()`的逆操作)

**normalize()**：把字符的不同表示方法统一为同样形式，返回`新字符串`(Unicode正规化)  

**repeat()**：把字符串重复n次，返回`新字符串`  

**matchAll()**：返回正则表达式在字符串的所有匹配 

**includes()**：是否存在指定字符串  

**startsWith()**：是否存在字符串头部指定字符串 

**endsWith()**：是否存在字符串尾部指定字符串

### 数值扩展

### 对象扩展

### 数组扩展

### 函数扩展

### 正则扩展

### Symbol

### Set

### Map

### Proxy

### Reflect

### Class

### Module

### Iterator

### Promise

### Generator