// --- フェードイン/アウト操作
// 変数定義
var btn_power = document.getElementById('btn_power');
var box = document.getElementById('box2-content');

// ボタンクリック時に.is-showクラス付与
btn_power.onclick = function () {
  box.classList.toggle('is-show')
}

// --- メッセージ表示
// 変数定義
var btn_home = document.getElementById('btn_home');

// ボタンクリック時にアラート表示
btn_home.onclick = function () {
  alert('隴西の李徴「うわぁああぁああああぁあaーーーーー」');
}
