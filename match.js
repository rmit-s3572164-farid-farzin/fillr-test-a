module.exports.match = function(hash) {

  // Write your solution to Task #2 - Match Metadata task here

  // Create a new object of regular expression:
  var patt = new RegExp("card expire date");
  var result = [];
    // Search for the regular expression pattern in the metadata:
    for (var key in hash) {
      if (patt.test(key))
        result.push(key);
    }
  return result;

};