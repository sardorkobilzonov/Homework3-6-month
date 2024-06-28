const Main = (props) => {
  return (
    <div
      style={{
        width: "60px",
        height: "30px",
        border: "1px solid black",
        borderRadius: "100px",
        padding: "12px 12px",
      }}
    >
      <p>{props.children}</p>
    </div>
  );
};

export default Main;
