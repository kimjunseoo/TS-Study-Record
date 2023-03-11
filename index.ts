type X = { x: number };
type Y = { y: string };

type BOTH = X & Y;

const sample: BOTH = {
    x : 123,
    y : "hello"
};

type homework2 = { 
    color? : string ,
    size : number, 
    readonly position : number[] 
};

type homework3 = {
    name : string,
    phone : number,
    email : string,
};

type homework4 = {
    adult : boolean
} & homework3 ;

let 회원가입정보 : homework4 = {
    name : "kim",
    phone : 22,
    email : "a@a",
    adult : true
}