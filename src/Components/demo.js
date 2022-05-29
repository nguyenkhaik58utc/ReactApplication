import React, { useState, useEffect } from "react";
import { getList } from "./../Services/Products";
import {useSelector,useDispatch} from 'react-redux'
import {ProductAction} from "./../Stores/IndexAction"

export const Demo = () => {

  const isLoading  = useSelector((state) => state.product.IsLoading);
  const dispatch = useDispatch()
  console.log("isLoading",isLoading);
  //var a = props.FirstValue;
  var b = getList().then( (result) => {
    console.log(result);
  }) ;
  //const [b,setValB] = useState([]);
  //const [valInput,setValInput] = useState("");
  // const handInput = (e) => {
  //     //a = e.target.value;
  //     setValInput (e.target.value)
  // }
//   useEffect(() => {
//       if(b.length <= 0 ){
//           setValB(getList());
//       }

//   }, [])

const handButton = (e) => {
  if(isLoading){
    dispatch(ProductAction.hideLoading());
  }
  else{
    dispatch(ProductAction.showLoading());
  }
  console.log(isLoading)
}
  return (
    <React.Fragment>
      <button onClick={(e) => handButton(e)}>Toggle</button>
      <div>a:</div>
      <div>b: {isLoading ? "loading" : "no loading"}</div>
      {/* <div>b: {b[0].name}</div> */}
    </React.Fragment>
  );
};
