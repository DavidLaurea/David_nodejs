const msg = 'Hello, Node.js!';
console.log(msg);

// importtaus
import { add, subtract } from './math.js';
import { toUpperCase, reverseString } from './stringUtils.js';
import { getCurrentDate, formatDate } from './dateUtils.js';

// math funktiot
const sum = add(5, 3);
const difference = subtract(10, 4);
console.log('Sum:', sum);
console.log('Difference:', difference);

// stringUtils funktiot
console.log('Uppercased:', toUpperCase(msg));
console.log('Reversed:', reverseString(msg));

// dateUtils funktiot
const today = getCurrentDate();
console.log('Current Date:', today);
console.log('Formatted Date:', formatDate(today));
