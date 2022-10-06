//【1】 以下の構成で出力データオブジェクトを作成
let fortuneResults = {
  money: [
    { stars: "★★★", detail: "最高の金運です！いつの間にかお金が溜まっているかも・・・？" },
    { stars: "★★", detail: "まずまず金運です！使いすぎには注意しましょう！" },
    { stars: "★", detail: "悪い傾向が見られます！財布の紐は絞めておくと吉です！" }
  ],
  work: [
    { stars: "★★★", detail: "最高の仕事運です！いつも以上にチャンスが巡ってくるかも・・・？" },
    { stars: "★★", detail: "まずまず仕事運です！普段通り仕事が進むでしょう！" },
    { stars: "★", detail: "悪い傾向が見られます！自信過剰にならないように注意しましょう" }
  ],
  health: [
    { stars: "★★★", detail: "最高の健康運です！ランニングの距離を伸ばしても良いですね！" },
    { stars: "★★", detail: "まずまず健康運です！無理せず体を動かしましょう！" },
    { stars: "★", detail: "悪い傾向が見られます！ケガにご注意を・・・" }
  ]
};

//★【2】buttonのjs-fortune-startクラスをクラスセレクタに設定してイベントを作成
$(document).on("click", ".js-fortune-start", function () {
  //1. fortuneResultsオブジェクトの「money/work/health」をfor文を使用して取得
  // $(".result").css("display", "block");
  $(".result").fadeIn(500);
  for (let title in fortuneResults) {
    //2. 「Math.floor()と「Math.random()」を使用して1~3の乱数を生成
    let rnd = Math.floor(Math.random() * 3);
    console.log("title=" + title + " rnd=" + rnd);
    //3. 金運、仕事運、健康運の「stars」クラスと「detail」クラスに2で作成した乱数を使用してfortuneResultsオブジェクトの値を取得し、それぞれ適用する。
    $("." + title).find(".stars").text(fortuneResults[title][rnd]["stars"]);
    $("." + title).find(".detail").text(fortuneResults[title][rnd]["detail"]);
  }
  toggleButton(this, "もう一度占う！");
  //  $(".result").show();//表示
});

//★【4】「もう一度占う！」ボタンを押下した場合は「result」ク・・・
$(document).on("click", ".js-fortune-restart", function () {
  toggleButton(this, "運勢を占う！");
  // $(".result").css("display", "none");
  $(".result").fadeOut(500);
});

//【3】「運勢を占う！」ボタン押下後のボタンの内容が「もう一度占う！」になるようにtoggleClassを使用して関数を作成
function toggleButton(elem, title) {
  $(elem).toggleClass("js-fortune-start").text(title);
  $(elem).toggleClass("js-fortune-restart").text(title);
}

