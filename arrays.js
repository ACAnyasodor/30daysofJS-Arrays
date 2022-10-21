//level 1

let arr = []

let fruits = ['berries','apples','grapes', 'óranges', 'mangoes','pineapples','bananas']
console.log(fruits.length)
console.log(fruits[0], fruits[Math.floor(fruits.length/2)], fruits[fruits.length-1])

const mixedData = [3, true, null, 'eyes', 4.67, 56]
const itCompanies = new Array('IBM', 'facebook','google','microsoft','apple','oracle','amazon')
console.log(itCompanies)
console.log(itCompanies.join(', ').toUpperCase())
console.log(itCompanies + ' are all big IT Companies')
itCompanies.includes('meta')?console.log('found'):console.log('company is not found')
console.log(itCompanies.sort())

itCompanies.shift()
itCompanies.pop()
console.log(itCompanies)

//level 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('meat')
shoppingCart.push('sugar')
shoppingCart.splice(4,1,)
shoppingCart[3] = 'grean tea'
console.log(shoppingCart)

//level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
min = ages[0]
max = ages[ages.length-1]
console.log('min age is ' + min + '. max age is ' + max)
med = ages[Math.floor(ages.length/2)]
console.log(med)
range = max-min
console.log(range)
