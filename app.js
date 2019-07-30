const chalk = require('chalk')

const yargs = require('yargs')

const getNotes = require('./notes.js')

//Customize yargs version
yargs.version('1.0.1')

//Create add command
yargs.command({

  command:'add',
  describe:'Add a new note',
  builder: {
    title:{
      describe:'Note Title',
      demandOption: true,
      type: 'string' 
    }
  },
  handler: function (argv) {

    console.log('Adding a new note', argv)

  }

})

//Create remove command
yargs.command({

  command:'remove',
  describe:'Remove a new note',
  handler: function () {

    console.log('Remove a new note')

  }

})

//Create list command
yargs.command({

  command:'list',
  describe:'List your godang notes',
  handler: function () {

    console.log('Here is you goddam notes bub...')

  }

})

//Create read command
yargs.command({

  command:'read',
  describe:'Read em notes',
  handler: function () {

    console.log('REading, reading, reading...')

  }

})

console.log(yargs.argv)
