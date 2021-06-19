import React from "react";
import ThreeDotsWave from "./ThreeDotsWave";
import ThreeDotsWaveCopy from "./ThreeDotsWaveCopy";

// import BouncingBall from "./BouncingBall";
// import CircleLoader from "./CircleLoader";

function App() {
  return (
    <div className="container">
      <Grid>
        {/* <CircleLoader /> */}
        {/* <BouncingBall /> */}
        {/* <ThreeDotsWave />
        <br /> */}
        <ThreeDotsWaveCopy />
        <br />
      </Grid>
    </div>
  );
}

function Grid({ children }) {
  return (
    <div className="grid">
      <LoadingBox>{children}</LoadingBox>
    </div>
  );
}

function LoadingBox({ children }) {
  return React.Children.map(children, child => {
    return <div className="loading-box">{child}</div>;
  });
}

export default App;
