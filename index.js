const testVar = {}

function superbowlWin(record) {
  let obj = record.find(rec => rec.result === "W")
  return obj ? obj.year : undefined
}
