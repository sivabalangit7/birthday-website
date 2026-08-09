(function() {
  function sanitizeExpression(expression) {
    if (typeof expression !== 'string') return '';
    var cleaned = expression.replace(/[^0-9+\-*/().,\sA-Za-z]/g, '');
    var allowedTokens = [
      'sin', 'cos', 'tan', 'sqrt', 'log', 'exp', 'pow', 'abs', 'round', 'floor', 'ceil',
      'PI', 'E', 'pi', 'e'
    ];
    var tokens = cleaned.match(/[A-Za-z]+/g) || [];
    for (var i = 0; i < tokens.length; i += 1) {
      if (allowedTokens.indexOf(tokens[i]) === -1) return '';
    }
    return cleaned;
  }

  function evaluate(expression) {
    var sanitized = sanitizeExpression(expression);
    if (!sanitized.trim()) return 0;
    try {
      return Function(
        '"use strict"; const sin=Math.sin, cos=Math.cos, tan=Math.tan, sqrt=Math.sqrt, log=Math.log, exp=Math.exp, pow=Math.pow, abs=Math.abs, round=Math.round, floor=Math.floor, ceil=Math.ceil, PI=Math.PI, E=Math.E, pi=Math.PI, e=Math.E; return (' +
          sanitized +
          ')'
      )();
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

  function sin(x) {
    return Math.sin(Number(x));
  }

  function cos(x) {
    return Math.cos(Number(x));
  }

  function tan(x) {
    return Math.tan(Number(x));
  }

  function sqrt(x) {
    return Math.sqrt(Number(x));
  }

  function log(x) {
    return Math.log(Number(x));
  }

  function exp(x) {
    return Math.exp(Number(x));
  }

  function pow(a, b) {
    return Math.pow(Number(a), Number(b));
  }

  function abs(x) {
    return Math.abs(Number(x));
  }

  function round(x) {
    return Math.round(Number(x));
  }

  function floor(x) {
    return Math.floor(Number(x));
  }

  function ceil(x) {
    return Math.ceil(Number(x));
  }

  window.calculator = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    sin: sin,
    cos: cos,
    tan: tan,
    sqrt: sqrt,
    log: log,
    exp: exp,
    pow: pow,
    abs: abs,
    round: round,
    floor: floor,
    ceil: ceil,
    evaluate: evaluate
  };
})();