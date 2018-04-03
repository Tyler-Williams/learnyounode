const args = process.argv;
const filteredArgs = args.filter((arg) => parseInt(arg) > 0)

const argTotal = filteredArgs.reduce((total, currentVal) => {
  return total + parseInt(currentVal)
}, 0)

console.log(argTotal);
