function banUser() {
  document.getElementById('launchButton').style.backgroundColor = " rgba(252, 17, 0, 0.753)";
  document.getElementById('launchButton').innerHTML = "Banned";
  alert("You are banned from Aero Client. Appeal at https://discord.aeroclient.tk");
  console.log("[ACP]: ACP_LAUNCH_BANNED");
}

function startupChecks() {
  document.getElementById('launchButton').innerHTML = "Initializing ACP";
  document.getElementById('launchButton').style.backgroundColor = " rgba(109, 0, 252, 0.671)";
  bannedCheck()
}

function notWhitelisted() {
  document.getElementById('launchButton').style.backgroundColor = " rgba(252, 17, 0, 0.753)";
  document.getElementById('launchButton').innerHTML = "Unauthorized";
  alert("You are not authorized to launch Aero Client at this time.");
  console.log("[ACP]: Not whitelisted!");
}
