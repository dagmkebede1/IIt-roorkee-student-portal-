import React, { useEffect, useState } from 'react'
import './MtechSecitonFileUpload'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function MtechSecitonFileUpload() {
 const [Response, setResponse] = useState("")
 const [dataOfPhd, setUserData] = useState({
  Course_file:"",
  Course_given_by:"",
  Course_name:"",
  Course_Code:"",
  Document_type:"",
  user_department:"",
  Course_file:""
 })
  let formSubmitter =  (e)=>{
    e.preventDefault()
    let formData = new FormData()
    formData.append("Course_file",dataOfPhd.Course_file)
    formData.append("Course_given_by",dataOfPhd.Course_given_by)
    formData.append("Course_name",dataOfPhd.Course_name)
    formData.append("Course_Code",dataOfPhd.Course_Code)
    formData.append("Document_type",dataOfPhd.Document_type)
    formData.append("user_department",dataOfPhd.user_department)
   
    let linkToSend = `http://localhost:6500/user/mtechUpload`
      axios({
      method:"POST",
      url : linkToSend,
      data:formData,
      headers: {"Content-Type": "multipart/form-data" }
    }).then((res)=>{
      setResponse(res.data)
    })
  }

  let handleChange = (e) => {
    switch (e.target.name) {
      case "Course_given_by":
        setUserData((pre) => {
          return { ...pre, Course_given_by: e.target.value };
        });
        break;
      case "Course_name":
        setUserData((pre) => {
          return { ...pre, Course_name: e.target.value };
        });
        break;
      case "Course_Code":
        setUserData((pre) => {
              return { ...pre, Course_Code: e.target.value };
        });
        break;
      case "Document_type":
        setUserData((pre) => {
          return { ...pre, Document_type: e.target.value };
        });
        break;
      case "user_department":
        setUserData((pre) => {
          return { ...pre,
            user_department: e.target.value };
        });
        break;
      case "Course_file":
        setUserData((pre) => {
          return { ...pre,
            Course_file: e.target.files[0]};
        });
        break;
      default:
        break;
    }
  };
useEffect(() => {
  window.scrollTo(0, 0);
}, [])

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
        <p className="p11">M-Tech Section File Uploading Portal</p>
        <form onSubmit={formSubmitter} encType="multipart/form-data">
          <div className="FLname d-flex">
          </div>
          <select required
            className="in11"
            onChange={handleChange}
            name="user_department"
            autoComplete="new-password"
            type="tel">
            <option value="not selected">Please select Your Department</option>
          <option value="Department of Earth Sciences">Department of Earth Sciences</option>
          <option value="Department of Civil Engineering">Department of Civil Engineering</option>
          <option value="Department of Computer Science and Engineering">Department of Computer Science and Engineering</option>
          <option value="Department of Design">Department of Design</option>
          <option value="Department of Applied Mathematics and Scientific Computing">Department of Applied Mathematics and Scientific Computing</option>
          <option value="Department of Chemistry">Department of Chemistry</option>
          <option value="Department of Architecture and Planning">Department of Architecture and Planning</option>
          <option value="Department of Biosciences and Bioengineering">Department of Biosciences and Bioengineering</option>
          <option value="Department of Chemical Engineering">Department of Chemical Engineering</option>
          <option value="Department of Electrical Engineering">Department of Electrical Engineering</option>
          <option value="Department of Humanities and Social Sciences">Department of Humanities and Social Sciences</option>
          <option value="Department of Hydro and Renewable Energy">Department of Hydro and Renewable Energy</option>
          <option value="Department of Hydrology">Department of Hydrology</option>
          <option value="Department of Management Studies">Department of Management Studies</option>
          <option value="Department of Mathematics">Department of Mathematics</option>
          <option value="Department of Mechanical and Industrial Engineering">Department of Mechanical and Industrial Engineering</option>
          <option value="Department of Metallurgical and Materials Engineering">Department of Metallurgical and Materials Engineering</option>
          <option value="Department of Paper Technology">Department of Paper Technology</option>
          <option value="Department of Physics">Department of Physics</option>
          <option value="Department of Polymer and Process Engineering">Department of Polymer and Process Engineering</option>
          <option value="Department of Water Resources Development and Management">Department of Water Resources Development and Management</option>
          <option value="Department of Earthquake Engineering">Department of Earthquake Engineering</option>
          <option value="Department of Electronics and Communication Engineering">Department of Electronics and Communication Engineering</option>
          </select>
          <select required
            className="in11"
            onChange={handleChange}
            name="Document_type"
            autoComplete="new-password"
            type="tel">
            <option value="not selected">Please Select document Type</option>
            <option value="Final exam">Final Exam</option>
            <option value="Mid Exam"> Mid Exam</option>
            <option value="Assignment">Assignment</option>
            <option value="Lecture Material">Lecture Material</option>
          </select>
          <input
          required
            className="in11"
            onChange={handleChange}
            name="Course_Code"
            autoComplete="new-password"
            type='text'
            placeholder="Please Pass Course Code.....eg:  CHEG-3080"
          />
          <input
          required
            className="in11 mt-4"
            onChange={handleChange}
            name="Course_name"
            autoComplete="new-password"
            type="text"
            placeholder="Please Pass Full Course Name"
          />
          <input
          required
            className="in11 mt-4"
            onChange={handleChange}
            name="Course_given_by"
            autoComplete="new-password"
            type="text"
            placeholder="Please Pass professor's Name.....eg: Dr.Prakash"
          />
          <div>
            <label className="label" htmlFor="fileUpload">
            Select Pdf File
            </label>
          <input
            id="fileUpload"
            required
            className="in11 mt-4"
            onChange={handleChange}
            name="Course_file"
            autoComplete="new-password"
            type="file"
            accept="application/pdf"
          />
          </div>
          <button className="btnSign">Upload</button>
        </form>
      </div>
    </div>
  </div>

     <div className='notePart p-4 m-5 col-md-4'>
         <h1 className='animate__animated animate__rubberBand animate__repeat-3 p-2 '>Please..</h1>
            <ul className='forUl'>
              <li>Fill all Input Fields </li>
              <li>Check course Name Before Upload</li>
              <li>Check course Code Before Upload</li>
              <li>Check  Professor's Name Before Upload</li>
              <li>Make sure your File Is In PDF Format</li>
              <ul>
                     <h5> Your Can Click On The Following Buttons For File Conversion</h5>
                     <Link to="https://www.ilovepdf.com/word_to_pdf">

                  <Button className='m-3'>Convert Word File To Pdf</Button>
                     </Link>
                     <Link to="https://tools.pdf24.org/en/images-to-pdf">

                  <Button className='m-3'>Convert Image File to Pdf</Button>
                     </Link>
                 </ul>
            </ul>
     </div>
    </div>
 
    
    </>
  )
}
 
}

export default MtechSecitonFileUpload