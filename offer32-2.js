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
  let level = 0;
  path.push(root);
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
    level++;
  }
  return res;
};
