import classes from "./Menu.module.css";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { ArticleModal } from "../StartPage/ArticleModal/ArticleModal";
import { Article } from "../Article/Article";
import { getFood } from "../../service.js";
import { useEffect } from "react";
import { Pagination } from "../Pagination/Pagination";
import { menuApi } from "../../api/menu";

const articlesStatick = require("../../food.json");

export function Menu() {
  const [articles, setArticles] = useState([]);
  const [isModalOpen, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    //setIsLoading(true);
    setArticles(articlesStatick)
    console.log(articles)
    // menuApi
    //   .getMenu()
    //   .then(setArticles)
    //   .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const offset = (page - 1) * 4;
    setData(articles.slice(offset, offset + 4));
  }, [page, articles]);

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

      <div className={classes.pages}>
        <Pagination
          count={Math.ceil(articles.length / 4)}
          onChange={setPage}
          page={page}
        />
      </div>

      <Modal isVisible={isModalOpen} onClose={() => setModal(false)}>
        <div>
          <ArticleModal
            title={modalContent.title}
            content={modalContent.content}
            image={modalContent.image}
          />
        </div>
      </Modal>
    </div>
  );
}
