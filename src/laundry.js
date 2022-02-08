/**
 * Laundry Problem
 *
 * @param {number} noOfWashes
 * @param {number[]} cleanPile
 * @param {number[]} dirtyPile
 *
 * @returns {number}
 */
function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
  let cleanPairsToBeTaken = 0;

  let cleanBag = cleanPile.sort();
  let singleClean = [];

  // sort the clean pile for pairs

  while (cleanBag.length > 0) {
    if (cleanBag[0] === cleanBag[1]) {
      cleanPairsToBeTaken++;
      cleanBag.splice(0, 2);
    }
    // else move single socks to single-clean pile
    else {
      singleClean.push(cleanBag[0]);
      cleanBag.splice(0, 1);
    }
  }

  // if items in single-clean exist in dirty, increment count and slice considering the number of washes
  for (let i = 0; i < dirtyPile.length; i++) {
    if (singleClean.includes(dirtyPile[i]) && noOfWashes > 0) {
      singleClean.splice(singleClean.indexOf(dirtyPile[i]), 1);
      dirtyPile.splice(i, 1);
      cleanPairsToBeTaken++;
      noOfWashes--;
    }
  }

  // sort the dirty pile for pairs as much as possible
  while (dirtyPile.length > 0 && noOfWashes > 0) {
    if (dirtyPile[0] === dirtyPile[1] && noOfWashes > 0) {
      dirtyPile.splice(0, 2);
      noOfWashes -= 2;
      if (noOfWashes >= 0) cleanPairsToBeTaken++;
    } else if (dirtyPile[0] !== dirtyPile[1] && noOfWashes > 0) {
      dirtyPile.splice(0, 1);
    }
  }
  return cleanPairsToBeTaken;
}

console.log(getMaxPairs(0, [1, 2, 1, 1], [1, 4, 3, 2, 4]));

module.exports = getMaxPairs;
