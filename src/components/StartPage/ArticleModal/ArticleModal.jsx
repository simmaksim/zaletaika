import classes from "./ArticleModal.module.css";

export function ArticleModal(props) {
  return (
    <div className={classes.articleWrapper}>
      <img className={classes.image} src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}
