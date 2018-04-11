var work = function(){

    console.log("working");

};

var dowork = function(f){

    console.log("starting");
    
    try {
        f();
    }
    catch(ex){
        console.log(ex);
    }
    console.log("end");

};

dowork(work);