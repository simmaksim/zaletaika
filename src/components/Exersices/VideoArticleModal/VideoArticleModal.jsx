import classes from "./VideoArticleModal.module.css";

export function VideoArticleModal(props) {
  return (
    <div className={classes.articleWrapper}>
      <iframe className={classes.image} src={props.image}>
       
      </iframe>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}
