type Animal = { name : string };
type Cat = { age : number } & Animal;
// type & 키워드의 뜻은 Animal 과 Cat 둘 다 만족
// 중복선언 불가능

interface Student {
    name : string
};

interface Teacher extends Student {
    age : number;
};
// 인터페이스는 복사(extends) 기능
//중복선언 가능(두개가 합쳐짐)
//외부라이브러리가 interface를 많이 씀. type 커스텀이 가능하기 때문.
//다른 사람이 많이 쓸 때 interface 많이 씀.

let 학생 : Student = { name : "kim" };
let 선생 : Teacher = { name : "kim", age : 20 };