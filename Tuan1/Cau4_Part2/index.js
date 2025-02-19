let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

// hàm tính toán số tiền típ
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// Từ bills tính tiền tip va total và thêm vào mảng
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  const total = bills[i] + tip;

  tips.push(tip);
  totals.push(total);
}

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);

// Hàm tính toán giá trị trung bình
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const averageTotal = calcAverage(totals);
console.log("Average Total:", averageTotal);
