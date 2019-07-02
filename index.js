// Code your solution in this file.
const driverList = [
  'Bobby Smith',
  'Sammy Watkins',
  'Sally Jenkins',
  'Annette Sawyer',
  'Sarah Hucklebee',
  'bobby ridge'
];


function lowerCaseDrivers(driverList) {
  return driverList.map(driver => driver.toLowerCase())
};

function nameToAttributes(driverList) {
  return driverList.map(driver => {
    let firstLast = driver.split(" ");
    return Object.assign({}, { firstName: firstLast[0], lastName: firstLast[1] })
  });
};

function attributesToPhrase(driverList) {
  return driverList.map(driver => `${driver.name} is from ${driver.hometown}`)
};
