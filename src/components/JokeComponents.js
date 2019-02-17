import React from "react";

import TextCenter from ".././style.css";

function JokeComponents(props){

  // if(props.Question){
  //   return (
  //       <div className="TextCenter">
  //       <h5>Question: {props.Question}</h5>
  //         <h5>Answer: {props.PunchLine}</h5>
  //         <hr/>
  //       </div>
  //   );
  // }else{
  //   return (
  //       <div className="TextCenter">
  //         <h5>Answer: {props.PunchLine}</h5>
  //         <hr/>
  //       </div>
  //   );
  // }

  return (
      <div className="TextCenter">
      <h5 style={{display: !props.Question && "none"}}>Question: {props.Question}</h5>
        <h5>Answer: {props.PunchLine}</h5>
        <hr/>
      </div>
  );



}

export default JokeComponents;
