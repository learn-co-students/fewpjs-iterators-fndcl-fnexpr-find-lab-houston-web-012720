const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (arr) => {
  const win = arr.find(element => element.result === "W")
  if (win != undefined){
    return win.year
  }
  else {return win}
  
}