/**
 * Initialize your data structure here.
 * 用两个队列实现栈，先进先出实现先进后出
 */

var MyStack = function () {
  this.queue = [];
  this._queue = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.queue.length > 1) {
    this._queue.push(this.queue.shift());
  }
  let ans = this.queue.shift();
  while (this._queue.length > 0) {
    this.queue.push(this._queue.shift());
  }
  return ans;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue.slice(-1)[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  if (this.queue.length === 0) {
    return true;
  } else {
    return false;
  }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
