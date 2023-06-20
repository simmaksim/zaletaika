import "./style.css";
import VideoChat from "../VideoChat/VideoChat";

export const TestVideo = () => {
  return (
    <div className="app">
      <header>
        <h1>Video Chat </h1>
      </header>
      <main>
        <VideoChat />
      </main>
      <footer>
        <p>
          Made by Maksim Slizh{" "}
          {/* <span role="img" aria-label="React">
            ⚛️
          </span>{" "}
          by <a href="https://twitter.com/philnash">philnash</a> */}
        </p>
      </footer>
    </div>
  );
};
