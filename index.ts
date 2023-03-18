//Narrowing 하는 다른 방법
function 함수(a : string | undefined ){
    if( a && typeof a === 'string'){

    };
};

type Fish = { swim : string };
type Bird = { fly : string };

function 동물(animal : Fish | Bird ){
    if( 'swim' in animal ){

    }
}

let 날짜 = new Date();

function 날짜함수(day : Date ){

}

