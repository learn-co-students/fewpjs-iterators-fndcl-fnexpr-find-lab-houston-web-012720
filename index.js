const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  record.find(record => record.result === "W")
  if (record.result === "W"){
    return record.year
  }
}

// this should work... im done with this remote crap 

