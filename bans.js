function bannedChecker() {
  fs.readFile(getAppDataPath('.minecraft/launcher_profiles.json'), function (err, data) {
    if (err) throw err;
    if(data.indexOf('5ca59f07ff7542ddbf7c0e92309d8dc2') >= 1){
     banUser()
    } else {
      ACPStartup()
    }
  });
}
