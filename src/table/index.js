import React ,{useState,useEffect} from 'react'
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';

import MyTableHead from './myTableHead'
import MyTableBody from './myTableBody'
import FormSearch from './formSearch.js'

function MyTable({data, design}) {
   
    const [tableData , SetTableData ] = useState(data)
    const [keyword , setKeyWord] = useState("")
    const [field , setField] = useState("Name")
    const [row_per_pagination , setRowPagination] = useState(10)
    const [pagination , setPagination] = useState(1)

    useEffect(() => {
        console.log("pk")
        console.log(keyword)
        console.log(field)
        if(keyword !== ""){
            const actualfiled = design.header.find(v => v.newHeading === field);
            if(actualfiled && actualfiled.dataHeading ){
                const newData = data.filter(x => x[actualfiled.dataHeading].toString().toLowerCase().includes(keyword))
                SetTableData(newData)
            }
        }else{
            SetTableData(data)
        }
        
       
    }, [keyword,field, design.header,tableData,data])

    console.log(tableData)
    
    

    return (
        <div>
            <TableContainer component={Paper}>
                
                <FormSearch
                    keyword={keyword} 
                    setKeyWord={setKeyWord}
                    field={field} 
                    setField={setField}
                    arrange={design.header}
                />

                <Table style={{minWidth: 700}} aria-label="customized table">
                    
                    <MyTableHead 
                        header_design={design.Table_header ? design.Table_header : []}
                        arrange={design.header}
                    />

                    <MyTableBody
                        data={tableData}
                        arrange={design.header}
                        pagination={pagination} 
                        setPagination={setPagination} 
                        row_per_pagination={row_per_pagination}
                        setRowPagination={setRowPagination}

                    />
                    
                </Table>
            </TableContainer>

        </div>
    )
}

export default MyTable
