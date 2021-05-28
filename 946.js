/**
 * 
 * Given two sequences pushed and popped with distinct values, return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.
Example 1:

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
Example 2:

Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/validate-stack-sequences
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
    stack  popped    j
    1      4          0
    12     4          0
    123    4          0
    1234   4 相等出栈  1
    1235   3          1
    false
    
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validat5eStackSequences = function (pushed, popped) {
  let len = pushed.length;
  let stack = [];
  let j = 0;
  for (let cur of pushed) {
    stack.push(cur);
    console.log(stack);
    while (
      stack.length > 0 &&
      j < len &&
      stack[stack.length - 1] === popped[j]
    ) {
      stack.pop();
      j++;
    }
  }
  return len === j;
};
let pushed = [1, 2, 3, 4, 5];
let popped = [4, 5, 3, 2, 1];

console.log(validateStackSequences(pushed, popped));
