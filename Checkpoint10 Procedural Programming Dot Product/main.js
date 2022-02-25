function scalar_prod(a,b) {
    var ps=0; var j=0;
    for (let i= 0; i< a.length; i++) {
        ps+=a[i]*b[i];
    }
    return ps;
}
function is_ortho(a,b) {
    var ps; var str;
    ps=scalar_prod(a,b);
    if (ps==0) {
        str="The dot product of the vectors is zero. They are orthogonal."
    } else {
        str="The vectors are not orthogonal."
    }
    return str;
}
//********
console.log("Exemple de vecteurs non orthogonaux")
var V1=[1,3,-5]; console.log(V1);
var V2=[4,-2,-1]; console.log(V2);
prod=scalar_prod(V1,V2); console.log("the dot product=",prod);
str=is_ortho(V1,V2); console.log(str);

//********
console.log("Exemple de vecteurs orthogonaux")
var A1=[0,-5,3]; console.log(A1);
var A2=[0,3,5]; console.log(A2);
prod=scalar_prod(A1,A2); console.log("the dot product=",prod);
str=is_ortho(A1,A2); console.log(str);
