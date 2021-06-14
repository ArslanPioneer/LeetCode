/**
 * 
 * @param {请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

 

例如:
给定二叉树: [3,9,20,null,null,15,7],

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。} root 
 * @returns 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];
  let res = [];
  let path = [];
  path.push(root);
  let level = 0;
  while (path.length > 0) {
    let size = path.length;
    res.push([]);
    while (size > 0) {
      let node = path.shift();
      res[level].push(node.val);
      if (node.left) {
        path.push(node.left);
      }
      if (node.right) {
        path.push(node.right);
      }
      size--;
    }
    if (level % 2 != 0) {
      res[level].reverse();
    }
    level++;
  }
  return res;
};
