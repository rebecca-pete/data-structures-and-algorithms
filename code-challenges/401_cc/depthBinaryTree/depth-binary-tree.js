'use strict';

const checkDepth = (node, value, depth=0) {
    if (node === null) return null;
    if(node.value === value) return null;
    const left = function(node.left, value, depth++);
    const right = function(node.right, value, depth++);
    return left || right;
}

//arbitrary 
let node = 7;

checkDepth(node, 9);