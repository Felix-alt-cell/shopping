/*
Asynchronous Programming:
  - Callback
  - Async
  - Promise

*/
//DEFINE            CALL
// callback        callback
// async/await     then/catch
// promise         then/catch

/
// Define
async function division(a, b) {
    if (b === 0) {
      throw new Error("Not divided by zero");
    } else {
      return a % b;
    }
  }
  
  async function run() {
    let result = await division(10, 3);
    console.log("result one:", result);
  
    result = await division(10, 4);
    console.log("result two:", result);
  
    result = await division(20, 7);
    console.log("result three:", result);
  }
  
  run();