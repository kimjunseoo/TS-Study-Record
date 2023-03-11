//Narrowing
function sampleFunc(x) {
    if (typeof x === 'number') {
        return x + 1;
    }
    else {
        return x + '1';
    }
}
;
function sampleFunc2(x) {
    var array = [];
    if (typeof x === 'number') {
        array[0] = x;
    }
    ;
}
;
//Assertion
function sampleFunc3(x) {
    var array = [];
    array[0] = x;
}
;
//asserion 언제 쓰냐 => 비상용 / 디버깅용
sampleFunc(123);
