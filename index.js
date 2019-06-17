// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    let obj = {};
    let names = driver.split(' ');
    obj.firstName = names[0];
    obj.lastName = names[1];
    return obj
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  })
}
