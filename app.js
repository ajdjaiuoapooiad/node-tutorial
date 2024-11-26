const {readFile, writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try{
        const first = await readFilePromise('./content/first.txt')
        const second = await readFilePromise('./content/second.txt')
        console.log(first,second);

        writeFilePromise(
            './content/result-mind-granade.txt',
            `This is the awesome : ${first} : ${second}`,
            {flag: 'a'}
        )
        

    } catch(error) {
        console.log(error);
        
    }
}


start();