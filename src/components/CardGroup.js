import React from "react";
import Card from "./Card";

const CardGroup = ({robots}) => {
  // if (true) {
  //   throw new Error("Noooooo");
  // }

  return (
    <div>
      {robots.map(robot => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default CardGroup;
