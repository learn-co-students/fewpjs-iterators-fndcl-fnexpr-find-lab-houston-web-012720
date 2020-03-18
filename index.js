const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let r = record.find(element => element.result === "W")
  return !!r ? r.year : undefined
  // if (record.result === "W"){
  //   return record.year
  // }
}


