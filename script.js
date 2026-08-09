(function() {
  function sanitizeExpression(expression) {
    if (typeof expression !== 'string') return '';
    return expression.replace(/[^0-9+\-*/().\s]/g, '');
  }

  function evaluate(expression) {
    var sanitized = sanitizeExpression(expression);
    if (!sanitized.trim()) return 0;
    try {
      return Function('"use strict"; return (' + sanitized + ')')();
    } catch (err) {
      throw new Error('Invalid expression');
    }
  }

  function add(a, b) {
    return Number(a) + Number(b);
  }

  function subtract(a, b) {
    return Number(a) - Number(b);
  }

  function multiply(a, b) {
    return Number(a) * Number(b);
  }

  function divide(a, b) {
    if (Number(b) === 0) throw new Error('Division by zero');
    return Number(a) / Number(b);
  }

  window.calculator = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    evaluate: evaluate
  };
})();
