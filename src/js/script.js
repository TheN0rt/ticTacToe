let turnCounter = 0;

const createField = () => {
   document.querySelector('.container').innerHTML = `
   <div class="game-block">
      <h2>Ходит Игрок <span>0</span></h2>
      <p>Количество сделанных ходов: <span>0</span></p>
   </div>
   <div class="grid">
      <div class="grid__item" value="0"></div>
      <div class="grid__item" value="1"></div>
      <div class="grid__item" value="2"></div>
      <div class="grid__item" value="3"></div>
      <div class="grid__item" value="4"></div>
      <div class="grid__item" value="5"></div>
      <div class="grid__item" value="6"></div>
      <div class="grid__item" value="7"></div>
      <div class="grid__item" value="8"></div>
   </div>
   <div class="additive__actions">
      <button id="back">Назад</button>
      <button id="clear">Заново</button>
   </div>
      `
      // <button id="save">Сохранить прогресс</button>
}

const clearField = () => {
   document.querySelectorAll('.grid__item').forEach(el => el.innerText = '')
}

const setEventForBtn1 = () => {
   document.querySelector('#first').addEventListener('click', () => {
      document.querySelector('.container').innerHTML = ''
      playWithBot()
   })
}

const setEventForBtn2 = () => {
   document.querySelector('#second').addEventListener('click', () => {
      document.querySelector('.container').innerHTML = ''
      playWithFriend()
   })
}

const setEventForClearBrn = (arr, arr2) => {
   document.querySelector('#clear').addEventListener('click', () => {
      clearField()
      clearArr(arr)
      clearArr(arr2)
      turnCounter = 0
      document.querySelector('.game-block p span').innerText = turnCounter
   })
}

setEventForBtn1()
setEventForBtn2()