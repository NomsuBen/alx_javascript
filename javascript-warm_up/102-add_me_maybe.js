#!/usr/bin/node

/*
    function that increments and calls a function.

The function must be visible from outside
Prototype: function (number, theFunction)
You are not allowed to use var
*/

exports.adMeMaybe = function (number, theFunction) {
    theFunction(number);
};