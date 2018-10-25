'use strict';

const multiBracketValidation = {};

//   Stack
//     - LIFO
class Stack {
  constructor() {
    this.stack = [];
  }

  // Stack methods:
  //   - .push - pushes (value) onto stack
  //   - .pop - pops (value) off the stack
  //   - .peek - peek at top value without 'the pop'

  push(value) {
    return this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

// defineParen
function defineParen(passedParen) {
  switch (passedParen) {
    case '(':
      return { type: 'open', match: ')' };
    case '{':
      return { type: 'open', match: '}' };
    case '[':
      return { type: 'open', match: ']' };
    case ')':
      return { type: 'closed', match: '(' };
    case '}':
      return { type: 'closed', match: '{' };
    case ']':
      return { type: 'closed', match: '[' };
    default:
      return false;
  }
}

// buildStack
function buildStack(myStr) {
  const myString = myStr;
  const builtStack = new Stack();
  const spiltMyString = myString.split(''); // O(n)

  // O(n)
  for (let iterateString = 0; iterateString <= spiltMyString.length - 1; iterateString++) {
    const currentValue = spiltMyString[iterateString];
    const currentParen = defineParen(currentValue);
    // get all 'open parens e.g. {, (, [
    if (currentParen.type === 'open') {
      builtStack.push(currentValue);
    }

    if (currentParen.type === 'closed') {
      const currentStackPeek = builtStack.peek();
      if (currentStackPeek === currentParen.match) {
        builtStack.pop();
      } else {
        return false;
      }
    }
  }
  return true;
}

// validateBuild
// function validateBuild(destructureInput) {
//   const { builtStack, spiltMyString } = destructureInput;
//   // O(n)
//   // loop compare has to go in "opposite direction" because a Stack is LIFO
//   for (let iterateString = 0; iterateString <= spiltMyString.length - 1; iterateString++) {
//     const currentValue = spiltMyString[iterateString];
//     const currentParen = defineParen(currentValue);
//
//     // get all 'closed parens e.g. }, ), ]
//     if (currentParen.type === 'closed') {
//       const currentStackPeek = builtStack.peek();
//       if (currentStackPeek === currentParen.match) {
//         builtStack.pop();
//       }
//     }
//   }
//
//   if (builtStack.stack.length === 0) {
//     return true;
//   }
//   // default return
//   return false;
// }

// add that fresh function to the export object
multiBracketValidation.functions = {};
multiBracketValidation.functions.buildStack = buildStack;
// multiBracketValidation.functions.validateBuild = validateBuild;

const validStrings = {
  0: '{}',
  1: '{}(){}',
  2: '()[[ExtraCharacters]]',
  3: '(){}[[]]',
  4: '{}{Code}[Fellows](())',
};

// add testString tests to export object
multiBracketValidation.testStrings = {};
multiBracketValidation.testStrings.validStrings = validStrings;

const invalidStrings = {
  0: '[({}]',
  1: '(](',
  2: '{(})',
};

// add invalidString tests to export object
multiBracketValidation.testStrings.invalidStrings = invalidStrings;

// uncomment for debugging and testing
const testBuild = multiBracketValidation.functions.buildStack(multiBracketValidation.testStrings.invalidStrings['2']);
console.log(testBuild);

const testValidate = multiBracketValidation.functions.validateBuild(testBuild);
console.log(testValidate);

module.exports = multiBracketValidation;
