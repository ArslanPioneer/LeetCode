/**
 * 
从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
例如:
给定二叉树: [3,9,20,null,null,15,7],
[3,9,20,15,7]
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
 * @return {number[]}
 */
var levelOrder = function(root) {
    if(root === null ) return [];
    let res = [];
    let path = [];
    path.push(root);
    while(path.length > 0){ 
       let node = path.shift();
       res.push(node.val);
       if(node.left){
           path.push(node.left)
       }
       if(node.right){
           path.push(node.right);
       }
       
    }
    return res;
};