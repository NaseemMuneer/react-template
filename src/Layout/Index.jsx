import React from "react";

function Index(props) {
  return (
    <>
      <h1>Header</h1>

      {props.children}
      
      <h1>Footer</h1>
    </>
  );
}

export default Index;
