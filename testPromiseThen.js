Promise.resolve().then(()=>{
  console.log(0)
  return Promise.resolve(4)
}).then((res)=>{
  console.log(res)
})

Promise.resolve().then(()=>{
  console.log(1)
}).then(()=>{
  console.log(2)
}).then(()=>{
  console.log(3)
}).then(()=>{
  console.log(5)
})

// Promise.resolve().then(()=>{
//   console.log(6)
// }).then(()=>{
//   console.log(7)
// }).then(()=>{
//   console.log(8)
// }).then(()=>{
//   console.log(9)
// })

// Promise.resolve().then(()=>{
//   console.log(10)
// }).then(()=>{
//   console.log(11)
// }).then(()=>{
//   console.log(12)
// }).then(()=>{
//   console.log(13)
// })


console.log(-1)