const courses = [
  {
    id: 1,
    name: "tan thanh",
    age: 20,
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    content: "oooooooooooooooooooooooooooooooo",
  },
  {
    id: 2,
    name: "tan thanh",
    age: 20,
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    content: "oooooooooooooooooooooooooooooooo",
  },
  {
    id: 3,
    name: "tan thanh",
    age: 20,
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    content: "oooooooooooooooooooooooooooooooo",
  },
  {
    id: 4,
    name: "tan thanh",
    age: 20,
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    content: "oooooooooooooooooooooooooooooooo",
  },
  {
    id: 5,
    name: "tan thanh",
    age: 20,
    desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    content: "oooooooooooooooooooooooooooooooo",
  },
];

const courseItem = ({ courses }) => {
  <div>
    <h2>{courses.name}</h2>
    <p>{courses.age}</p>
    <p>{courses.desc}</p>
  </div>;
};

function App() {
  return (
    <div id="wrapper">
      {courses.map((course) => (
        <courseItem key={course.id} course = {course} />
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
