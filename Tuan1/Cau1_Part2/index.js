const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins!");
  }
};

console.log(
  "====>Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49"
);

const avgDolphinsData1 = calcAverage(44, 23, 71);
const avgKoalasData1 = calcAverage(65, 54, 49);

checkWinner(avgDolphinsData1, avgKoalasData1);

console.log(
  "====>Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27"
);

const avgDolphinsData2 = calcAverage(85, 54, 41);
const avgKoalasData2 = calcAverage(23, 34, 27);

checkWinner(avgDolphinsData2, avgKoalasData2);
