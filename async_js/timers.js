//timers - setTimeout() and setInterval()

//timers are not part of the JavaScript language. They are add-ons, provided by the browser or Node.js !!

setTimeout(() => {
    // runs after 2 seconds
  }, 2000)

  const id = setInterval(() => { // returns an id
    // runs every 2 seconds
  }, 2000)
  learInterval(id)

//example - runs unless status has the value done

const interval = setInterval(() => {
    if (status === 'done') {
      clearInterval(interval)
      return
    }
    // otherwise do things
  }, 100)