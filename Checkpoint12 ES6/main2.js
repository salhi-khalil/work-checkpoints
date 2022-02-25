//*********************          Move zeros         ******************** */
var moveZeros = function (arr) {
  var arr1 = [];
  var arr2 = [];
  arr1 = arr.filter((item, i) => arr[i] === 0);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr2.push(arr[i]);
    }
  }
  arr2.push(...arr1);
  return arr2;
};
//console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
var moveZeros1 = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function (x) {
        return x === 0;
      })
    );
};

//*********************         Encode/ Decode        ******************** */
/*
  name    |  symbol   |  precedence
---------------------------------
club          c            0
diamond       d            1
heart         h            2
spade         s            3
52-card deck:
  c     |     d     |    h     |    s
----------------------------------------
 0: A      13: A      26: A      39: A
 1: 2      14: 2      27: 2      40: 2
 2: 3      15: 3      28: 3      41: 3
 3: 4      16: 4      29: 4      42: 4
 4: 5      17: 5      30: 5      43: 5
 5: 6      18: 6      31: 6      44: 6
 6: 7      19: 7      32: 7      45: 7
 7: 8      20: 8      33: 8      46: 8
 8: 9      21: 9      34: 9      47: 9
 9: T      22: T      35: T      48: T
10: J      23: J      36: J      49: J
11: Q      24: Q      37: Q      50: Q
12: K      25: K      38: K      51: K
----------------------------------------
['Ac', 'Ks', '5h', 'Td', '3c'] -> [0,51,30,22,2] ->[0, 2 ,22, 30, 51] //encoding
[0, 51, 30, 22, 2] -> ['Ac', 'Ks', '5h', 'Td', '3c']->['Ac', '3c', 'Td', '5h', 'Ks'] //decoding */
//***
function encode(arr) {
  var arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i][1]) {
      case "c":
        switch (arr[i][0]) {
          case "A":
            arr2.push(0);
            break;
          case "2":
            arr2.push(1);
            break;
          case "3":
            arr2.push(2);
            break;
          case "4":
            arr2.push(3);
            break;
          case "5":
            arr2.push(4);
            break;
          case "6":
            arr2.push(5);
            break;
          case "7":
            arr2.push(6);
            break;
          case "8":
            arr2.push(7);
            break;
          case "9":
            arr2.push(8);
            break;
          case "T":
            arr2.push(9);
            break;
          case "J":
            arr2.push(10);
            break;
          case "Q":
            arr2.push(11);
            break;
          case "K":
            arr2.push(12);
            break;
        }
        break;
      case "d":
        switch (arr[i][0]) {
          case "A":
            arr2.push(13);
            break;
          case "2":
            arr2.push(14);
            break;
          case "3":
            arr2.push(15);
            break;
          case "4":
            arr2.push(16);
            break;
          case "5":
            arr2.push(17);
            break;
          case "6":
            arr2.push(18);
            break;
          case "7":
            arr2.push(19);
            break;
          case "8":
            arr2.push(20);
            break;
          case "9":
            arr2.push(21);
            break;
          case "T":
            arr2.push(22);
            break;
          case "J":
            arr2.push(23);
            break;
          case "Q":
            arr2.push(24);
            break;
          case "K":
            arr2.push(25);
            break;
        }
        break;
      case "h":
        switch (arr[i][0]) {
          case "A":
            arr2.push(26);
            break;
          case "2":
            arr2.push(27);
            break;
          case "3":
            arr2.push(28);
            break;
          case "4":
            arr2.push(29);
            break;
          case "5":
            arr2.push(30);
            break;
          case "6":
            arr2.push(31);
            break;
          case "7":
            arr2.push(32);
            break;
          case "8":
            arr2.push(33);
            break;
          case "9":
            arr2.push(34);
            break;
          case "T":
            arr2.push(35);
            break;
          case "J":
            arr2.push(36);
            break;
          case "Q":
            arr2.push(37);
            break;
          case "K":
            arr2.push(38);
            break;
        }
        break;
      case "s":
        switch (arr[i][0]) {
          case "A":
            arr2.push(39);
            break;
          case "2":
            arr2.push(40);
            break;
          case "3":
            arr2.push(41);
            break;
          case "4":
            arr2.push(42);
            break;
          case "5":
            arr2.push(43);
            break;
          case "6":
            arr2.push(44);
            break;
          case "7":
            arr2.push(45);
            break;
          case "8":
            arr2.push(46);
            break;
          case "9":
            arr2.push(47);
            break;
          case "T":
            arr2.push(48);
            break;
          case "J":
            arr2.push(49);
            break;
          case "Q":
            arr2.push(50);
            break;
          case "K":
            arr2.push(51);
            break;
        }
        break;
    }
  }
  arr2.sort(function (a, b) {
    return a - b;
  });
  return arr2;
}
//var Aaa=['Ac', 'Ks', '5h', 'Td', '3c']; console.log(Aaa); console.log(encode(Aaa),"///[0, 2 ,22, 30, 51]");
//***
function decode(arr) {
  var arr2 = [];
  arr.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      //c
      case 0:
        arr2.push("Ac");
        break;
      case 1:
        arr2.push("2c");
        break;
      case 2:
        arr2.push("3c");
        break;
      case 3:
        arr2.push("4c");
        break;
      case 4:
        arr2.push("5c");
        break;
      case 5:
        arr2.push("6c");
        break;
      case 6:
        arr2.push("7c");
        break;
      case 7:
        arr2.push("8c");
        break;
      case 8:
        arr2.push("9c");
        break;
      case 9:
        arr2.push("Tc");
        break;
      case 10:
        arr2.push("Jc");
        break;
      case 11:
        arr2.push("Qc");
        break;
      case 12:
        arr2.push("Kc");
        break;
      //d
      case 13:
        arr2.push("Ad");
        break;
      case 14:
        arr2.push("2d");
        break;
      case 15:
        arr2.push("3d");
        break;
      case 16:
        arr2.push("4d");
        break;
      case 17:
        arr2.push("5d");
        break;
      case 18:
        arr2.push("6d");
        break;
      case 19:
        arr2.push("7d");
        break;
      case 20:
        arr2.push("8d");
        break;
      case 21:
        arr2.push("9d");
        break;
      case 22:
        arr2.push("Td");
        break;
      case 23:
        arr2.push("Jd");
        break;
      case 24:
        arr2.push("Qd");
        break;
      case 25:
        arr2.push("Kd");
        break;
      //h
      case 26:
        arr2.push("Ah");
        break;
      case 27:
        arr2.push("2h");
        break;
      case 28:
        arr2.push("3h");
        break;
      case 29:
        arr2.push("4h");
        break;
      case 30:
        arr2.push("5h");
        break;
      case 31:
        arr2.push("6h");
        break;
      case 32:
        arr2.push("7h");
        break;
      case 33:
        arr2.push("8h");
        break;
      case 34:
        arr2.push("9h");
        break;
      case 35:
        arr2.push("Th");
        break;
      case 36:
        arr2.push("Jh");
        break;
      case 37:
        arr2.push("Qh");
        break;
      case 38:
        arr2.push("Kh");
        break;
      //s
      case 39:
        arr2.push("As");
        break;
      case 40:
        arr2.push("2s");
        break;
      case 41:
        arr2.push("3s");
        break;
      case 42:
        arr2.push("4s");
        break;
      case 43:
        arr2.push("5s");
        break;
      case 44:
        arr2.push("6s");
        break;
      case 45:
        arr2.push("7s");
        break;
      case 46:
        arr2.push("8s");
        break;
      case 47:
        arr2.push("9s");
        break;
      case 48:
        arr2.push("Ts");
        break;
      case 49:
        arr2.push("Js");
        break;
      case 50:
        arr2.push("Qs");
        break;
      case 51:
        arr2.push("Ks");
        break;
    }
  }
  return arr2;
}
//var Baa=[0, 51, 30, 22, 2]; console.log(Baa); console.log(decode(Baa),"///['Ac', '3c', 'Td', '5h', 'Ks']");

