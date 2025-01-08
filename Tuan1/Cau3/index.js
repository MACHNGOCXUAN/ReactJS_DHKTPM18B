const tinhdiem = (dolphinsScores, koalasScores) => {
  const averageDolphins =
    dolphinsScores.reduce((a, b) => a + b, 0) / dolphinsScores.length;
  const averageKoalas =
    koalasScores.reduce((a, b) => a + b, 0) / koalasScores.length;

  console.log(`Dolphins' average score: ${averageDolphins}`);
  console.log(`Koalas' average score: ${averageKoalas}`);

  if (averageDolphins >= 100 && averageDolphins > averageKoalas) {
    console.log("Dolphins win the trophy!");
  } else if (averageKoalas >= 100 && averageKoalas > averageDolphins) {
    console.log("Koalas win the trophy!");
  } else if (
    averageDolphins >= 100 &&
    averageKoalas >= 100 &&
    averageDolphins === averageKoalas
  ) {
    console.log("It's a draw! Both teams win the trophy!");
  } else {
    console.log("No team wins the trophy.");
  }
};

console.log("=== Test Data 1 ===");
tinhdiem([96, 108, 89], [88, 91, 110]);

console.log("\n=== Test Data Bonus 1 ===");
tinhdiem([97, 112, 101], [109, 95, 123]);

console.log("\n=== Test Data Bonus 2 ===");
tinhdiem([97, 112, 101], [109, 95, 106]);
