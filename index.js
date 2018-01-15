// NOTE: result get number
function getNumber() {
  var numbA = parseFloat(document.getElementById('input-one').value);
  let numbB = 099;

  document.getElementById('result').innerHTML = numbA;
  console.log(numbB);
}
//NOTE: addition
function add() {
  var numbA = parseFloat(document.getElementById('input-one').value);
  var numbB = parseFloat(document.getElementById('input-two').value);

  document.getElementById('result').innerHTML = numbA + numbB;
}
// NOTE: substract
function min() {
  var numbA = parseFloat(document.getElementById('input-one').value);
  var numbB = parseFloat(document.getElementById('input-two').value);

  document.getElementById('result').innerHTML = numbA - numbB;
}
// NOTE: multiplication
function multiplication() {
  var numbA = parseFloat(document.getElementById('input-one').value);
  var numbB = parseFloat(document.getElementById('input-two').value);

  document.getElementById('result').innerHTML = numbA * numbB;
}
// NOTE: division
function division() {
  var numbA = parseFloat(document.getElementById('input-one').value);
  var numbB = parseFloat(document.getElementById('input-two').value);

  document.getElementById('result').innerHTML = numbA / numbB;
}
// NOTE: modulus
function mod() {
  var numbA = parseFloat(document.getElementById('input-one').value);
  var numbB = parseFloat(document.getElementById('input-two').value);

  document.getElementById('result').innerHTML = numbA % numbB;
}
// NOTE: differents type (string & boolean) input type text / string
function bol() {
  var boolean = true;
  var numbA = parseFloat(document.getElementById('input-one').value);
  var numbB = parseFloat(document.getElementById('input-two').value);
  if (boolean) {
    var numbC = numbA / numbB;
    var result = `${numbA} division ${numbB} equals ${numbC}`;
    document.getElementById('result').innerHTML = result;
  }
}
// NOTE:  try store kind of numbers into an array variable
function arrType() {
  var numbA = ['20.9', '100', '-2', '1'];
  numbA.push('10');
  numbA.push('-100')
  console.log(numbA);
  numbA.pop('10');
  numbA.pop('-100');
  numbA.pop('1');
  console.log(numbA);

  for (var i = 0; i < numbA.length; i++) {
    console.log(numbA[i]);
    document.getElementById('result').innerHTML = numbA;
  }
}

document.getElementById('result-one').addEventListener('click', getNumber);
document.getElementById('result-two').addEventListener('click', add);
document.getElementById('result-three').addEventListener('click', min);
document.getElementById('result-four').addEventListener('click', multiplication);
document.getElementById('result-five').addEventListener('click', division);
document.getElementById('result-six').addEventListener('click', mod);
document.getElementById('result-seven').addEventListener('click', bol);
document.getElementById('result-eight').addEventListener('click', arrType);