const today = new Date();

exports.getDate = function () {
  return today.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long" });
};

exports.getDay = function () {
  return today.toLocaleDateString("en-US", { weekday: "long" });
}
