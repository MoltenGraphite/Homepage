//import "userbase";

function getParam(c) {
  var url_string = window.location.href;
  var url = new URL(url_string);
  return url.searchParams.get(c);
}

window.onload = function() {
  var username = getParam("user");
  var user = userbase[username];
  var knx = document.getElementById;
  knx("username").innerText=user.name;
  knx("email").innerText=user.email;
}
