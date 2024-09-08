"use client"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import document from '../asset/Group 9261.svg';
import Image from 'next/image';
import styled from 'styled-components';



const StyledTable = styled(Table)`
  @media (max-width: 600px) {
    & thead {
      display: none;
    }
    & tbody, & tr, & td {
      display: block;
      width: 100%;
    }
    & tr {
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
    }
    & td {
      text-align: right;
      padding-left: 50%;
      position: relative;
    }
    & td::before {
      content: attr(data-label);
      position: absolute;
      left: 0;
      width: 45%;
      padding-left: 10px;
      font-weight: bold;
    }
  }
`;

const StyledTableContainer = styled(TableContainer)`
  border: 2px solid #ddd; 
  border-radius: 10px; 
  overflow: hidden; 
`;

const Wrapper = styled.div`
  padding: 20px;  
`;



function createData(name, type, data, document) {
    return { name, type, data, document };
}


const rows = [
    createData('Aug 5, 2024', 'Knitting', 700, <>
        <Image
            src={document}
            alt="Ai img"
        />
    </>),
    createData('Aug 5, 2024', 'Knitting', 700, <>
        <Image
            src={document}
            alt="Ai img"
        />
    </>),
    createData('Aug 5, 2024', 'Knitting', 700, <>
        <Image
            src={document}
            alt="Ai img"
        />
    </>),
    createData('Aug 5, 2024', 'Knitting', 700, <>
        <Image
            src={document}
            alt="Ai img"
        />
    </>),
];


export default function TaskTable() {
    return (
        <Wrapper className='bg-white'>
            <div className='mb-4'>
                <h2 className="text-2xl font-semibold py-6">
                    <KeyboardArrowDownIcon /> Products
                </h2>
            </div>
            <StyledTableContainer component={Paper}>
                <StyledTable>
                    <Table >
                        <TableHead>
                            <TableRow >
                                <TableCell>Data</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>QTY(g)</TableCell>
                                <TableCell>Document</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell>{row.type}</TableCell>
                                    <TableCell>{row.data}</TableCell>
                                    <TableCell>{row.document}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </StyledTable>

            </StyledTableContainer>
        </Wrapper>
    );
}
