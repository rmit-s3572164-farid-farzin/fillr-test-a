module.exports.extract = function(window) {

  // Write your solution to Task #2 - Extract Metadata task here

  // retrieve Tables from forms:
  var forms = window.document.forms;
  var retrievedData = {},
    tr,
    td,
    name,
    value;

  // Search for TRs in the forms:
  for (var i = 0; i < forms.length; i++) {
    tr = forms[i].getElementsByTagName("tr");
    //Extract TDs of each TR:
    for (var j = 0; j < tr.length; j++) {
      td = tr[j].getElementsByTagName("td");
      // Exclude TDs with no user information:
      if (td.length == 2) {
        // Retrieve label and omit spaces:
        name = td[0].innerHTML.trim();
        // Find next TD and get name attribute of the TD child:
        value = td[0].nextElementSibling;
        value = value.firstElementChild.getAttribute("name");
        // Add label and name of the control to retrievedData object:
        retrievedData[name] = name + " " + value;
      }
    }
  }
  return retrievedData;

};
