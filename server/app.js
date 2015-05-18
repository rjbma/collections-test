//server only code
Meteor.startup(function () {
  //Players.remove({}); // uncomment this to reload data
  if (Players.find().count() === 0) {
     
    var url = 'http://www.json-generator.com/api/json/get/cbpRBMCfEy';
    url = 'http://www.json-generator.com/api/json/get/bObvwzbqdK?indent=2'
    var data = Meteor.http.get(url);
    var content = JSON.parse(data.content);
    _.each(content, function (value, i) {
        Players.insert(value);
    });
  }
});
