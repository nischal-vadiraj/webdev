//promises - another way of handling asynchronous code

//syntax

 const promise = new Promise((resolve, reject) => {
         if (condition) {
             resolve(/* value */)
         } else {
             reject(/* reason */)
         }
     })

//example

let done = false // change to true to see the resolved promise

const isFinished = new Promise((resolve, reject) => { //create a promise // resolve and reject are parameters
  if (done) {
    const workDone = 'focused on the first task'
    resolve(workDone)
  } else {
    const reason = 'working on something else'
    reject(reason)
  }
})

isFinished.then(ok => { //use the promise
    console.log(ok)
  }).catch(err => {
    console.error(err)
  })

