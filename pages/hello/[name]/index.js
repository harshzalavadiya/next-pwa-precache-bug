import React from "react";

function HelloPage({ name }) {
  const alertMe = () => {
    alert(`Hello ${name}`);
  };

  return (
    <div>
      <h1>Hello {name}!</h1>
      <button onClick={alertMe}>Alert</button>
    </div>
  );
}

HelloPage.getInitialProps = async (ctx) => ({
  name: ctx.query.name,
});

export default HelloPage;
