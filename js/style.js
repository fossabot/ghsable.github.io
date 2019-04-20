// --- フェードイン/アウト操作
// 変数定義
var btn_power = document.getElementById('btn_power');
var box = document.getElementById('box2-fade');

// ボタンクリック時に.is-showクラス付与
btn_power.onclick = function () {
  box.classList.toggle('is-show')
}
