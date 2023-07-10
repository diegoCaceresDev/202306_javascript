// imprima todos los valores impares del 1 al 20.

for (let i = 1; i < 21; i++) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}

// imprima todos los valores que sean divisibles de manera uniforme por 3 del 100 al 0.

for (let i = 100; i >= 0; i--) {
  if (i % 3 === 0) {
    console.log(i)
  }
}

// imprima los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5.

for (let i = 4; i > -4; i -= 1.5) {
  console.log(i)
}

// Escribe código que sume todos los valores del 1 al 100 en una variable sum y, al final, console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100. Deberíamos obtener 5050 al final.

let sum = 0
for (let i = 1; i < 101; i++) {
  sum += i
}
console.log(sum)

// Factorial Escribe código que multiplique todos los valores del 1 al 12 en una variable producty, al final, console.logdé como resultado  1 * 2 * 3 * ... * 10 * 11 * 12. Deberíamos obtener  479001600al final.

let product = 0
for (let i = 1; i < 13; i++) {
  product = product * i
  
}

console.log(product)