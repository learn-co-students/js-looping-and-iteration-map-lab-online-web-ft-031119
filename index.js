// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(driver){
    return driver.toLowerCase()
  })
}

function nameToAttributes(names){
  return names.map(function(name){
    const pieces=name.split(" ")
    return {firstName: pieces[0], lastName: pieces[1]}
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
}