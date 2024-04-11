function phepTinh(a: number| string, b: number | string) {
  let a10: number;
  if (typeof a === "number") {
    a10 = a;
  } else {
    a10 = parseFloat(a);
  }
  if (isNaN(a10)) {
    return "không hợp lệ";
  }
  let b10: number;
  if (typeof b === "number") {
    b10 = b;
  } else {
    b10 = parseFloat(b);
  }
  if (isNaN(b10)) {
    return "không hợp lệ";
  }
  return a10 + b10; // sửa dấu + thành -*/ ở đây là đc hàm tính khác r, nên em chỉ làm 1 hàm
}
console.log(phepTinh("10", "20")); //30
console.log(phepTinh("abc", 20)); //không ép được kiểu dữ liệu
//suy ra ko hợp lệ