import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <h2>Birthday Buddy</h2>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button
            className="btn btn-block"
            type="button"
            onClick={() => setPeople([])}
          >
            clear
          </button>
        </section>
      </main>
    </>
  );
};
export default App;
