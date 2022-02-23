function spy(){
    console.log(8 * 4);
}

function receivesAFunction(spy){
    return spy;
}



function returnsANamedFunction(){
    return function help(){
        console.log('help')
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log('help')
    }
}