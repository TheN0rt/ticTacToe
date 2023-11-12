const playWithFriend = () => {
   // let turnCounter = 1;
   let player = 1
   const player1 = []
   const player2 = []
   createField()
   // document.querySelector('.additive__actions').children[2].remove()
   // Много-много циклов
   document.querySelectorAll('.grid__item').forEach(el => {
      el.addEventListener('click', (e) => {
         if(e.target.innerText == ''){
            e.target.innerText = player === 1 ? 'X' : 'O'
            
            if(player === 1){
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
            } 
            
            else{
               setInArray(player2, Number(e.target.getAttribute('value')))
               
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