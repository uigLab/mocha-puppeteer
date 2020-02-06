const fs = require("fs");
const fetch = require("node-fetch");

const readCow = cb => {
  fs.readFile("cow.txt", "utf8", cb);
};

const myPromiseFunction = (arg) => {
  return new Promise((resolve, reject) => {
    let data = arg;
    setTimeout(() => {
      data = arg;
      if (data) {
        resolve(data);
      } else {
        reject();
      }
    }, 1000);
  });
};

async function msg(){
  try{
    const msg = await myPromiseFunction();
    console.log(msg)
  } catch{
    console.log("error")
  }

}

module.exports = {
  myPromiseFunction,
  readCow
};

async function fetchUsers(endpoint) {
  const res = await fetch(endpoint);
  let data = await res.json();

  data = data.map(user => user.username);

  console.log(data);
}

fetchUsers("https://jsonplaceholder.typicode.com/users");
