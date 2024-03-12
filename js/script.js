// BG をゆっくりに

var videoElem = document.getElementById('video');
if ( videoElem ) {
    videoElem.addEventListener('loadedmetadata', function() {
    	// videoElem.playbackRate = 0.75; // BG のみりん映像の再生速度の調整用。0.75 ならば 3/4 になる。
    });
}

/* キオスクモード対応以前の処理として */
// 以下はいずれもキオスクモードでは対処可能なため、本 JS 自体を読み込まない処理を行う可能性あり

// スワイプ無効化
document.addEventListener(
    "touchmove",
    event => {
      event.preventDefault()
    },
    { passive: false }
)
  
// 右クリック防止
document.oncontextmenu = () => {
  return false
}
  
// ピンチ・ズームを無効化
const touchHandler = event => {
  if (event.touches.length > 1) {
    event.preventDefault()
  }
}
document.addEventListener("touchstart", touchHandler, {
  passive: false
})

// ドラッグ禁止
//ドラッグ禁止
document.onselectstart = function(){ return false; };
document.onmousedown = function(){ return false; };
document.body.onselectstart = "return false;"
document.body.onmousedown = "return false;"