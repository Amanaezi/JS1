let a = +prompt("Input a");
let b = +prompt("Input b");
if(isNaN(a) || isNaN(b))
{
    alert("number is NaN")
}
else if(a == 0 || b == 0)
{
    alert("number is 0")
}
else
{
    let x = -b / a;
    alert(x);
}
