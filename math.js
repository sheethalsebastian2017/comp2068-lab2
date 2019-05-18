const simpleCalculate = (method, x, y) => {
    switch (method.toLowerCase()) {
      case 'add':
        return { operation: '+', result: x + y };
      case 'subtract':
        return { operation: '-', result: x - y };
      case 'multiply':
        return { operation: 'x', result: x * y };
      case 'divide':
        return { operation: '/', result: x / y };
      default:
        return 'This is not a valid option';
    }
  };
  
  const validOptions = ['add', 'subtract', 'multiply', 'divide'];
  
  const simpleCalculatorRoute = (request, response) => {
    request.query.x = parseInt(request.query.x);
    request.query.y = parseInt(request.query.y); 

    const { method, x, y } = request.query; 
    // x and y must be a number
    if (isNaN(y) || isNaN(x)) {
      return response.send('Both X and Y must be a number');
    }
  
    // If method is not in our valid options we have to display them
    if (!validOptions.includes(method.toLowerCase())) {
      return response.send(
        `Method must include one of the following: ${validOptions.join(', ')}`
      );
    }
  
    // Calculate function
    const { operation, result } = simpleCalculate(method, x, y);
  // Final Result
    response.send(`${x} ${operation} ${y} = ${result}`); 
  };
  
  module.exports = simpleCalculatorRoute; // Export out function