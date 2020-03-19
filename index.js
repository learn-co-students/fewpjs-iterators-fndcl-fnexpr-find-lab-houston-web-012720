const testVar = {}

function testFunc() {
    return "hi"
}


const superbowlWin = objects => {
    let result = objects.find(object => object.result == "W")
    return result ? result.year : undefined
}