//*****************************         What century is it?              ******************************* */
const whatCentury0 = (year) =>
  year % 100 == 0 ? Math.floor(year / 100) : Math.floor(year / 100) + 1;
const whatCentury = (year) =>
  year % 100 == 0
    ? "" + Math.floor(year / 100) + "th"
    : Math.floor(year / 100) > 13 && (Math.floor(year / 100) + 1) % 10 === 1
    ? "" + Number(Math.floor(year / 100) + 1) + "st"
    : Math.floor(year / 100) > 13 && (Math.floor(year / 100) + 1) % 10 === 2
    ? "" + Number(Math.floor(year / 100) + 1) + "nd"
    : Math.floor(year / 100) > 13 && (Math.floor(year / 100) + 1) % 10 === 3
    ? "" + Number(Math.floor(year / 100) + 1) + "rd"
    : "" + Number(Math.floor(year / 100) + 1) + "th";

//*****************************         Snail    (Not done yet)         ******************************* */
var A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//snail(array) #=> [1,2,3,6,9,8,7,4,5]
console.log(A, A.length);

snail = function (array) {
  var arr2 = [];
  for (let i = 0; i < array.length; i++) {
    arr2.push(array[0][i]);
  }
  for (let i = 1; i < array.length; i++) {
    arr2.push(array[i][array.length - 1]);
  }
  for (let i = array.length - 2; i >= 0; i--) {
    arr2.push(array[array.length - 1][i]);
  }
  for (let i = array.length - 2; i > 0; i--) {
    arr2.push(array[i][0]);
  }
  for (let i = 1; i < array.length - 1; i++) {
    arr2.push(array[1][i]);
  }
  return arr2;
};
console.log("tada", A[0][A.length - 1]);
console.log(snail(A));

