function kick(direction){
  const result = document.getElementByld('result');
  const goalkeeper　= document.getElementByld('goalkeper');

  //ゴールキーパーの位置をランダムに決定
  const positions = ['left', 'center', 'right'];
  const goalkeeperPosition = positions[Math.floor(Math.random() * positions.length)];

  //蹴った方向とゴールキーパーの位置を比較
  if (direction === goalkeeperPosition) {
    result.textContent = 'ゴールキーパーに止められました！';
  } else {
    result.textContent = 'ゴール！';
  }

  //ゴールキーパーの位置を更新
  if(goalkeeperPosition === 'left') {
    goalkeeper.style.left = '10%';
  } else if (goalkeeperPosition === 'center') {
    goalkeeper.style.left = '50%';
    goalkeeper.style.transform = 'translateX(-50%)';
  } else {
    goalkeeper.style.left = '90%';
  }
}

//サービスワーカーの登録
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
    .then(registration => {
      console.log('Service Worker registration failed:', error);
    });
  });
}
