/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function trackback(nums,len,res,path,visited){
  if(path.length=== len){
    res.push([...path])
    return res;
  }
  for(let i = 0 ; i < len ; i++){
    if(visited[i]){
      continue;
    }
    path.push(nums[i]);
    visited[i] = true;
    trackback(nums,len,res,path,visited);
    path.pop();
    visited[i] = false;
  }
}

var permute = function (nums) {
  if(nums.length === 0) return []
  let len = nums.length;
  let res = [];
  let path =[];
  const visited = new Array(len).fill(false)
  trackback(nums,len,res,path,visited);
  return res;
};

console.log(permute([1,2,3]))