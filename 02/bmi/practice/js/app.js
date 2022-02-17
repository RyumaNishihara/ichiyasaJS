//体重の数値を得る
let weight = prompt("体重(kg)を入力してください。");
//身長の数値を得る
let height = prompt("身長(m)を入力してください。");
//体重と身長からBMI値を計算して、警告ダイアログに表示する。
let bmi = weight / (height * height);
// alert(`あなたのBMI値は、${bmi}です。`);
let message = "あなたのBMI値は「" + bmi + "」です。";
alert(message);