//*****************************        Human Readable Time             ******************************* */
function humanReadable(s) {
  let sec = 0;
  let min = 0;
  let hr = 0;
  //the number of whole hours
  hr = Math.floor(s / 3600);
  //Find the number of whole minutes
  min = Math.floor((s / 3600 - hr) * 60);
  //Find the number of whole seconds
  sec = Math.round(((s / 3600 - hr) * 60 - min) * 60);
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (hr < 10) {
    hr = "0" + hr;
  } //formatting

  return `${hr}:${min}:${sec}`;
}
//*********************** */

function formatDuration(s) {
  var str = "";
  var y = 0;
  var d = 0;
  var hr = 0;
  var min = 0;
  var sec = 0;

  var res=""

  if (s == 0) str="now";
  else if (s > 0) {
    y = Math.floor(s / 3600 / 24 / 365); //n°years
    s = s - y * 365 * 24 * 3600;
    d = Math.floor(s / 3600 / 24); //n°days
    s = s - d * 24 * 3600;
    hr = Math.floor(s / 3600); //n°hours
    min = Math.floor((s / 3600 - hr) * 60); //n°min
    sec = Math.round(((s / 3600 - hr) * 60 - min) * 60); //n°sec

    res=y+" year "+d+" day "+hr+" hour "+min+" minute "+sec+" second"; str=res.split(" ");
    for (let i = 0; i < str.length; i+=2) {
      console.log(i,str[i],str[i+1]);
      if (str[i]==0) {str.splice(i,2)}
      if (str[i]>1) {str[i+1]=str[i+1]+"s"}      console.log(str);
    }
    for (let i = 0; i < str.length; i+=2) {
      console.log(i,str[i],str[i+1]);
      if (str[i]==0) {str.splice(i,2)}
    }
    for (let i = 0; i < str.length-4; i+=2) {
     str[i+1]=str[i+1]+","  ;   console.log(str);
    }
    str[str.length-3]=str[str.length-3]+ " and";
    str=str.join(" ");

    //(y==1)?y+" year"//:(y>1)?y+" years"//+(d==1)?d+" day":(d>1)?d+" days"
    
  }
  return str;
}

//console.log(formatDuration(34563662-60), "*****400days***");
//console.log(formatDuration(62), "********1 minute and 2 seconds");
//console.log(formatDuration(3662), "*****1 hour, 1 minute and 2 seconds");

//*****************************         XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX         ******************************* */

