function Quiz(params) {
  return (
    <div>
      {classes.map((all, index) => {
        if (all.finished === true) {
          return <h2>{all.name}</h2>;
        }
      })}
    </div>
  );
}
const classes = [
  { name: "html", finished: true },
  { name: "javascrip", finished: false },
  { name: "css", finished: true },
  { name: "bootstrap", finished: false },
  { name: "react", finished: true },
  { name: "python", finished: false },
];

export default Quiz;
