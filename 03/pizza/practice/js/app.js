//promptの入力欄に入力した値は、文字列として返ってくる。
let budget = prompt("予算を入力してください。");
//parseFloat関数を使うことで、文字列を数値に変換することができる。
budget = parseFloat(budget);
//confirmを使うことでtrue/falseで返ってくるダイヤログを表示
let isHungry = confirm("お腹は空いていますか？");
if (budget >= 1500 && isHungry) {
  console.log("ピザを注文する");
} else if (budget >= 500 && isHungry) {
  console.log("ポテトを注文");
} else {
  console.log("買わずに節約する");
}

//parseIntは、小数点以下を切り捨てる
//parseFloatは、小数点以下も切り捨てない
