module.exports = function multiply(first, second) {
  let strA = first.split("").reverse();
  let strB = second.split("").reverse();

  let memo = [];

  for (let i = 0; i < strA.length; i++) {
    for (let j = 0; j < strB.length; j++) {
      let elem = strA[i] * strB[j];
      memo[i + j] = memo[i + j] ? memo[i + j] + elem : elem;
    }
  }

  for (let i = 0; i < memo.length; i++) {
    let number = memo[i] % 10;
    let jump = Math.floor(memo[i] / 10);
    memo[i] = number;

    if (memo[i + 1]) {
      memo[i + 1] += jump;
    }
    else if (jump != 0) {
      memo[i + 1] = jump;
    }
  }

  return memo.reverse().join('');
}


