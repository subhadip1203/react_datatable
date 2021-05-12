import React from'react'
import TableBody from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const reduce_Data_for_Pagination= (data,start , pagination)=> {
    const arry_index = data.length -1;
    let loop_start = (pagination-1)*10
    let loop_ends = (loop_start+pagination) < arry_index ? (loop_start+pagination) : arry_index
    const new_arry =[]
    for (let i=loop_start ; i<=loop_ends ;i++ ) {
        new_arry.push(data[i])
    }
}

function MyTableHead({data,arrange,pagination,row_per_pagination }) {

    
    const body_style= {
        fontSize: 14,
    }

    
    return (
        <TableBody>
           
                {data.map( (value,i) =>{
                    return(
                        <TableRow key={i+'row'}> 
                            { arrange.map( (arng ,idx) =>{
                                return(
                                    <TableCell key={idx} style={body_style} >{ value[arng.dataHeading] ? value[arng.dataHeading] :'-' }</TableCell>
                                )
                                
                            })}
                            
                        </TableRow>
                    )
                    
                })}
            
                {/* <TableCell style={body_style} >abcd</TableCell>
                <TableCell style={body_style} align="right">efgh</TableCell>
                <TableCell style={body_style} align="right">ijkl</TableCell>
                <TableCell style={body_style} align="right">mnop</TableCell>
                <TableCell style={body_style} align="right">qrs&nbsp;(t)</TableCell> */}
            
        </TableBody>
    )
}

export default MyTableHead
