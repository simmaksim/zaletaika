import classes from "./VideoArticle.module.css";

export function VideoArticle(props) {
  return (
    <div className={classes.articleWrapper} onClick={props.onClick}>
      <h3 className={classes.title}>{props.title} </h3>
      {/* <video src={props.image} className={classes.image} />   */}
      <img
        src="https://i.ytimg.com/vi/WglwfTL0iKs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAawF-qz3NtWdZS6y_Ko_PNdnBOg"
        className={classes.image}
      />
      <p className={classes.text}>{props.content}</p>
    </div>
  );
}
