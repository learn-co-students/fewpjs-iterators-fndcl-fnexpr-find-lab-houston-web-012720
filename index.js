const testVar = {}

function testFunc() {
  return "hi"
}

let superbowlWin = (record) => {
  const winningGame = record.find(obj => obj.result === 'W')
  if (winningGame) return winningGame.year
}