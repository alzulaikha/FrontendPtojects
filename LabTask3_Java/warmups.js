//Variables	& Dynamic	Typing
const name="Alzulaikha";
let num=0;

console.log( typeof num);

num = "Hello";
console.log( typeof num);

//Operators	&	Comparisons

cnsole.log('"10" == 10');
console.log('"10" === 10');

const emptyText = "";

if (!emptyText) {
    console.log("An	empty	string");
}

//Control	Flow
const grades=[85,	92,	58,	73,	40];
//	loop	to	log	a	pass/fail	message	per	grade
for (const grade of grades) {
    if (grade >= 60) {
        console.log(`${grade}: Pass`);
    } else {
        console.log(`${grade}: Fail`);
    }
}
//switch statement	to	log	a	letter	grade	
const score = 85;

switch (true) {
    case score >= 90:
        console.log("Grade: A");
        break;

    case score >= 80:
        console.log("Grade: B");
        break;

    case score >= 60:
        console.log("Grade: C");
        break;

    default:
        console.log("Grade: F");
}
//Functions,All	Four Ways 
//	function	declaration
function isEvenDeclaration(number) {
    if (number % 2 === 0) {
        return true; }
         else {
        return false;
    }
}
//Function Expression
const isEvenExpression = function (number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};



