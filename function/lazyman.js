class _LazyMan {
  constructor(name) {
    this.tasks = [];
    const task_hi = () => {
      console.log(`Hi! This is ${name}`);
      this.next();
    }
    this.tasks.push(task_hi);
    // console.log("pushed", this.tasks);
    setTimeout(() => {               // 把 this.next() 放到调用栈清空之后执行
      // console.log("123");
      this.next();
    }, 0);
    // this.next();
  }

  next() {
    const task = this.tasks.shift(); // 取第一个任务执行
    // console.log("task", task, this.tasks);
    task && task();
  }

  sleep(time) {
    this._sleepWrapper(time, false);
    return this;                     // 链式调用
  }

  sleepFirst(time) {
    this._sleepWrapper(time, true);
    return this;
  }

  _sleepWrapper(time, first) {
    const task_sleep = () => {
      console.log(`Wake up after ${time}`);
      setTimeout(() => {
        this.next();
      }, time * 1000)
    }
    if (first) {
      this.tasks.unshift(task_sleep);     // 放到任务队列顶部
      // console.log("pushed", this.tasks);
    } else {
      this.tasks.push(task_sleep);        // 放到任务队列尾部
      // console.log("pushed", this.tasks);
    }
  }

  eat(name) {
    const task_eat = () => {
      console.log(`Eat ${name}`);
      this.next();
    }
    this.tasks.push(task_eat);
    // console.log("pushed", this.tasks);
    return this;
  }
}

function LazyMan(name) {
  return new _LazyMan(name);
}

LazyMan("Hank").eat("dinner").sleepFirst(5).eat("supper");