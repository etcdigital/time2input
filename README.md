# time2input

A helper to manage 2 time inputs with increment/decrement on second input when the first changes.

## How to use

`npm install time2input --save-dev` or `yarn add -D time2input`.

```js
const inputTimeChange = require('time2input');
const beginTime = '08:00';
const endTime = '09:00';
const intervalInMinutes = 15;
const thisInputIs = 'begin'; // or "end"
const action = 'down'; // up to sum or down to substract
const newInputTimes = inputTimeChange(beginTime, endTime, intervalInMinutes, thisInputIs, action);
// newInputTimes = { begin: '07:45', end: '09:00' }
```
