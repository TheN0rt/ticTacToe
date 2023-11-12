const playWithBotEasy = (arr) => {
   let isEmpty = true
   let counter = 1
   while(isEmpty){
      const turn = Math.floor(Math.random() * 9)
      counter += 1
      if(document.querySelector('.grid').children[turn].innerText == ""){
         document.querySelector('.grid').children[turn].innerText = 'O'
         setInArray(arr, turn)
         isEmpty = false
         counter = 1
      }

      if(counter >=9){
         break
      }
   }
}

const playWithBot = () => {
   // let turnCounter = 1;
   let player = 1
   const player1 = []
   const player2 = []
   createField()
   // let advice = document.createElement('p')
   // advice.innerText = 'Нажимайте на поле при игре с ботом после вашего хода, чтобы бот ходил'
   // document.querySelector('.additive__actions').appendChild(advice)
   document.querySelectorAll('.grid__item').forEach(el => {
      el.addEventListener('click', (e) => {
         if(e.target.innerText == ''){
            if(player === 1){
                  e.target.innerText = 'X'
                  setInArray(player1, Number(e.target.getAttribute('value')))

                  if(checkWin(player1)){
                     setTimeout(() => {
                        alert("Победил Игрок 1!")
                        clearField()
                        clearArr(player1)
                        clearArr(player2)
                        turnCounter = 0
                        document.querySelector('.game-block p span').innerText = turnCounter
                     }, 300)
                  }

                  player = changePlayer(player)
                  turnCounter++
                  document.querySelector('.game-block p span').innerText = turnCounter
                  document.querySelector('.game-block h2 span').innerText = player
               } 
            }
            if(player === 2){
               playWithBotEasy(player2)
               if(checkWin(player2)){
                  setTimeout(() => {
                     alert("Победил Игрок 2!")
                     clearField()
                     clearArr(player1)
                     clearArr(player2)
                     turnCounter = 0
                     document.querySelector('.game-block p span').innerText = turnCounter
                  }, 300)
               }

               player = changePlayer(player)
               turnCounter++
               document.querySelector('.game-block p span').innerText = turnCounter
               document.querySelector('.game-block h2 span').innerText = player
            }
      })
   })

   document.querySelector('#back').addEventListener('click', () => {
      document.querySelector('.container').innerHTML = `
      <h2>Выберите кол-во игроков</h2>
      <button id="first">1 Игрок</button>
      <button id="second">2 Игрок</button>
      `
      setEventForBtn1()
      setEventForBtn2()
      clearArr(player1)
      clearArr(player2)
      turnCounter = 0
   })

   setEventForClearBrn(player1, player2, turnCounter)
}