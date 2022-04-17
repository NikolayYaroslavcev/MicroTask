import React from "react";

type NewComponentType = {
  topCars: Array<TopCarsType>;
};
type TopCarsType = {
  manufacturer: string;
  model: string;
};

export const NewComponent = (props: NewComponentType) => {
  return (
    <div>
      <ul>
        {props.topCars.map((s, index) => {
          return <li key={s.index + 1}>{s.manufacturer}</li>;
        })}
      </ul>

      {/* <ul>
        {props.students.map((s) => {
          return <li key={s.id}>
			 {s.name}
			 {s.age} 
			 </li>;
        })}
      </ul> */}
    </div>
  );
};
