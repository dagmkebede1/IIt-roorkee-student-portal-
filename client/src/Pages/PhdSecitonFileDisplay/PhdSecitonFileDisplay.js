import React, { useEffect, useState } from 'react'
import './PhdSecitonFileDisplay.css'
import axios from 'axios'
import {styled} from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function PhdSecitonFileDisplay() {
 const [phd, setPhd] = useState([])
 const [searchApiData, setsearchApiData] = useState([])
 const [filterVal, setfilterVal] = useState('')
  const dataFromBtech = async () => {
    let urlForPhd = "http://localhost:6500/user/getPhdDoc"
    try {
      const getPhdResource = await axios.get(urlForPhd);

      let converted = JSON.parse(JSON.stringify(getPhdResource.data.data));

      setPhd(()=>converted);
      setsearchApiData(()=>converted)
    } catch (err) {
      // console.log({ "its error": err });
    }
  };

  useEffect(()=>{
    dataFromBtech()
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

    const handleFilter =(e)=>{
        if(e.target.value==""){
          setPhd(searchApiData)
        }else{
         const filterResult = searchApiData.filter(item => item.Course_Code.toLowerCase().includes(e.target.value.toLowerCase()))
         setPhd(filterResult)
        }
        setfilterVal(e.target.value)
    }

  return (
      <div className="toShowStaffForward vh-100">

    {/* ------------------------------------------------------- */}
    <TableContainer className="toShowStaffForward m-2" component={Paper}>
          <h1 className="TitleFromStaff">PhD Resources</h1>
          <div>
          <input id='searchPhd' placeholder='Search using course Code' value={filterVal} onInput={(e)=>handleFilter(e)}></input>
        </div>
          <Table  sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead className="background">
              <TableRow className="background">
                <StyledTableCell className="border" align="center">Department</StyledTableCell>
                <StyledTableCell align="center">Course Name</StyledTableCell>
                <StyledTableCell className="border" align="center">Course Given By</StyledTableCell>
                <StyledTableCell className="border" align="center">Course Code</StyledTableCell>
                <StyledTableCell className="border" align="center">Document Type</StyledTableCell>
                <StyledTableCell className="border" align="center">Date Of Upload</StyledTableCell>
                <StyledTableCell className="border" align="center">Document</StyledTableCell>
              </TableRow>
            </TableHead>
            {phd.map((data,j) => {
                //  console.log(data)
          let staffDataDisplay = (
            <TableBody className="" key={j}>
                <StyledTableRow >
                  <StyledTableCell className="border" align="center">{data.Department}</StyledTableCell>
                  <StyledTableCell align="center">{data.Course_name}</StyledTableCell>
                  <StyledTableCell className="border" align="center">{data.Course_given_by}</StyledTableCell>
                  <StyledTableCell  align="center">{data.Course_Code}</StyledTableCell>
                  <StyledTableCell className="border"  align="center">{data.Document_type}</StyledTableCell>
                  <StyledTableCell className="border"  align="center">{data.Date_of_file_upload}</StyledTableCell>
                  <StyledTableCell   align="center">
                   {/* <a href={`/download?filename=${data.Document_path}`} download={data.Document} target='_self'>{data.Document}</a> */}
                   <a href={`http://localhost:6500/${data.Document}`}  target='_self'>{data.Document}</a>
                   {/* <a href={`download/${data.Document_path}`}  target='_self'>{data.Document}</a> */}
                   {/* <embed src={`http://localhost:6500/${data.Document_path}`} type="application/pdf" width="100%" height="600px" /> */}
              </StyledTableCell>
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

export default PhdSecitonFileDisplay



