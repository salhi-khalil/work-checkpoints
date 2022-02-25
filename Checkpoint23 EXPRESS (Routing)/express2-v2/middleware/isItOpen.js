// The web application is only available during working hours 
//(Monday to Friday,  from 9 to 17)
//** Create a custom middleware to verify the time of the request.

const isItOpen = (req,res,next) => {
    console.log("available during working hours (Monday to Friday,  from 9 to 17)");
    var isopen=false;
    var d = new Date();
    var hr = d.getHours();
    var n = d.getDay();
    ((n>0&&n<6)&&(hr>8&&hr<18))?isopen=true:console.log("we're closed");
    req.isItOpen = [d.getDay(),d.getHours(),isopen];

    //console.log("req",req);
    //console.log("res",res);
    next();
};
module.exports= isItOpen;