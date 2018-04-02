import React from "react";
import Person from "./Person";

const Team = props => {
  return (
    <section id="team">
      <div className="container">
        <div className="row">
          {props.edges.map(({ node }) => {
            return <Person key={node.name} {...node} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
