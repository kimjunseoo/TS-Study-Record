//Narrowing
function sampleFunc(x: number | string){
    if( typeof x === 'number'){
        return x + 1;
    }else {
        return x + '1';
    }
};

function sampleFunc2(x: number | string){
    let array: number[] = [];
    if( typeof x === 'number'){
        array[0] = x;
    };
};

//Assertion
function sampleFunc3(x: number | string){
    let array: number[] = [];
    array[0] = x as number;

};

//asserion 언제 쓰냐 => 비상용 / 디버깅용


sampleFunc(123);