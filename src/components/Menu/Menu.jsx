import classes from "./Menu.module.css";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { ArticleModal } from "../StartPage/ArticleModal/ArticleModal";
import { Article } from "../Article/Article";
import { getFood } from "../../service.js";
import { useEffect } from "react";

const articles = require("../../food.json");

export function Menu() {
  const [isModalOpen, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    setIsLoading(true);
    getFood(page)
      .then(setData)
      .finally(() => setIsLoading(false));
  }, [page]);

  let image = articles[0].image;
  let title = articles[0].title;
  let content = articles[0].content;

  const openModal = ({ title, content, image }) => {
    setModalContent({ title, content, image });
    setModal(true);
  };


  return (
    <div>
      {isLoading ? (
        <span>loading...</span>
      ) : (
        <div className={classes.articles}>
          {/* {Object.keys(articles).map((index)=>(<Article key={index} onClick={() => {openModal(articles[index])}}
                 title={articles[index].title} content={articles[index].content} image={articles[index].image}/>))} */}
          {data.map((article, index) => (
            <Article
              key={index}
              onClick={() => {
                openModal(article);
              }}
              {...article}
            />
          ))}
        </div>
      )}
      <select onChange={(e) => setPage(e.target.value)}>
        <option value={0}>1</option>
        <option value={1}>2</option>
        
      </select>

      <Modal isVisible={isModalOpen} onClose={() => setModal(false)}>
        <div>
          <ArticleModal
            title={modalContent.title}
            content={modalContent.content}
            image={modalContent.image}
          />
        </div>
        {/* <img href="../../article-photo.jpg" />
                    <h3>{title}</h3>
                    <p>{content}</p> */}
      </Modal>
    </div>
  );
}
