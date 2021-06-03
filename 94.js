/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let res = [];
  const inorder = (root) => {
    if (root == null) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };

  inorder(root);
  return res;
};
//非递归遍历
var inorderTraversal = function (root) {
  let res = [];
  let path = [];
  let p = root;
  while (path.length > 0 || p) {
    while (p) {
      path.push(p);
      p = p.left;
    }
    let node = path.pop();
    res.push(node.val);
    p = node.right;
  }
};
