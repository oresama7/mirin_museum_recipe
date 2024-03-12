var videoElem = document.getElementById('video');

videoElem.addEventListener('loadedmetadata', function() {
	videoElem.playbackRate = 1; // BG のみりん映像の再生速度の調整用。0.75 ならば 3/4 になる。本 js を必要なページで読み込むこと
});