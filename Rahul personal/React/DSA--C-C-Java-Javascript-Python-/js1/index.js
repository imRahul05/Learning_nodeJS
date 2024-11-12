// javasxript let, const , var

// var  global scope and  re declare
// let const local scope 
// let re assigned
// const no reassigned 

// reassigned and re declare


let a = 10
let a = 90
let b = 1
const c = 10

const b = 20  
const value = hello(b)
console.log(value)

console.log(a)


var a = 5.234234324
function sum(a,b){
  ciuyssa
  return a+b;
}

console.log(sum(10,20),sum(4,1),sum(1,11),sum(3,a));



// variables
var name="masai"
var  scr=99.99
var status=true


//how to check of variables
console.log(typeof(scr))
console.log(typeof(name))
console.log(typeof(status))


//math operations
ADD
var a=7
var b=60
console.log(a+b)
//SUBTRACT
console.log(b-a)
//multiply
console.log(a*b)
//divide
console.log(124/3)
//power
console.log(b**a)
//remiander
console.log(b%a)


// increment
console.log("a value")
console.log(a)
console.log(a++)
console.log(++a)
console.log(a)
//decrement
console.log("b value")
console.log(b)
console.log(b--)
console.log(--b)
console.log(b)


// ADD strings
var str="my name is Rahul "
var name="kumar."
console.log(str + name)
var a=30
var b=40
var c="rahul"
console.log(a+b)
console.log(a+b+c)

// type conversion from number to string
console.log(a.toString()+b.toString())
console.log(a+++b+c)
console.log(++a+b+c)

// comparator operator
var status = true
var str = 'Rahul'
// opposite value
// string
// == check for only value
console.log(!str)
console.log(str!=='Rahul')
console.log(str!=='Aahul')
// inetger 
var a=300
console.log(!300)
console.log(a!==300)
console.log(a!==100)


// === checks for only value and type
var a = 100;
console.log(a !== 'a') hghgjgjgc
console.log(a == 'a')
console.log(a === a)

// Logical operators
var str = '300'
var str1 = '100'
console.log(str + str1)

// AND left to right
var a=2
var b=5
console.log(a&&b &&1 &&4)
console.log(8<=5)

var name='Rahul'
var newname=name='dksdksdsk'
var age=56
// __=__ right to left
console.log(newname,age,name)


console.log(5>3>1)
console.log(1>6<1)

// If statement
var a=6
var b=8
if(a<b)
console.log(a + " is smaller")
else
console.log(b +" is greater")
if(a>b)
console.log(a + " is smaller")
else
console.log(b +" is greater")
a>b?console.log(a + " is smaller"):console.log(b +" is greater")

// SWITCH
var a=6
var b=8
var c="india"
switch(c)
  {
  case 'india':console.log("PASS")
          break;
  case 'aus':console.log("FAIL")
          break;
  default:console.log("NOOOOO")
  }

var a=222
var b=111
console.log(a+ " " +b)
console.log(a+ "\n" +b) --new line \n
var a
console.log(a)
function call(number){
  console.log('calling '+number)
}
call(3134)
var sqr=function square(a){
  return a+a
}
console.log("\n"+sqr(4))

for( var n=1;n<100;n++){
   
  if(n===5){
    continue;
    console.log(n)
  }
}
console.log('Found n:'+n)

///this is some change
//13-07-2023 

//Array 
var str='rahul'
console.log(str[3]


// LOCAL AND gLObal scope of var
console.log(name)
var name='rahul'//global scope
function great(){
  var name='g0ne'//local scope once the function get over or executed variable removed 
  console.log(name)
}
great()

console.log(name)

// console.log is a funcion which can take multiple parameters
// keywords dont use in var like var,for,break,continue

var name='name'
function namee(){
console.log(name)
}
namee()


// array display by for loop
var a='great day rainy'
for(i=0;i<a.length ;i++)
  {
    console.log(a[i])
  }


// Hoisting-------------
a=11
console.log(a)
function hello(){
  console.log("hello")
}
hello()
const a=21
console.log(a)

// slice ,indexOf,substring function
var str='dongle'
console.log(str.slice(2,5))
console.log(str.indexOf('e'))
console.log(str.indexOf('o'))
console.log(str.substring(2,5))

//array POP & PUSH with variable data types
var arr=['ww',400,30,'bbdb']
for(i=0;i<arr.length;i++)
console.log(arr[i])

//Array push function
arr.push(200)
console.log(arr[arr.length-1])
arr.pop()
console.log(arr[arr.length-1])
console.log(arr.shift(1000))
console.log(arr.unshift(1000))

var arr="100 300 1 1 1 1"
var str=arr.split(" ")
console.log(str)//OUTPOUT [ '100', '300', '1', '1', '1', '1' ] -- spliting each characters inside aray and give space b/1 characters with comma
console.log(str.join("   "))//joining the array giving three spaces b/w characters 100   300   1   1   1   1
console.log(str.join(""))//No space b/w characters  --1003001111
console.log(str.join(" "))//Two space b/w characters--100 300 1 1 1 1
console.log(str.join())//NO space if no arguments is passes only separated by comma(,)---100,300,1,1,1,1
console.log(str.join(", "))//100, 300, 1, 1, 1, 1
console.log(str.join("/"))//100/300/1/1/1/1
console.log(str.join("---"))//100---300---1---1---1---1

//NEW ARRAY
var arr1=[1,2,4,5,6]
console.log(arr1.pop())//delteing from last(last element) --6
console.log(arr1)//[ 1, 2, 4, 5 ]
console.log(arr1.push(46))//inserting in last position  --5
console.log(arr1)//[ 1, 2, 4, 5, 46 ]
console.log(arr1.shift())//deleting fro first position--1
console.log(arr1)//[ 2, 4, 5, 46 ]

console.log(arr1.unshift(10000))//insert element at first index position
console.log(arr1)//[ 10000, 2, 4, 5, 46 ] 

//traverse the array with loop
for(var i=0;i<arr1.length;i++)//arr1.lenth will run the loop until the last index or element of array
console.log(arr1[i])
//10000
// 2
// 4
// 5
// 46
var arr2=['raguks','sssas','dsds']
for(var i=0;i<arr2[i].length;i++){
  for(var j=0;j<arr2[i].length;j++)
    {
    console.log(arr2[i][j])//it wll print the each character in every string
    }
} 

//typeof function
var arr3=[3434,"dsd",45,'sdsds']
console.log(typeof arr2)//show what type of array--Output--object
console.log(typeof arr1)//show what type of array--Output--object
console.log(typeof arr)//show what type of array--Output--string
console.log(typeof arr3)//show what type of array--Output--object

var arr=['quiz','fuzzy','ultra']

function logic(arr1){
  console.log(arr1.pop())
}
console.log(arr)
logic(arr)
console.log('After logic',arr)


//pass by refrence
//array don't create copy thet just passed the refrence
function test(str){
  str='new'
  console.log(str)
}
var string='Rahul'
test(string)
console.log(string )

//string and primitives

var string='rahul'//Immutable

string[3]='f'//we can not change any particular value inside string we can change the whole value of or redeclare the value 
console.log(string)//output --rahul


//redeclare the value
string="goneee"
console.log(string)//output--goneee


var arr=['RAhul','is','Home']
console.log(arr)//[ 'RAhul', 'is', 'Home' ]
var newarr=arr//copy the old array value or assigning the values
newarr[2]='Not Home'//changing the value at index position=2
console.log(newarr)//[ 'RAhul', 'is', 'Not Home' ]

console.log(typeof undefined)//type--undefined
console.log(typeof null)//type-objet