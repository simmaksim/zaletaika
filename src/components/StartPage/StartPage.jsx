import classes from "./StartPage.module.css";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { ArticleModal } from "./ArticleModal/ArticleModal"
import { Article } from "../Article/Article";


const articles = require("../../statii.json");



export function StartPage(){
    const [isModalOpen, setModal] = useState(false);
    const [modalContent, setModalContent] = useState({});

    let image = articles[0].image;
    let title = articles[0].title;
    let content = articles[0].content;

    const openModal = ({title, content, image}) => {
        console.log(title, content, image)
        setModalContent({title, content, image});
        setModal(true);

    }

    

    return(

        <div>
            <div className={classes.articles}>
                {Object.keys(articles).map((index)=>(<Article key={index} onClick={() => {openModal(articles[index])}}
                 title={articles[index].title} content={articles[index].content} image={articles[index].image}/>))}
            </div>
            

            <Modal isVisible={isModalOpen} onClose={() => setModal(false)}>
                <div>
                    <ArticleModal title={modalContent.title} content={modalContent.content} image={modalContent.image}/>
                </div>
                    {/* <img href="../../article-photo.jpg" />
                    <h3>{title}</h3>
                    <p>{content}</p> */}
                
                
            </Modal>
    
        </div>
    )        
    
}