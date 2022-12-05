import classes from "./Article.module.css"

export function Article(props){
    
    
    return(
        <div className={classes.articleWrapper}  onClick={props.onClick}>
            <h3 className={classes.title}>{props.title} </h3>
            <img src={props.image} className={classes.image}/>         
            <p className={classes.text}>{props.content}</p>
        </div>
    )

}