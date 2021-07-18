/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function trackback(nums,res,path,visited){
  if (nums.length === path.length) {
    return res.push([...path]);
  }
  for (let i = 0; i < nums.length; i++) {
    //已经被标记过或者元素前两相同
    if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
      continue;
    }
    path.push(nums[i]);
    visited[i] = true;
    trackback(nums,res,path,visited);
    path.pop();
    visited[i] = false;
  }
}
var permuteUnique = function (nums) {
  if(nums.length === 0) return []
  let res =[]
  let path = []
  const visited = new Array(nums.length).fill(false)
  //减枝前要排序
  nums.sort((a,b) => a-b)
  trackback(nums,res,path,visited)
  return res;
};
console.log(permuteUnique([1,1,2]))