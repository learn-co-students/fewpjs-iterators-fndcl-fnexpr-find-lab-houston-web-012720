const superbowlWin = (record) =>{

let obj = record.find(r =>  r.result === 'W') 
return obj != undefined ? obj.year : undefined
}