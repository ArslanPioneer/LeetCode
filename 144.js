/**144. Binary Tree Preorder Traversal
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * Input: root = [1,null,2,3]
   Output: [1,2,3]
   先序遍历
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [];
  const preorder = (root) => {
    if (root === null) return;
    res.push(root.val);
    preorder(root.left);
    preorder(root.right);
  };
  preorder(root);
  return res;
};
//bfs
var preorderTraversal = function (root) {
  if (root === null) return [];
  let res = [];
  let path = [];
  path.push(root);
  while (path.length > 0) {
    let node = path.pop();
    res.push(node.val);
    if (node.right) {
      path.push(node.right);
    }
    if (node.left) {
      path.push(node.left);
    }
  }
  return res;
};
