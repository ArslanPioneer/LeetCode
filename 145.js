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
var postorderTraversal = function (root) {
  let res = [];
  const postorder = (root) => {
    if (root === null) {
      return;
    }
    postorder(root.left);
    postorder(root.right);
    res.push(root.val);
  };
  postorder(root);

  return res;
};
//
var postorderTraversal = function (root) {
  let res = [];
  let path = [];
  let p = root;
  let visited = new Set();
  while (path.length || p) {
    while (p) {
      path.push(p);
      p = p.left;
    }
    let node = path[path.length - 1];
    if (node.right && !visited.has(node.right)) {
      visited.add(node.right);
      p = node.right;
    } else {
      res.push(node.val);
      path.pop();
    }
  }
  return res;
};
