// Code your solution here

// find drivers 
function findMatching(drivers, searchString) {
    const lowercaseSearch = searchString.toLowerCase(); // Convert search string to lowercase for case-insensitive matching
    return drivers.filter((driver) => driver.toLowerCase().includes(lowercaseSearch));
  }
  
  //  Specific drivers 
  function fuzzyMatch(drivers, searchString) {
    const lowercaseSearch = searchString.toLowerCase();
    return drivers.filter((driver) => driver.toLowerCase().startsWith(lowercaseSearch));
  }
  
  // matching drivers names
  function matchName(drivers, name) {
    return drivers.filter((driver) => driver.name === name);
  }