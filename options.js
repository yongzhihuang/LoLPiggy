// Saves options to localStorage.
function save_options() {
  var defaultSummonerInputbox = document.getElementById("defaultSummoner");
  var defaultSummonerName = defaultSummonerInputbox.value;
  var defaultSummonerServerDropDown = document.getElementById("defaultSummonerServer");
  var defaultSummonerServer = defaultSummonerServerDropDown.children[defaultSummonerServerDropDown.selectedIndex].text;
  localStorage["defaultSummonerName"] = defaultSummonerName;
  localStorage["defaultSummonerServer"] = defaultSummonerServer;


  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Successfully Saved";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var defaultSummoner = localStorage["defaultSummonerName"];
  var defaultSummonerServer = localStorage["defaultSummonerServer"];
  if (!defaultSummoner) {
    return;
  }
  var defaultSummonerInputbox = document.getElementById("defaultSummoner");
  defaultSummonerInputbox.value = defaultSummoner;
  var defaultSummonerServerDropDown = document.getElementById("defaultSummonerServer");
  defaultSummonerServerDropDown.children[defaultSummonerServerDropDown.selectedIndex].text = defaultSummonerServer;
}
document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);