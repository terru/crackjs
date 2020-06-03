//find triplet that sums equally to the int passed as parameter

const alg = [4, 1, 9, 8, 5, 2, 3, 23, 50, 22, 19, 10];
const int = 35;

function find_triplet(array, int) {
  const triplet_hash = array.sort();
  for (let i = 0; i < triplet_hash.length - 2; i++) {
    let start = i + 1;
    let end = triplet_hash.length - 1;
    while (start < end) {
      let a = triplet_hash[i];
      let b = triplet_hash[start];
      let c = triplet_hash[end];
      if (a + b + c == int) return [a, b, c];
      if (a + b + c < int) {
        start = start + 1;
      } else {
        end = end - 1;
      }
    }
  }
  return null;
}

console.log(find_triplet(alg, int));
