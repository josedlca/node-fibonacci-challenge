const fs = require('fs')

addResults=(quantity)=>{
    const work = loadResults()

    fibonacciCode(quantity,(fibonacciCodeArr)=>{
        work.push({
            fibonacciSeries:fibonacciCodeArr,
        })
    })

    saveResults(work)
    console.log('New results added')
}

loadResults = () => {
    try{
        const dataBuffer = fs.readFileSync('results.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

saveResults = (work) =>{
    const dataJSON = JSON.stringify(work)
    fs.writeFileSync('results.json', dataJSON)
}

const fibonacciCode=(quantity,callback)=>{
    let a = 0
    let b = 1
    const fibonacciCodeArr = [a,b]
    for (i = 2; i < quantity; i++) {
        let c = a+b
        fibonacciCodeArr.push(c)
        a=b
        b=c
    }
    callback(fibonacciCodeArr)
}

module.exports={
    addResults:addResults
}