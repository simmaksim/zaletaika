import classes from "./StartPage.module.css";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { ArticleModal } from "./ArticleModal/ArticleModal";
import { Article } from "../Article/Article";
import { getArticles } from "../../service.js";
import { useEffect } from "react";
import { Pagination } from "../Pagination/Pagination";
import { articleApi } from "../../api/article";
import test from "../../statii.json";

//const articles = require("../../statii.json");

export function StartPage() {
  const [articles, setArticles] = useState([]);
  const [isModalOpen, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  // useEffect(() => {
  //   setIsLoading(true);
  //   articleApi
  //     .getArticle()
  //     .then(setArticles)
  //     .finally(() => setIsLoading(false));
  // }, []);
  useEffect(() => {
    // setIsLoading(true);
    console.log(test);
    setArticles([test]);
  }, []);

  // useEffect(() => {
  //   const offset = (page - 1) * 4;
  //   setData(articles.slice(offset, offset + 4));
  // }, [page, articles]);

  const openModal = ({ title, content, image }) => {
    setModalContent({ title, content, image });
    setModal(true);
  };
  console.log("testst", articles)
  return (
    <div>
      {isLoading ? (
        <span>loading...</span>
      ) : (
        <div className={classes.articles}>
          {/* {Object.keys(articles).map((index)=>(<Article key={index} onClick={() => {openModal(articles[index])}}
                 title={articles[index].title} content={articles[index].content} image={articles[index].image} />))} */}
          {articles.length ? (
            articles[0].map((article, index) => (
            <Article
              key={index}
              onClick={() => {
                openModal(article);
              }}
              title={article.title}
              image={article.image}
              content={article.image}
              {...article}
            />
          ))
          ) : null}
          
        </div>
      )}

      {/* <div className={classes.pages}>
        <Pagination
          count={articles.length / 4}
          onChange={setPage}
          page={page}
        />
      </div> */}

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
