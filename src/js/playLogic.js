const winCombinatios = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
]

const changePlayer = (player) => {
   return player = player === 1 ? 2 : 1 
}

const setInArray = (arr, el) => {
   arr.push(el)
}

const checkWin = (arr) => {
   // Мб слегка сократит время
   // const playerArr = [...arr].sort((a, b) => a - b)

   // использовать some(subArr => every())
   return winCombinatios.some((subarr) => {
      return subarr.every((el) => arr.includes(el))
   })
}

const clearArr = (arr) => {
   arr.length = 0
}