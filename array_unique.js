// 数组去重

// 技巧一：使用Set
function unique(arr) {
  const result = new Set(arr)
  return [...result]
  //使用扩展运算符将Set数据结构转为数组
}

// 技巧二：使用splice
function unique(arr){            
  for(var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){
      if(arr[i] === arr[j]){         
        //第一个等同于第二个，splice方法删除第二个
        arr.splice(j, 1)
        // 删除后注意回调j
        j--
      }
    }
  }
  return arr
}

// 技巧三：使用indexof
function unique(arr) {
  var uniqueArr = []; // 新数组
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
      //indexof返回-1表示在新数组中不存在该元素
      uniqueArr.push(arr[i])//是新数组里没有的元素就push入
    }
  }
  return uniqueArr;
}

// 技巧四：使用includes
function unique(arr) {
  var uniqueArr = []; 
  for (let i = 0; i < arr.length; i++) {
    //includes 检测数组是否有某个值
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i])//
    }
  }
  return uniqueArr;
}
