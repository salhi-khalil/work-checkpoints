//********************************************************************************************************** */
//Problem1, Solution1
var Set1 = [3, 1, 7, 9];
console.log("Set1", Set1);
var Set2 = [2, 4, 1, 9, 3];
console.log("Set2", Set2);
var sum = 0;
//loop the elements of the 1st set comparing each one with all the elements of the 2nd set
for (var i = 0; i < Set1.length; i++) {
  var equal = false;
  for (var j = 0; j < Set2.length; j++) {
    //if we find a common element
    if (Set1[i] === Set2[j]) {
      //we change it to 0 in set 2 and change the value of equal to true
      Set2[j] = 0;
      j--;
      equal = true;
    }
    console.log("loop", j, "Set2", Set2);
  }
  //we change the value of the element in set1 to 0 if equal=true
  if (equal == true) {
    Set1[i] = 0;
  }
  console.log("loop", i, "Set1", Set1);
}
//Now that we have 2 unique sets we sum their elements
for (let j = 0; j < Set1.length; j++) {
  sum += Set1[j];
  console.log("loop", j, "Sum", sum);
}
for (let j = 0; j < Set2.length; j++) {
  sum += Set2[j];
  console.log("loop", j, "Sum", sum);
}
console.log("sum", sum);
//********************************************************************************************************** */
//Problem2, Solution1
var set1 = [12, 13, 6, 10];
console.log("Set1", set1);
var set2 = [13, 10, 16, 15];
console.log("Set2", set2);
var sumoverlap = 0;
//loop the elements of the 1st set comparing each one with all the elements of the 2nd set
for (var i = 0; i < set1.length; i++) {
  for (var j = 0; j < set2.length; j++) {
    //if we find a common element
    if (set1[i] === set2[j]) {
      //we add it multiplied by2 to the sum
      sumoverlap += set2[j] * 2;
      console.log("sum", sumoverlap);
    }
  }
}
console.log("sum", sumoverlap);
//************************************************************************************************* */
