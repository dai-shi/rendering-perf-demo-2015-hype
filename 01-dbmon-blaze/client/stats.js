stats = { update: function() {} };
Meteor.startup(function() {
  stats = new Stats();
  stats.setMode(1);
  stats.domElement.style.position = 'fixed';
  stats.domElement.style.right = '0px';
  stats.domElement.style.bottom = '0px';
  document.body.appendChild(stats.domElement);
});
