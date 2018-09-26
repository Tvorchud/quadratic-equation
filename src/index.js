module.exports = function solveEquation(equation) {
  let result = [];
  let eqs = equation.split('').filter(val => val != ' ').join('').split('*x');
  let a = parseInt(eqs[0],10);
  let b = parseInt(eqs[1].slice(2, eqs[1].length),10);
  let c = parseInt(eqs[2],10);
  let D = b**2 - 4*a*c;
  if(D > 0){
    let x1 = Math.round((-b + D ** 0.5)/(2*a));
    let x2 = Math.round((-b - D ** 0.5)/(2*a));
    result.push(x1,x2);
    result.sort((a,b) => {return a-b});
    return result;
  }
}
