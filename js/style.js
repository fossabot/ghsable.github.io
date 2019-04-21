// --- フェードイン/アウト操作
// 変数定義
var btn_power = document.getElementById('btn_power');
var box = document.getElementById('box2-content');

// ボタンクリック時に.is-showクラス付与
btn_power.onclick = function () {
  box.classList.toggle('is-show')
}

// --- メッセージ表示+リンク誘導
// 変数定義
var btnl_home = document.getElementById('btnl_home');

// ボタンクリック時にアラート表示
// 熱帯雨林の植林活動の支援をさせる
btnl_home.onclick = function () {
  alert('隴西の李徴「うわぁああぁーーー!!」');
}

// --- 波紋エフェクト
// sirxemic/jquery.ripples(https://github.com/sirxemic/jquery.ripples)
$(document).ready(function() {
  $('.articleDetailBodyList').ripples({  //波紋をつける要素を指定
  resolution: 400,                       //波紋が広がる速さ
  dropRadius: 8,                         //波紋の大きさ
  perturbance: 0.8                       //波紋の揺れの量
  });
});
