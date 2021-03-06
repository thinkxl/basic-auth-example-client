_.templateSettings.interpolate = /\{\{(.*?)\}\}/g;

var Templates = {};

// "form-login" or "form-signup"
Templates.form = [
  "<a href='#'>Home</a>",
  "<h2>{{ title }}</h2>",
  "<div class='feedback'>",
  "</div> <!-- .alert-error -->",
  "<form id='{{ form }}'>",
    "<fieldset>",
      "<div class='field-group'>",
        "<label for='email'>Email</label>",
        "<input type='email' placeholder='user@domain.com' value='thinkxl@thinkxl.net'>",
      "</div> <!-- .field-group -->",
      "<div class='field-group'>",
        "<label for='password'>Password</label>",
        "<input type='password' placeholder='yourpassword' value='secr3t'>",
      "</div> <!-- .field-group -->",
      "<div class='field-group'>",
        "<input type='submit' value='Submit'>",
      "</div> <!-- .field-group -->",
    "</fieldset>",
  "</form>"
].join('');

Templates.index = [
  "<p><a class='btn' href='#'>Home</a></p>",
  "<p><a class='btn' href='#login'>Login</a></p>",
  "<p><a class='btn' href='#signup'>Signup</a></p>"
].join('');

Templates.app = [
  "<div class='app-container'>",
    "<h1>APP</h1>",
    "<hr>",
    "<button class='request-button'>button</button>",
  "</div> <!-- .app-container -->"
].join('');

for (var temp in Templates) {
  if (Templates.hasOwnProperty(temp)) {
    Templates[temp] = _.template(Templates[temp]);
  }
}
