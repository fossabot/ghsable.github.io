// --- フェードイン/アウト操作
// 変数定義
var btn_power = document.getElementById('btn_power');
var box = document.getElementById('articleDetailBody');

// ボタンクリック時に.is-showクラス付与
btn_power.onclick = function () {
  box.classList.toggle('is-show')
}

// --- メッセージ表示
// 変数定義
var btnl_home = document.getElementById('btn_home');

// ボタンクリック時にアラート表示
// 熱帯雨林の植林活動の支援をさせる
btnl_home.onclick = function () {
  alert('隴西の李徴「うわぁああぁーーー!!」');
}

// --- 波紋エフェクト
// sirxemic/jquery.ripples(https://github.com/sirxemic/jquery.ripples)
$('#articleDetail').ripples({      // 波紋をつける要素を指定
  resolution: 512,                 // 波紋が広がる速さ
  dropRadius: 20,                  // 波紋の大きさ
  perturbance: 0.04                // 波紋の揺れの量
});
