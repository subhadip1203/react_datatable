import React from 'react'
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';



function MyTableHead({header_design,arrange}) {


    const header_style= {
        backgroundColor: header_design.background ? header_design.background  : '#676464',
        color: header_design.textColor ? header_design.textColor  : "#d87474"
    }

    
    return (
        <TableHead>
            <TableRow>
                {arrange.map((value, i) => (
                    <TableCell key={i} style={header_style} > {value.newHeading} </TableCell>
                ))}
            </TableRow>
            
        </TableHead>
    )
}

export default MyTableHead
