
const years = [
  {year: "2018", result: "L"},
  {year: "2016", result: "N/A"},
]

const years2 = [
  {year: "2017", result: "W"},
]

function superbowlWin(years) {
  const win_year = years.find(year => year["result"] == "W")
  return win_year ? win_year["year"] : undefined
}

console.log(superbowlWin(years))
console.log(superbowlWin(years2))
