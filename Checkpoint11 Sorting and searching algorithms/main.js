// Javascript program for insertion sort 
// Function to sort an array using insertion sort
function insertionSort(arr) {   
    let n,i, tmp, j; 
    n=arr.length;
    document.write("<b>original array</b><br>",arr,"<br><br>");
    for (i = 1; i < n; i++){
        document.write("<b>iteration:</b>",i,"<br>");
        tmp = arr[i]; document.write("tmp (content of the i position)=",tmp,"<br>");
        j = i - 1; 
        /* Move elements of arr[0..i-1], that are greater than tmp, to one position ahead of their current position */
        while (j >= 0 && arr[j] > tmp){ 
            arr[j + 1] = arr[j]; 
            j = j - 1;
            document.write("sorted elements being moved:----->",arr,"<br>"); 
        } 
        arr[j + 1] = tmp; 
        document.write("tmp injected in its place:----->",arr,"<br><br>");} 
    }  

var A=[1,6,8,9,2,3,5];
insertionSort(A); document.write("<b>Sorted array ----> </b>",A,"<br>");
