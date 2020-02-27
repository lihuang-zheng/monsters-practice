import React from "react";

/*============================================= Below are components imports =============================================*/
import { Card } from "../card/card.component";

/*============================================= Below are codes that run =============================================*/
export const CardList = props => (
  <div className="card-list">
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

/* Below are the old code, and above made it into even smaller components*/
//   <div key={monster.id}>
//     <h1>{monster.name}</h1>
//   </div>
