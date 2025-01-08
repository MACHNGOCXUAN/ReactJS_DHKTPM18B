const BIM = () => {
  let markMass = 78;
  let markHeight = 1.69;
  let johnMass = 95;
  let johnHeight = 1.88;

  let markBMI = markMass / markHeight ** 2;
  let johnBMI = johnMass / johnHeight ** 2;

  console.log("Mark's BMI: ", markBMI);
  console.log("John's BMI: ", johnBMI);
};

BIM();
