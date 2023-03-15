const receivesAFunction = callBack => callBack();
function returnsANamedFunction() {
    return function iCycleToSchool() {
      console.log("I cycle to school");
    };
}

function returnsAnAnonymousFunction(){
    return () => console.log("I am Anonymous");
}