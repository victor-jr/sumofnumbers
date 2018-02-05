const list = [1, 2, 3];

function sumFor(a) {
  let sum = 0;
  for (const i of a) {
    sum += i;
  }
  return sum;
}

function sumWhile(a) {
  let i = 0;
  let sum = 0;
  while (i < a.length) {
    sum += a[i];
    i++;
  }
  return sum;
}

function sumRecursion(a, i) {
  let index = i;
  if (index === a.length - 1) {
    return a[index];
  }
  index++;
  return a[index] + sumRecursion(a[index]);
}

function sumTheSimpleWay(a) {
  return _.reduce(a, (memo, i) => memo + i);
}

console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list));
console.log(sumTheSimpleWay(list));
