import './StudentInfo.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {styled} from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function StudentInfo() {
    
  const [studentInfo, setStudentInfo] = useState([]);
  const [searchApiData, setsearchApiData] = useState([])
  const [filterVal, setfilterVal] = useState('')
  let urlForStaff = "http://localhost:6500/user/getStudentInfo";

  const dataFromStaffes = async () => {
    try {
      const responceForStudentInfo = await axios.get(urlForStaff);

      let converted = JSON.parse(JSON.stringify(responceForStudentInfo.data));

      setStudentInfo(()=>converted.data);
      setsearchApiData(()=>converted.data)

    } catch (err) {
      // console.log({ "its error": err });
    }
  };
  
  useEffect(()=>{
    dataFromStaffes()
    window.scrollTo(0, 0);
    },[])

// * Table section from material UI
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  //  *end of material UI table 
  const handleFilter =(e)=>{
    if(e.target.value==""){
      setStudentInfo(searchApiData)
    }else{
     const filterResult = searchApiData.filter(item => item.user_Department.toLowerCase().includes(e.target.value.toLowerCase()))
     setStudentInfo(filterResult)
    }
    setfilterVal(e.target.value)
  }
  return (
    <div className="toShowStaffForward vh-100">
    {/* ------------------------------------------------------- */}
    <TableContainer className="toShowStaffForward m-2" component={Paper}>
          <h1 className="TitleFromStaff">Student Information</h1>
          <div>
          <input id='searchPhd' placeholder='Search using Department Name' value={filterVal} onInput={(e)=>handleFilter(e)}></input>
        </div>
          <Table  sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead className="background">
              <TableRow className="background">
                <StyledTableCell className="border" align="center">Student First Name</StyledTableCell>
                <StyledTableCell align="center">Student Last Name</StyledTableCell>
                <StyledTableCell className="border" align="center">Student Email</StyledTableCell>
                <StyledTableCell className="border" align="center">Student Whatsapp Number</StyledTableCell>
                <StyledTableCell className="border" align="center"> Student Indian Number</StyledTableCell>

                <StyledTableCell className="border" align="center"> Student Department</StyledTableCell>

                <StyledTableCell className="border" align="center">Student Study Section</StyledTableCell>

                <StyledTableCell className="border" align="center">Student Account Status</StyledTableCell>
              </TableRow>
            </TableHead>
            {studentInfo.map((data,j) => {
          let staffDataDisplay = (
            <TableBody className="" key={j}>
                <StyledTableRow >
                  <StyledTableCell className="border" align="center">{data.user_first_name}</StyledTableCell>
                  <StyledTableCell align="center">{data.user_last_name}</StyledTableCell>
                  <StyledTableCell className="border" align="center">{data.user_email_forProfile}</StyledTableCell>
                  <StyledTableCell  align="center">{data.user_whatsapp_number}</StyledTableCell>
                  <StyledTableCell className="border"  align="center">{data.user_Indian_number}</StyledTableCell>
                  <StyledTableCell className="border"  align="center">{data.user_Department}</StyledTableCell>
                  <StyledTableCell   align="center">{data.user_study_section}</StyledTableCell>
                  <StyledTableCell   align="center">{data.user_status}</StyledTableCell>
                </StyledTableRow>
            </TableBody>
          )
          return staffDataDisplay;
        })}
          </Table>
        </TableContainer>
        </div>
 
  )
}

export default StudentInfo