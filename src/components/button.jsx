const Button = (props) => {
  return (
    <div>
      <button
        style={{
          width: "76",
          height: "31",
          color: "white",
          backgroundColor: "#3C3C43",
        }}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
