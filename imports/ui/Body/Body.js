import "./Body.html";
import "../Home/Home.html";
import "../Test/Test.html";

FlowRouter.route("/", {
  name: "home",
  action: function () {
    BlazeLayout.render("Home");
  },
});

FlowRouter.route("/test", {
  name: "test",
  action: function () {
    BlazeLayout.render("Test");
  },
});
