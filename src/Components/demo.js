import React, { useState, useEffect } from "react";
import { getList } from "./../Services/Products";
import {useSelector,useDispatch} from 'react-redux'
import {ProductAction} from "./../Stores/IndexAction"

export const Demo = () => {

  const isLoading  = useSelector((state) => state.product.IsLoading);
  const dispatch = useDispatch()
  console.log("isLoading",isLoading);
  //var a = props.FirstValue;
  //getList().then( (result) => {
    //setValB(result)
  //}) ;
  const [b,setValB] = useState([]);
  //const [valInput,setValInput] = useState("");
  // const handInput = (e) => {
  //     //a = e.target.value;
  //     setValInput (e.target.value)
  // }
   useEffect(() => {
       if(b.length <= 0 ){
            getList().then( (result) => {
              setValB(result)
            }) 

       }

   }, [])


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
      <div> 
        <table>
          <thead>
            <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Image</td>
            <td>CategoryId</td>
            <td>Price</td>
            </tr>
          </thead>
          <tbody>
          {b.map((el) =>
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.Images}</td>
                <td>{el.CategoryId}</td>
                <td>{el.Price}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* <div>b: {b[0].name}</div> */}
    </React.Fragment>
  );
};
