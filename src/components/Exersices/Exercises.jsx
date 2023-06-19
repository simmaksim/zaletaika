import classes from "./Exercises.module.css";
import { Modal } from "../Modal/Modal";
import { useState } from "react";
import { VideoArticleModal } from "./VideoArticleModal/VideoArticleModal";
import { VideoArticle } from "../VideoArticle/VideoArticle";
import { getExercise } from "../../service.js";
import { Pagination } from "../Pagination/Pagination";
import { useEffect } from "react";
import { exerciseApi } from "../../api/exercises";

const exercisesStat = require("../../exercise.json");

export function Exercise() {
  const [exercises, setExercises] = useState([]);
  
  const [isModalOpen, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    //setIsLoading(true);
    //exerciseApi.getExercise().then(setExercises).finally(()=>setIsLoading(false))
    setExercises(exercisesStat);
  }, []);

   useEffect(() => {
     const offset = (page - 1) * 4;
     setData(exercises.slice(offset, offset + 4));
   }, [page, exercises]);


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
            <VideoArticle
              key={index}
              onClick={() => {
                openModal(article);
              }}
              {...article}
            />
          ))}
        </div>
      )}
      {/* <select onChange={(e) => setPage(e.target.value)}>
        <option value={0}>1</option>
        <option value={1}>2</option>
        <option value={2}>3</option>
        <option value={3}>4</option>
        <option value={4}>5</option>
        <option value={5}>6</option>
        <option value={6}>7</option>
        <option value={7}>8</option>
        <option value={8}>9</option>
        <option value={9}>10</option>
      </select> */}
      <div className={classes.pages}>
        <Pagination count={Math.ceil(exercises.length / 4)} onChange={setPage} page={page} />
      </div>

      

      <Modal isVisible={isModalOpen} onClose={() => setModal(false)}>

          <VideoArticleModal
            title={modalContent.title}
            content={modalContent.content}
            image={modalContent.image}
          />

        {/* <img href="../../article-photo.jpg" />
                    <h3>{title}</h3>
                    <p>{content}</p> */}
      </Modal>
    </div>
  );
}