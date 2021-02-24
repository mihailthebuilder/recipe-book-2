import "./Body.html";
import "../Home/Home.html";
import "../Test/Test.html";
import "../RecipeBook/RecipeBook.html";

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

FlowRouter.route("/recipe-book", {
  name: "recipe-book",
  action: function () {
    BlazeLayout.render("RecipeBook");
  },
});
