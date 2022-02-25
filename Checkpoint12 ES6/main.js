/* disemvowel = str => str.replace(/[aeiou]/gi,'');
//******** */
/*
g tells to find all matches, not just the first.
i tells to be case insensitive.
What goes inside the // is the pattern.
[] tells to match any character in a set.
aeiou are the characters in the set.
*/ 
//************* 
/*
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
*/
//*************************************** */
/*
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}
*/ 
/*
function squareDigits(num){
  num=num.toString(); var sqrd="";
  for (let i = 0; i < num.length; i++) 
  {sqrd+=num[i]*num[i]} return Number(sqrd);
}
console.log(squareDigits(3212));//squareDigits(3212), 9414)
//******************** */
/*
var Aa="My name is Nada"
function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
}
console.log(findShort(Aa));
//*************************** */
/*
function DNAStrand(dna){
  var temp=dna.split("");
  for (let i = 0; i < dna.length; i++) {
    if(dna[i]=="A") temp[i]="T";
    if(dna[i]=="T") temp[i]="A";
    if(dna[i]=="C") temp[i]="G";
    if(dna[i]=="G") temp[i]="C";
  }
  temp=temp.join("");
  return temp;
}
console.log(DNAStrand("AAAA"));
/*
function DNAStrand(dna) {
  return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
}
*/ /*
var test=123456789; console.log(test); var m=Array.from(String(test)); console.log(m);
m=m.sort(function(a, b){return b-a});console.log(m);
function descendingOrder(n){
  n=Array.from(String(n)).sort(function(a, b){return b-a});
  return Number(n.join(""));
}
console.log(descendingOrder(789)); */
//****************************************************************** */
/*function isIsogram(str){
  var test=true;
  str=str.toUpperCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j < str.length; j++) {
      if (str[i]==str[j]) {
        test=false;
      } 
  }
  }return test;
}
//******************** */
/*
function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}
//****** */
/*
console.log(filter_list([1,2,55,'a','b']))
var arr=[1,2,'a','b']; console.log(typeof(arr[0])); 
console.log(filter_list([1,'a','b',0,15]))
console.log(filter_list([1,2,'aasf','1','123',123]))
*/
//************************************************************************* */
/*
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort(function(a, b){return a-b});
  return numbers[0]+numbers[1];
}
function repeatStr(n, str)
{
  return str.repeat(n);
}
*/
//******************************** */
/*function nbYear(p0, percent, aug, p) {
  var j=0;
  while (p0<=p) {
    p0+=p0*percent/100+aug;
    j++;
  }
  return j;*/
//******** */
/*
console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));
*/
//*************************************************** */
/*
function isSquare(n) {
  if (isSquare(sq)) {
    return (Math.sqrt(sq)+1)**2;
  }
  else return -1;
}
function findNextSquare(sq) {
if (isSquare(sq))  return -1;
else m= Math.sqrt(sq)+1;
return m*m;
}
var nsqr=25;
console.log(isSquare(nsqr)); console.log(findNextSquare(nsqr));*/
//*************************************************************************** */
/*
function maskify(cc) {
if (cc.length>4) {
  for (let index = 0; index < cc.length-5; index++) {
    cc[i]="#";
  }
}
return cc;
}
function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
}
function maskify(cc) {
  return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
}
*/
//*********************************************************************************** */
/*
const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';
const rowSumOddNumbers = n => n**3;
console.log(rowSumOddNumbers(1),"1");
console.log(rowSumOddNumbers(2),"8");
console.log(rowSumOddNumbers(3),"27"); */
//************************************************************************************ */
//Lorsqu’on cherche un à un les diviseurs d’un nombre, 
//on compte le nombre de diviseurs jusqu'à la racine carrée du dividende 
//et on multiplie le nombre trouvé par 2. La racine carrée de 180 est 13,4... 
//Il y a neuf diviseurs de 180 inférieurs à cette racine : 1, 2, 3, 4, 5, 6, 9, 10 et 12. 
//D’où, 180 a 9 × 2 = 18 diviseurs.
//***************************************************************** */
const makeNegative = num => (num <0) ? num : -num;
const boolToWord= bool => bool? "Yes":"No";
let basicOp = (operation, value1, value2) => eval(value1 + operation + value2);
//*********************************************************** */
function SeriesSum(n)
{
  if(n>0){
    var u=1; var v=1;
    for (let i = 1; i < n; i++) { u+=3; v+=1/u; }
    return v.toFixed(2);
  }
  else return"0.00";
}
const century = year => Math.ceil(year/100);
let maps=x=>x.map(x=>x*2);
const solution= str => str.split("").reverse().join("");
//const bonusTime=(salary, bonus)=>bonus?`£${10*salary}`:`£${salary}`;
function bonusTime(salary, bonus) {
  return '£' + salary * (bonus ? 10 : 1);
}
//************************** */
function abbrevName(name){
  console.log(name);
  name=name.split(" ");console.log(name);
return name[0][0]+"."+name[1][0];
}
//const abbrevName = (name) => {return name.split(" ").map(name => name[0].toUpperCase()).join(".");};
//const abbrevName = name =>name.toUpperCase().split(" ")[0][0]+"."+name.toUpperCase().split(" ")[1][0];
console.log(abbrevName("Nada Nsiri"));
//*************************************************************************
var array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ];

  const countSheeps = arrayOfSheep=> arrayOfSheep.filter(x=>x==true).length;
  console.log(countSheeps(array1));
//**********************************************************
var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

