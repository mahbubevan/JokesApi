import React from "react";

import JokeComponents from "./JokeComponents";
import JokesData from ".././data/JokesData";

function App(){

  const jokeComponents = JokesData.map(function(joke){
    return(
      <JokeComponents
            key = {joke.id}
            Question = {joke.question}
            PunchLine = {joke.punchline}
      />
      );
  });

  return (
    <main>
      {jokeComponents}
    </main>

  );
}


export default App;
