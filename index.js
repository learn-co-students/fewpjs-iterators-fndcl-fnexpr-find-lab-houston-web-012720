const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let win = record.find((game) => game.result === "W")
  return win ? win.year : win
}

const a = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]