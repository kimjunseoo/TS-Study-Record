class Person {
    //필드
    name: string;

    constructor(a: string){
        this.name = a;
    }
    //prototype 함수
    함수(a: string){
        console.log('안녕' + a );
    }
}


let 사람1 = new Person('kim');
let 사람2 = new Person('park');
사람1.함수("hamster");