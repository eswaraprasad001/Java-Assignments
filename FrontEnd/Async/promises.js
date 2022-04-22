

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 4000)
  });
  
  
  promise.then(resp => console.log(resp))
  
//
  const promise = Promise.resolve(
    setTimeout(() => {
      console.log("success");
    }, 4000)
  );
  
  Promise.reject('failed')
    .catch(console.log('Ooops something went wrong'))

//
  const urls = [
    'http://swapi.dev/api/people/1',
    'http://swapi.dev/api/people/2',
    'http://swapi.dev/api/people/3',
    'http://swapi.dev/api/people/4'
  ]
  
  Promise.all(urls
    .map(url => fetch(url)
      
    .then(people => people.json())
  ))
    .then(array => {
      console.log('1', array[0])
      console.log('2', array[1])
      console.log('3', array[2])
      console.log('4', array[3])
    })
    .catch(err => console.log('ughhhh fix it!', err));
  
///////////////////////////////////////////////////////////////////



fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then(console.log);

async function fetchStarship() {
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
console.log(data);
}

//settled,allsetlled

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // some code (try to change x to 5)
  
    if (x === 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    val => console.log('ughhhh fix it!', err)
  ).catch(err => console.log('ughhhh fix it!', err));


    
///
let myPromise = new Promise(function(myResolve, myReject) {
    myResolve("Second");
})
myPromise.then(function(result){
    console.log(result);
})
async function abc() {
   // await myPromise;
    console.log("Third");
}

// abc().then(
// function (value) {console.log(value);},
// function (err) {console.log(err);}
// );

console.log("Firstttt");

abc();




/////////////////////////////////////////////////////////////////////////////////////////////////////

let makeCake = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Make the cake"))
  },20000);
  makeCake.then(function(result1){
    console.log(result1);
})

let makeBurger = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Make the Burger"))
  },10000);
  makeBurger.then(function(result1){
    console.log(result1);
})

async function burgerFunction(){
  let buyBurger = await makeBurger;
    console.log("B ready");
    let result =  await buyBurger;
    console.log("Bought the b.Promise fulfilled.");
     console.log('Eat the b');
}
 async function cakeFunction() {
  
  try{
    let buyCake = await makeCake;
    console.log("Cake ready");
    let result =  await buyCake;
    console.log("Bought the cake.Promise fulfilled.")
  }
  catch{
    console.log("error");
  }
  
  console.log('Eat the cake');
}

cakeFunction();
burgerFunction();


//SOL

let makeCake = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Make the cake"))
  },2000);
  makeCake.then(function(result1){
    console.log(result1);
})

let makeBurger = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Make the Burger"))
  },1000);
  makeBurger.then(function(result1){
    console.log(result1);
})

async function burgerFunction(){
  let buyBurger = await makeBurger;
    setTimeout(()=>{console.log("B ready")}, 3000) ;
    setTimeout(()=>{ console.log("Bought the burger .Promise fulfilled.");}, 5000) 
    setTimeout(()=>{console.log('Eat the b');}, 7000) 
   
     
}
 async function cakeFunction() {
  
  try{
    let buyCake = await makeCake;
    setTimeout(()=>{console.log("cake ready")}, 2000) ;
    setTimeout(()=>{ console.log("Bought the cake .Promise fulfilled.");}, 4000) 
    setTimeout(()=>{console.log('Eat the cake');}, 6000)
  }
  catch{
    console.log("error");
  }
}

cakeFunction();
burgerFunction();


////////////////////////////////////////////////////////
