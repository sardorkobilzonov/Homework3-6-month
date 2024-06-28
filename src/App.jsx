import "./App.css";

import Title from "./components/Title";
import Button from "./components/button";
import Card from "./components/Card";
import Main from "./components/Main";
import Card2 from "./components/Card2";

function App() {
  const text = "dunyo";

  return (
    // CARD-1
    // <div>
    //   <Card></Card>
    //   <Title>Headline</Title>
    //   <p>Subhead</p>
    //   <p>Please add your content here.</p>
    //   <Title>Title</Title>
    //   <div
    //     style={{
    //       display: "flex",
    //       gap: "10px",
    //       marginBottom: "24px",
    //     }}
    //   >
    //     <Main>tag 1</Main>
    //     <Main>tag 2</Main>
    //     <Main>tag 3</Main>
    //   </div>

    //   <Button>Button</Button>
    // </div>
    // CARD-2
    <div>
      <div
        style={{
          display: "flex",
          marginRight: "20px",
        }}
      >
        <Card2></Card2>
        <div
          style={{
            display: "block",
          }}
        >
          <Title>Headline</Title>
          <p>
            Please add your content here. Keep it short and simple. And smile :){" "}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "24px",
        }}
      >
        <Main>tag 1</Main>
        <Main>tag 2</Main>
        <Main>tag 3</Main>
        <Main>tag 4</Main>
        <Main>tag 5</Main>
        <Main>tag 6</Main>
        <Main>tag 7</Main>
      </div>
    </div>
  );
}

export default App;
