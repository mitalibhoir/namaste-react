const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "hh" }, "I am a h1 tag!"),
    React.createElement("h2", { key: "yy" }, "I am a h2 tag!"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
