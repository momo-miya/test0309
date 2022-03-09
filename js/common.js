$(function(){  //jQueruyの開始のお約束！消さないで！




console.log("外部ファイルからHELLO WORLD");

// ここからtweet用リンクの作り方
function twitText() {
	var s, url;
	s = "下の絶対パスでシェアできる";
	url = document.location.href;
	
	if (s != "") {
		if (s.length > 140) {
			//文字数制限
			alert("テキストが140字を超えています");
		} else {
			//投稿画面を開く
			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
			window.open(url,"_blank","width=600,height=300");
		}
	}
}
// ここまではtweet用リンクの作り方

console.log("こんにちは、"+"にんじゃわんこさん"); 
// 文字列型  ""で区切ると人間の言葉と認識してくれる。ダブルでもシングルでもOK
console.log(2022-1-20);
// 数字型  ""で区切らないと数字と捉えて計算してくれる
console.log("SUNABACOKOZA".split("A"));
//  Aで区切ってくれる

var user_name= "ninjyawanko";

console.log(user_name);

var fruit = "マンゴー";
console.log(fruit+"を用意します");
console.log(fruit+"の皮を剥きます");
console.log(fruit+"をミキサーに入れます");
console.log(fruit+"ジュースの出来上がり！");

fruit = "ぶどう";
console.log(fruit+"を用意します");
console.log(fruit+"の皮を剥きます");
console.log(fruit+"をミキサーに入れます");
console.log(fruit+"ジュースの出来上がり！");


console.log("配列-----");  //番号で情報を取り出す
var region = ["KOZA","EBETSU","TAKAMATSU"];
console.log(region);
console.log(region[0]);

console.log("連想配列-----");  //名前（key）で情報を取り出す  キー：バリュー
var region = {
    "okinawa":"KOZA",
    "hokkaido":"EBETSU"
};
console.log(region["hokkaido"]);
console.log(region["okinawa"]);


// 数を足していく 後に繰り返しfor文でスマートにかける
var count = 0 ;
count +=1;
// count++  これも１プラスする意味
console.log(count);
count +=1;
console.log(count);


console.log("真偽値-----");
console.log(1<2);
// console.log(1=<2);
// console.log(1<0);
console.log(1==1);  // 等しいかどうか 等価演算子
console.log(1===1); // 等しいかどうか 厳密等価演算子 (1==="1")は違うとなる
console.log(1!==1); // 等しくないかどうか 等価演算子
console.log(true);  // true
console.log(!true); // false
console.log("1>1", 1>1); //左辺は右辺より大きい
console.log("1>+1", 1>=1); // 左辺は右辺より大きいか等しい
console.log("1<1", 1<1); // 左辺は右辺より小さい
console.log("1<=1",1<=1); // 左辺は右辺より小さいか等しい


// ここからif文だよ！

console.log("条件文-----");
var count = 0;  // みかんの数
var grapes = 1;  // ブドウの数
var melon = 0;  // メロンの数
if (count>0){
    console.log("皮を剥いて");
    console.log("ミキサーにかけて");
    console.log("オレンジジュースをつくる");
}else if(grapes>0){
    console.log("皮を剥いて");
    console.log("ミキサーにかけて");
    console.log("ブドウジュースをつくる");
}else if(melon>0){
    console.log("皮を剥いて");
    console.log("ミキサーにかけて");
    console.log("メロンジュースをつくる");
}else{
    console.log("みかんを買いに行く");
}

// この場合、ブドウが１個あるからのでオレンジジュースを作る！


console.log("条件文  問題-----");
var limit = 10;
var getup = 12;
if (limit < getup){
    console.log("遅刻です");
} else if(limit === getup){
    console.log("ギリギリセーフ！");
} else{
    console.log("よくがんばりました");
}
// var内の数字をいろいろ変えて、ちゃんと表示されるかもチェック！！


// ここからfor文だよ
// for（初期値(変数) ;いつまで繰り返すかの条件式 ;増減式）
// for (var i=1 ;i<=100 ;i++){
//     console.log(i);
// }
// i++ = 後値  出力された後に＋１が実行される.
// 100を抜けたら、下に続くプログラムが実行される
console.log("繰り返し文-----");
var fruits = ["りんご","みかん","バナナ","マンゴー"];
for(var i=0; i<=3; i++){
    console.log(fruits[i]+"ジュースを作る");
}

console.log("繰り返し文 数字-----");
var number = [1,2,3,4,5,6,7,8,9,10];
for(var i=0; i<10; i++){
    console.log(i);
}

// for (var i=0; i<5; i++){
//     window.alert("!!!!!!!!");
// } ５回消さないといけないポップウィンドウが出ちゃう。



// ここから関数だよ!function=関数を定義 変数のvarと同じ
// function ファンクション名(引数){
//     実行したいプログラム
// }
console.log("関数------");
function greet(user){
    console.log(user+"こんにちは");
}
greet("マンボーさん");


function mixedJuice(fruit){
console.log(fruit+"を用意します");
console.log(fruit+"の皮を剥きます");
console.log(fruit+"をミキサーに入れます");
console.log(fruit+"ジュースの出来上がり！");
}

var h1_node =document.getElementById("h1_node");
console.log(h1_node);
console.log(h1_node.textContent);

// ここからイベントの準備
// var btn_node = document.getElementById("btn");
// btn_node.addEventListener("click",changeText);
// clickに触れるとイベントが起こる　JSバージョン

// function changeText(){
//     var h1_node = document.getElementById("h1_node")
//     h1_node.textContent = "今日の感想を書いてね"
// }

//ここからjQueryだよ！

$("h1").text("hello,world!");
// $("どこの").なにを("どうする");  
// jsの長いコードがジョンさんの功績のおかげでシンプルに書けるようになった！


$("#btn").on("click",function(){
    $("#h1_node").text("jQueryで文字変！");
    $("body").css("color","red");
    $("img").attr("src",'./img/112426450_675.jpeg');
    // $("a").attr("href",//サイト);  //Twitterのサイトを違うところに連れて行ってくれる
    $("header").toggle(); //表示・非表示を切り替えてくれる
    // $("body").addClass("red"); 表示する
    // $("body").removeClass("blue"); 非表示する
    $("body").toggleClass("blue"); //toggleはハンバーガーメニューの時などに使用！表示・非表示！


});




// $("どこを").on("clickした時",波括弧内の関数を実行(){
//     $("どこの").なにを("どうする"); 
//     $("どこの").なにを("どうする"); 
//     $("どこの").なにを("どうする"); 
// });


}); //jQueruyの終了のお約束！消さないで！






// 引数  夜の部
function greet(name,status){
    message = {
        "朝": "おはようございます",
        "昼": "こんにちは",
        "夜": "こんばんは",
    }
    console.log(name+"さん、"+message[status]);
}

greet("もも","朝"); //ファンクション名で呼び出す
greet("あき","昼"); //ファンクション名で呼び出す
greet("はる","夜"); //ファンクション名で呼び出す




// 戻り値  夜の部
function greet1() {
    console.log("こんにちは");
}
function greet2() {
    console.log("こんにちは");
    return "こんにちは";   // 戻り値
}
// 戻り値無し
var result1;
result1 = greet1();
// 戻り値有り
var result2;
result2 = greet2();

console.log("greet1()戻り値無し", result1);
console.log("greet2()戻り値有り", result2);