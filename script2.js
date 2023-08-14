//  function generateColor() {
//      let color = '#';
//     let digits = '0123456789ABCDEF';
//     for (let i = 0; i < 6; i++) {
  
//      let randomDigit = Math.floor(Math.random() * 16);
    
//        color += digits[randomDigit];
//     }
//    document.getElementById('color').innerHTML = color;
//    document.body.style.backgroundColor = color;
//   }
//   generateColor();

 const generateBtn = document.getElementById("generateBtn");

generateBtn.onclick = () =>
{
  document.body.style.backgroundColor = generateColorCode();
};

  let generateColorCode=()=>
{
  const red=Math.floor(Math.random()*256);
  const green= Math.floor(Math.random()*256);
  const blue= Math.floor(Math.random()*256);
  const alpha=Math.random();
  return `rgba(${red},${green},${blue},${alpha})`;
 };
 