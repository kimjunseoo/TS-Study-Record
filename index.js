var 회원정보 = {
    plusOne: function (number) {
        return number;
    },
    changeName: function (a) {
    }
};
var cutZero = function (word) {
    var result = word.replace(/^0+/, "");
    return result;
};
var removeDash = function (number) {
    var result = number.replace(/-/g, "");
    return Number(result);
};
