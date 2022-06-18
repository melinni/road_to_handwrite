function person(str) {
  return new _person(str)
}

function _person(str) {
  this.tasks = []
  const handler1 = () => {
    console.log(str)
    this.execute()
  }
  this.tasks.push(handler1)
  // setTimeout(() => {
  //   this.execute()
  // }, 0)
}

_person.prototype.execute = function() {
  let task = this.tasks.shift()
  // console.log("task", task, this.tasks)
  task && task()
}

_person.prototype.do = function(str) {
  const handler2 = () => {
    console.log(str)
    this.execute()
  }
  this.tasks.push(handler2)
  return this
}

_person.prototype.wait = function(times) {
  const handler3 = () => {
    setTimeout(() => {
      this.execute()
    }, times)
  }
  this.tasks.push(handler3)
  return this
}

_person.prototype.waitFirst = function(times) {
  const handler4 = () => {
    setTimeout(() => {
      this.execute()
    }, times)
  }
  this.tasks.unshift(handler4)
  return this
}

person('abc').wait(2000).do('df').wait(1000).do('gh').waitFirst(3000).execute()