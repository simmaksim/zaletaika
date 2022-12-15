import classes from "./Calculator.module.css";
import { useContext, useState } from "react";
import { Context } from "../../App";

export function Calculator() {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [doctor, isDoctor] = useContext(Context);

  const IsHeightValid = (e) => {
    const value = Math.abs(e.target.value);
    console.log(value);

    setHeight(e.target.value);
  };

  const IsWeightValid = (e) => {
    console.log(typeof e.target.value);
    //if(e.target.value.length < 4 && e.target.value < 500 && e.target.value > 0){
    setWeight(e.target.value);
  };

  const isError = () => {
    if (!weight || !height) {
      return false;
    } else if (weight < 0 || height <= 0 || weight > 500 || height > 300) {
      return true;
    } else {
      return !(weight / (height / 100) ** 2);
    }
  };

  return (
    <form>
      {doctor ? "loh" : null}
      <div className={classes.wrapper}>
        <input placeholder="Height" value={height} onChange={IsHeightValid} />

        <input placeholder="Weight" value={weight} onChange={IsWeightValid} />
        <textarea value={weight / (height / 100) ** 2 || ""}></textarea>
        {isError() && <p> Enter valid </p>}
      </div>
    </form>
  );
}
