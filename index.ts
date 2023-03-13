let 회원정보 = {
    plusOne: function(number: number):number {
        return number
    },
    changeName: function(a:any): void{

    }
};

type CutZeroType = (word: string) => string;

const cutZero:CutZeroType = function(word){
    let result = word.replace(/^0+/, "");
    return result;
};

type RemoveDashType = (number: string) => number;

const removeDash:RemoveDashType = function(number){
    let result = number.replace(/-/g, "");
    return Number(result);
};