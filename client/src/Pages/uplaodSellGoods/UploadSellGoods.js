import React, { useState } from 'react'
import axios from 'axios'
import './sellGoods.css'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function UploadSellGoods() {
 const [Response, setResponse] = useState("")
 const [dataGoods, setGoods] = useState({
  item_name:"",
  item_price:"",
  item_description:"",
  item_photo:"",
 })   
 let url = `http://localhost:6500/user/uploadGoods`
  let formSubmitter =  (e)=>{
    e.preventDefault()
    let formData = new FormData()
    formData.append("item_name",dataGoods.item_name)
    formData.append("item_price",dataGoods.item_price)
    formData.append("item_description",dataGoods.item_description)
    formData.append("item_photo",dataGoods.item_photo)
      axios({
          method:"POST",
          data:formData,
          url,
          headers: {"Content-Type": "multipart/form-data" }
      }).then((res)=>{
          setResponse(res.data)
      }).catch((err)=>{
        console.log(err)
      })
      // to see formData content
      // for (let pair of formData.entries()) {
      //   console.log(pair[0] + ": " + pair[1]);
      // }
  }

  let handleChange = (e) => {
    switch (e.target.name) {
      case "item_name":
        setGoods((pre) => {
          return { ...pre, item_name: e.target.value };
        });
        break;
      case "item_price":
        setGoods((pre) => {
          return { ...pre, item_price: e.target.value };
        });
        break;
      case "item_description":
        setGoods((pre) => {
              return { ...pre, item_description: e.target.value };
        });
        break;
      case "item_photo":
        setGoods((pre) => {
          return { ...pre,
            item_photo: e.target.files[0]};
        });
        break;
      default:
        break;
    }
  };

if(Response){
  return(
<div className="forSuccessPage">
        <h1 className="thankYou">{Response.successMessage}</h1>
        <a className="thankYouAnch" href={`${Response.redirect}`}>
          {Response.message}
        </a>
      </div> 
  )
}else{
  return (
    <>
    <div className='d-flex'>
    <div className="col-md-6">
    <div className="py-5 align-items-center">
      <div className="form_wrapperB mx-auto col-12 col-md-6 p-5 d-flex flex-column">
        <p className="p11">Upload Goods To Sell</p>
        <form onSubmit={formSubmitter} encType="multipart/form-data">
          <div className="FLname d-flex">
          </div>
          <input
          required
            className="in11"
            onChange={handleChange}
            name="item_name"
            autoComplete="new-password"
            type='text'
            placeholder="Please Pass Item Name"
          />
          <input
          required
            className="in11 mt-4"
            onChange={handleChange}
            name="item_price"
            autoComplete="new-password"
            type="text"
            placeholder="Please Pass Item Price in indian rupee"
          />
          <textarea
          id='forTextArea'
             maxLength='123'
             required
            className="in11 mt-4"
            onChange={handleChange}
            name="item_description"
            autoComplete="new-password"
            type="text"
            placeholder="Please Pass description about the item in less than 123 characters including space"
          />
          <div>
            <label className="label" htmlFor="fileUpload">
            Select Image File
            </label>
          <input
            id="fileUpload"
            required
            className="in11 mt-4"
            onChange={handleChange}
            name="item_photo"
            autoComplete="new-password"
            type="file"
            accept="image/*"
          />
          </div>
          <button className="btnSign">Upload</button>
        </form>
      </div>
    </div>
  </div>

     <div className='notePartsell p-4 m-4 col-md-4'>
         <h1 className='animate__animated animate__rubberBand animate__repeat-3 p-2 '>Please..</h1>
            <ul className='forUl'>
              <li>Fill all Input Fields </li>
              <li>Check Item Name Before Upload</li>
              <li>Check Item Price Before Upload</li>
              <li>Check Item Description Before Upload</li>
              <li>Make sure your File Is In Image(png or jpg) Format Before Upload</li>
              <li>For better view,Image Size Should be 286px width by 150px height</li>
              <ul>
                     <h5>You can click the following button to Crop your Image for the required size</h5>
                     <Link to="https://imageresizer.com/crop-image">

                  <Button className='m-3'>Crop Image</Button>
                     </Link>
                     <Link to="/buyGoods">
                    <br />
                  <Button className='m-3'> Check Out Goods To Buy</Button>
                     </Link>
                 </ul>
            </ul>
     </div>
    </div>
 
    
    </>
  )
}
 
}

export default UploadSellGoods