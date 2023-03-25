/**
 * <div id="parent">
 *     <div id="child">
 *        <h1>I am h1 tag!</h1>
 *   </div>
 * </div>
 *
 * React element is and Object. render() converts it into HTML which is understandable by Browser.
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading2" }, "I am h1 tag!")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

// root.render(heading);
