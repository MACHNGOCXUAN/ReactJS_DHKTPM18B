const BIM = () => {
  let markMass = 78;
  let markHeight = 1.69;
  let johnMass = 95;
  let johnHeight = 1.88;

  let markBMI = markMass / markHeight ** 2;
  let johnBMI = johnMass / johnHeight ** 2;

  let markHigherBMI = markBMI > johnBMI;
  if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
  } else if (markBMI < johnBMI) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
  } else {
    console.log(`Mark's BMI (${markBMI}) is equal to John's (${johnBMI})!`);
  }
};

BIM();
