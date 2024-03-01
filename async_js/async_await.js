//Async functions are a higher level abstraction over promises - built on promises

let done = false 

const isFinished = new Promise((resolve, reject) => { 
  if (done) {
    const workDone = 'focused on the first task'
    resolve(workDone)
  } else {
    const reason = 'working on something else'
    reject(reason)
  }
})

isFinished.then(ok => { // to use the promise
    console.log(ok)
  })

  const result = await isFinished //using async functions insted
  console.log(result)

//enclosing function must be declared as async:

  const doSomething = async () => {
    const result = await isFinished
    console.log(result)
  }
  doSomething()

//example - using async and await to make asyncronous http requests

  const fetchData = async () => {
    const response = await fetch('https://url.com/api')  //promise is resolved when the data is fetched
    const data = await response.json() //promise is resolved when the data is parsed
    console.log(data)
  }
  fetchData()

  