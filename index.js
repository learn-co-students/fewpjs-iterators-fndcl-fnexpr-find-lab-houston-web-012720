const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (array) => array.find(hash => hash.result === "W") ? array.find(hash => hash.result === "W").year : undefined
