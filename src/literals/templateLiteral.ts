type CSSMeasurement = `${number}px` | `${number}em` | `${number}rem`;

let width: CSSMeasurement = "100px"; // ✅ Valid
// let height: CSSMeasurement = "5vh"; // ❌ Error: "vh" not allowed
