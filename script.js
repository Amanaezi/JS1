let a = +prompt("Input a");
let b = +prompt("Input b");
let c = +prompt("Input с");

if (isNaN(a) || isNaN(b) || isNaN(c)) 
{
  alert("Wrong numbers");
} 
else if (a == 0) 
{
  if (b == 0 || c == 0) 
  {
    alert("countless solutions");
  } 
  else if (b == 0 || c != 0) 
  {
    alert("no solutions!");
  } 
  else 
  {
    let x = -c / b;
    alert(x);
  }
} 
else 
{
  let D = b * b - 4 * a * c;
  if (D > 0) 
  {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    alert("x1 = " + x1 + ", x2 = " + x2);
  } 
  else if (D === 0) 
  {
    let x = -b / (2 * a);
    alert("x = " + x);
  } 
  else 
  {
    alert("The equation has no real x");
  }
}