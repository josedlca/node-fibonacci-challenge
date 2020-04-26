const yargs= require('yargs')
const work = require('./work.js')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new result',
    builder: {
        quantity:{
            describe: 'Quantity',
            demandOption: true,
            type: 'number'
        }
    },
    handler(argv){
        work.addResults(argv.quantity)
    }
})

yargs.parse()

