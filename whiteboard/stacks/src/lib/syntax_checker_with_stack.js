'use strict';

class Stack {
  constructor() {
    this.stack = [];
  }

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

class CheckSyntax {
  constructor() {
    this.checkerStack = new Stack();
  }

  defineParen(passedParen) {
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

  main(testSet) {
    // ensure in same way we have dataset that resembles a string/array
    if (!testSet || !testSet.length || testSet.length === 0) {
      return null;
    }

    for (let eachIndex = 0; eachIndex <= testSet.length - 1; eachIndex++) {
      // must start out with open paren of some type
      // stop immediately if loop starts with a closed paren of some type
      const definedCurrentParam = this.defineParen(testSet.charAt(eachIndex));
      const definedNextParam = this.defineParen(testSet.charAt(eachIndex + 1));
      const currentPeek = this.defineParen(this.checkerStack.peek());

      if (definedCurrentParam.type === 'closed' && eachIndex === 0) {
        return false;
      }

      // else, continue on with syntax checking
      if (definedCurrentParam.type === 'open') {
        this.checkerStack.push(testSet.charAt(eachIndex));
        if (definedNextParam.type === 'closed') {
          if (definedCurrentParam.match !== testSet.charAt(eachIndex + 1)) {
            return false;
          }
        }
      }

      if (definedCurrentParam.type === 'closed') {
        if (currentPeek.match !== testSet.charAt(eachIndex)) {
          return false;
        } // else, if not false then pop
        this.checkerStack.pop();
      }
    } // else, if false has not been returned
    return true;
  }
}

const SyntaxChecker = new CheckSyntax();
module.exports = SyntaxChecker;
