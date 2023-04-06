let i;
let num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');


// 引数の条件がtrueの間、波括弧内部の処理が繰り返される。
//let max = 100;
//let num = 1;
//let count = 0;

//while(num < max){
//  num = num * 2;
//  count = count + 1;
//}

//alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// 条件1を満たすときは処理1、条件2を満たすときは処理2、どちらも満たさないときは処理3を実行
let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}


let str1 = 'Hello';
let str2 = 'World!!';
alert(str1 + str2);


alert('Hello' + 'World');

alert(10 / 2);

alert(4 + 3);


let int1 = 1;
alert(int1);

let hello = 'Hello World';
alert(hello);

