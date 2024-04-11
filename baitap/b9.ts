let a9: string = "banana";
let b9: string = "";
for (let i = 0; i < a9.length; i++) {
  let check: string = a9[i];
  let check2: boolean = false;
  for (let j = 0; j < i; j++) {
    if (a9[j] === check) {
      check2 = true;
      break;
    }
  }
  if (!check2) {
    b9 += check;
  }
}
console.log(b9);