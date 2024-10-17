import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import Nav_admin from './Nav_admin'

const ViewUser = () => {
  return (
    <div>
      <Nav_admin/>
      <h1>List of Applied Users</h1>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow>
          <TableCell>Sno</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Ph :</TableCell>
          <TableCell>Email Id</TableCell>
          <TableCell>Job</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
          <TableCell>1</TableCell>
          <TableCell>adhil</TableCell>
          <TableCell>856496464</TableCell>
          <TableCell>adyg@kkpk</TableCell>
          <TableCell>HR</TableCell>
          <TableCell><Button>Conform</Button></TableCell>
          <TableCell><Button>Reject</Button></TableCell>
          
          
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ViewUser