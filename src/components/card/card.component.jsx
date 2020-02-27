import React from "react";

/*============================================= Below are codes that run =============================================*/
export const Card = props => (
  <div>
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h1>{props.monster.name}</h1>
    <p>{props.monster.email}</p>
  </div>
);
