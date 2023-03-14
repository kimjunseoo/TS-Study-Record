var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    //prototype 함수
    Person.prototype.함수 = function (a) {
        console.log('안녕' + a);
    };
    return Person;
}());
var 사람1 = new Person('kim');
var 사람2 = new Person('park');
사람1.함수("hamster");
