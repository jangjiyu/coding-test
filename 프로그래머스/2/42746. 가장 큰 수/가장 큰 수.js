function solution(numbers) {
  let nonZeroCount = 0;

  numbers.sort((a, b) => {
    if (a || b) nonZeroCount++;

    const aStr = a.toString();
    const bStr = b.toString();

    return parseInt(bStr + aStr) - parseInt(aStr + bStr);
  });

  return nonZeroCount ? numbers.join("") : "0";
}