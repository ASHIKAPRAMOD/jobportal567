import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import Nav_admin from './Nav_admin'

const Admindashboard = () => {
  return (
    <div>
      <Nav_admin/>

    <h1>List of Jobs</h1>  
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow>
          <TableCell>Sno</TableCell>
          <TableCell>Job Title</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Requirement</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>salary</TableCell>
          <TableCell>Job Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
          <TableCell>1</TableCell>
          <TableCell>HR</TableCell>
          <TableCell>dtfygkujgkugku</TableCell>
          <TableCell>Mca</TableCell>
          <TableCell>Calicut</TableCell>
          <TableCell>20000</TableCell>
          <TableCell>Full Time</TableCell>
          <TableCell><Button>Add</Button></TableCell>
          <TableCell><Button>Update</Button></TableCell>
          <TableCell><Button>Delete</Button></TableCell>
          
          
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Admindashboard
