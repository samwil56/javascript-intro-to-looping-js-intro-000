
function forLoop(strin) {
  for(let i = 1; i<25; i +=1) {
    if (i==1) {strin.push(`I am ${i} strange loop.`)}
    else {strin.push(`I am ${i} strange loops.`)}
  }
  return strin
}

function whileLoop(n) {
  while (n >= 0) {
    return n
    n = n-1
  }
}