function isNeedle(arr) {
  return arr.filter((item,i)=>!(typeof(arr[i]) == typeof(arr[i+1]) || typeof(arr[i-1])==typeof(arr[i])));
}
const findNeedle =haystack=> `found the needle at position ${haystack.indexOf(isNeedle(haystack)[0])}`
//**************************************************************************** */
/*
function removeSmallest(numbers) {
  numbers.splice(numbers.indexOf(Math.min(...numbers)),1); 
  return numbers
}*/
const removeSmallest=numbers =>[...numbers.slice(0, numbers.indexOf(Math.min(...numbers))), ...numbers.slice(numbers.indexOf(Math.min(...numbers)) + 1)]
const digitize= n=>n.toString().split("").reverse().map(x=>Number(x));
//*********************** */
const arithmetic = (a, b, operator) => ({
  'add'     : a + b,
  'subtract': a - b,
  'multiply': a * b,
  'divide'  : a / b
}[operator]);
console.log(arithmetic(1, 2, "add"));
function arithmetics(a, b, operator){
  optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
  return eval(a + optable[operator] + b); 
}
//****************************************************** */
//Dog.prototype.bark = () => 'Woof!';
/*Dog.prototype.bark= function() {
  return 'Woof!';
}*/
// make a prototype for an object
//****************************** */
//Your task is to add a new property usersAnswer to every object in the array questions. 
//The value of usersAnswer should be set to null. The solution should work for array of any length.
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
console.log(questions);
//const add_prop_to_array_of_objects=arr=>arr.map(arr.usersAnswer=null );
function add_prop_to_array_of_objects(array) {
  for (let index = 0; index < array.length; index++) {
    array[index].usersAnswer=null;
  }
  return array;
}
questions.forEach(function (i) {
  i.usersAnswer = null;
});
console.log(add_prop_to_array_of_objects(questions));
//********************************************************* */
var capitals = function (word) {
	var pos=[];var cap=word.match(/[A-Z]/g);
  for (let i = 0; i < cap.length; i++) {
    pos.push(word.indexOf(cap[i]));
  };return pos;
};
//disemvowel = str => str.replace(/[aeiou]/gi,'');
console.log( capitals('CodEWaRs'), [0,3,4,6] );
//************************* */
function peopleWithAgeDrink(old) {
  if (old<14) {return "drink toddy"}
  else if (old<18) {return "drink coke"}
  else if (old<21) {return "drink beer"}
  else {return "drink whisky"}
};
const peopleWithAgeDrink2 = old => 'drink ' + (old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer' : 'whisky')
//***************************************************** */
const leo = o=> (o==88?"Leo finally won the oscar! Leo is happy":o==86?"Not even for Wolf of wallstreet?!":o<88?"When will you give Leo an Oscar?":"Leo got one already!");
let ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '/': (a, b) => a / b,
  '*': (a, b) => a * b,
  '%': (a, b) => a % b,
  '^': Math.pow,
}
let evalObject = o => ops[o.operation](o.a, o.b)
function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}
const doubleChar2 = str => str.split('').map(v=>v+v).join('')
//****************** */

function digital_root(n) {
  var m=0;
  do {
    m=0;
    n=String(n).split("").map(x=>Number(x));
    for (let i = 0; i < n.length; i++) {
      m+=n[i]; 
     }
     n=n.join(""); n=String(m);
  } while (n.length>1);
 
  return Number(n);
}
var n=493193; console.log(n);
console.log(digital_root(n));
//***************************************** */
function likes(names) {
  var str="";
  if(names.length==0){str="no one likes this"}
  else if(names.length==1){str= names[0]+" likes this"}
  else if(names.length==2){str=names[0]+" and "+names[1]+" like this"}
  else if(names.length==3){str=names[0]+", "+names[1]+" and "+names[2]+" like this"}
  else if(names.length>3){str=names[0]+", "+names[1]+" and "+(names.length-2)+" others like this";} 
  return str;
}
console.log(likes([]), '////no one likes this');
    console.log(likes(['Peter']), '////Peter likes this');
    console.log(likes(['Jacob', 'Alex']), '/////Jacob and Alex like this');
    console.log(likes(['Max', 'John', 'Mark']), '////Max, John and Mark like this');
    console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), '////Alex, Jacob and 2 others like this');
//************************************************************** */
const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';

function findOutlier(arr) {
  var arr1=[]; arr1=arr.filter((item,i)=>(even_or_odd(arr[i]) === 'Even' ));
  var arr2=[]; arr2=arr.filter((item,i)=>!(even_or_odd(arr[i]) === 'Even' ));
  if (arr1.length==1) { return arr1[0]}
  else { return arr2[0]}
}
console.log(findOutlier([0, 1, 2]),"oooooooo 1");
console.log(findOutlier([1, 2, 3]),"ooooooo 2");
console.log(findOutlier([2,6,8,10,3]),"ooooooo 3");
//**************************************************** */
function spinWords(string){console.log(string);
  string=string.split(" ");console.log(string);
  for (let i = 0; i <= string.length-1; i++) {console.log(string[i],string[i].length);
    if (string[i].length>=5) {
      string[i]=string[i].split("").reverse().join(""); console.log(string);
    };
  }string=string.join(" ");console.log(string);
  return string
}
console.log(spinWords("Welcome"), "////emocleW");
console.log(spinWords("Hey fellow warriors"), "///Hey wollef sroirraw");
console.log(spinWords("This is a test"), "//////This is a test");
console.log(spinWords("This is another test"), "//////This is rehtona test");
console.log(spinWords("You are almost to the last test"), "/////You are tsomla to the last test");
//******************************** */
