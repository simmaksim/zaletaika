import classes from "./Calculator.module.css";
import { useContext, useState } from "react";
import { Context } from "../../App";
import { TextField } from "@mui/material";

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

  const letResult=(weight)=>{
    if(weight <= 16)
      return "Выраженный дефицит массы тела"
    else if(weight > 16 && weight<= 18.5)
      return "Недостаточная масса тела"
    else if(weight > 18.5 && weight<=25)
      return "Норма"
    else if(weight > 25 && weight<=30)
      return "Избыточная масса тела"
    else if(weight > 30 && weight<=35)
      return "Ожирение первой степени"
    else if(weight > 35 && weight<=40)
      return "Ожирение второй степени"
    else if(weight > 40)
      return "Ожирение третьей степени";
    
  }

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
    <div className={classes.cont}>
      <h3 className={classes.calcTitle}>Калькулятор индекса массы тела</h3>
      <form>
        {doctor ? "loh" : null}

        <div className={classes.wrapper}>
          <TextField
            variant="outlined"
            placeholder="Height"
            value={height}
            onChange={IsHeightValid}
          />

          <TextField
            variant="outlined"
            placeholder="Weight"
            value={weight}
            onChange={IsWeightValid}
          />
          <TextField
            variant="outlined"
            value={weight / (height / 100) ** 2 || ""}
          ></TextField>
          {!isError() && <p>{letResult(weight / (height / 100) ** 2)}</p>}
          {isError() && <p color="Red"> Enter valid </p>}
        </div>
      </form>
    </div>
  );
}
