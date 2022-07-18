/* eslint-disable no-new-func */
import React,{useState} from 'react';
import classes from './Cal.module.css';
import Button from './Button';

function Cal() {

  const [res, setRes] = useState("")

    const arr=["c","0","+","1","2","3","-","4","5","6","*","7","8","9","/",".","Del","="];

    const findVal =()=>{

      let result = Function("return "+res)(); 
      setRes(result.toString());
    }

    const handler= (arg)=>{
      if(res == "Infinity"){
        setRes("");
        return;
      }

       if(arg == "c") setRes("");
       else if(arg == "=") findVal();
       else if(arg == "Del"){
        let n=res.length;
        if(n>0)
        setRes(res.slice(0,n-1));
       }
       else setRes(res.concat(arg));
    }
    
  return (
    <>
    <header></header>
    <main>
    <div className={classes.cal}>
      <div className={classes.inner}>
        <div className={classes.outer}>
        
          <div className={classes.box}>
            {res}
          </div>
        </div>
        <div className={classes.btn}>
          {arr.map((ele,index)=>{return <Button handler={handler} value={ele} key={index}/>})}
        </div>
      </div>
    </div>
    </main>
    <footer></footer>
    </>
  )
}

export default Cal