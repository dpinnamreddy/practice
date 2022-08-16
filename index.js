const addDays = require("date-fns/addDays");

const input = require("input");

async function getUserInput() {
  const days = await input.text("How many days do you want to add?");
  return addDays(new Date(2020, 7, 22), parseInt(days));
}

module.exports = getUserInput;
