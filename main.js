/* var texte = "je fonctionne bien"
// var permet de définir une variable
alert(texte)
//permet un pop-up


var a = 4
var b = 4
var c = 3
if (a == b) 
{
    console.log("c'est égal")
}

if (c < b && a + c != 3)
{ 
    console.log("ok")
}
else
{
console.log("raté")
}


switch(a) 
{
case b:
    console.log('égal à b')
    break
case c:
    console.log('égal à c')
default:
console.log('égal à rien')
}

var a = 10
for (let oklm = 0; oklm < a; oklm++)
{
    console.log("oklm")
}


var a = 3
while(a < 9)
{
    a++
    if (a == 8)
    {
        break
    }
    if (a == 7)
    {
        continue
    }
console.log(a)
}


i=0
while (i < 100)
{
    i++
    if (i % 15 == 0)
    {
        console.log("Fizzbuz")
    }
    if (i % 3 == 0)
    {
        console.log("Fizz")
    }
    if (i % 5 == 0)
    {
        console.log("Buzz")
    }
}


i = 0
while (i <= 33)
{
    i++
    
    if (i == 17 )
    {
        i +=10
    }
    if (i == 28)
    {
        i++
        continue
    }
    if (i == 33)
    {
        console.log("réussi")
        break
    }
    console.log(i)
}


a = "Jean"
b = "Paul"
var result = checkName(a,b)

function checkName(a, b) 
{
  if (a == b)
  return result = "identiques"
  else
  return result = "pas identiques"
}
console.log(result)



var names = []
names.push("Vincent","Paul","Arthur")
names.forEach(name => {
    console.log(name,"va à la pêche")
});


let chr = 0
let students =
{
    name: "Pierre",
    favoriteFood: "Lasagna",
    city: "Chatou",
}

let valeurs = Object.values(students)
valeurs.forEach(valeur => {
    chr += valeur.length
})
console.log(chr)
*/

