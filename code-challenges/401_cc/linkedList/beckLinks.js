// 'use strict';

const homer = {
    name: 'homer',
    food: 'donuts'
};

const maggie = {
    name: 'maggie',
    food: 'cheerios',
    next: lisa
};

const lisa = {
    name: 'lisa',
    food: 'cheeseburger',
    next: marg
};

const marg = {
    name: 'marg',
    food: 'doritos',
    next: bart
}

const bart = {
    name: 'bart',
    food: 'butterfinger',
    next: homer
}

console.log(bart);
console.log(bart.next);
console.log(bart.next.next);