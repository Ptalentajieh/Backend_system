function randomnum() {
    return Math.floor(Math.random() * 50) + 1
}

const rand = randomnum()
console.log(rand)

module.exports = randomnum
