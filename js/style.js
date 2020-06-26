// --- タイプライター風入力
// --- luisvinicius167/ityped(https://github.com/luisvinicius167/ityped)
ityped.init(document.querySelector("#ityped"), {
  // required - for now, only accepting texts
    strings: ['Welcome. My name is suna.',
              'I am a Lifehacker.',
              'I want to do something fun! XD'],
    typeSpeed: 80,     //タイピング速度
    backSpeed: 50,     //バックスペース速度
    startDelay: 2000,  //アニメーション開始ディレイタイム
    backDelay: 1000,   //バックスペース開始ディレイタイム
    loop: true,        //ループ有無
    showCursor: true,  //カーソル表示
    cursorChar: "|",   //カーソルキャラクタ
    // optional callback called once the last string has been typed
    onFinished: function(){}
})

// --- フェードイン/アウト操作(CSS実装)
// 変数定義
var btn_power = document.getElementById('input_power');
var box = document.getElementById('articleDetailBody');

// ボタンクリック時に.is-showクラス付与
btn_power.onclick = function () {
  box.classList.toggle('is-show')
}

// --- メッセージ表示
// 変数定義
var btn_home = document.getElementById('label_home');

// ボタンクリック時にアラート表示
// 熱帯雨林の植林活動の支援をさせる
btn_home.onclick = function () {
  alert('隴西の李徴「うわぁああぁーーー!!」');
}

// --- 波紋エフェクト
// --- sirxemic/jquery.ripples(https://github.com/sirxemic/jquery.ripples)
$('#articleDetail').ripples({      // 波紋をつける要素を指定
  resolution: 512,                 // 波紋が広がる速さ
  dropRadius: 20,                  // 波紋の大きさ
  perturbance: 0.04                // 波紋の揺れの量
});
