import React, { useState } from "react";

function App() {
  setInterval(current, 1000);

  let now = new Date().toLocaleTimeString();
  const [time, getTime] = useState(now);

  function current() {
    const newTime = new Date().toLocaleTimeString();
    getTime(newTime);
  }
  // console.log(time);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={current}> Get Time</button>
    </div>
  );
}

export default App;
