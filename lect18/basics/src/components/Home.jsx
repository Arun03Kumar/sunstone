import { useState } from "react";
// function Home(props) {
//   return (
//     <h1>
//       {props.name}, {props.age}
//     </h1>
//   );
// }

// function Home({ name, age }) {
//   const [counter, setCounter] = useState(0);
//   const increaseFn = () => setCounter(counter + 1);
//   const decreaseFn = () => setCounter(counter - 1);
//   return (
//     <h1>
//       {name}, {age}
//       <br />
//       Counter: {counter}
//       {/* <button onClick={() => setCounter(counter + 1)}>increase</button>
//       <button onClick={() => setCounter(counter - 1)}>decrease</button> */}
//       <button onClick={increaseFn}>increase</button>
//       <button onClick={decreaseFn}>decrease</button>
//     </h1>
//   );
// }

function Home(props) {
  let x = 0;
  //   console.log("Home component rendered, x:", x);
  return (
    <>
      counter: {x}
      <button
        onClick={() => {
          x++;
          console.log("Home component rendered, x:", x);
        }}
      >
        increase
      </button>
    </>
  );
}

export default Home;
