const LineByLineReader = require('line-by-line')

module.exports = function readLines(file) {
  return new Promise((resolve, reject) => {
    const lr = new LineByLineReader(file)

    const result = []

    lr.on('error', err => {
      reject(err)
    })

    lr.on('line', line => {
      result.push(line)
    })

    lr.on('end', () => {
      resolve(result)
    })
  })
}

