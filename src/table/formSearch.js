
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';





function FormSearch({keyword , setKeyWord,field , setField,arrange}) {
   
  
    
    
    // useEffect(() => {
    //     handleFilter(keyword,field)
    // }, [keyword,field, handleFilter])
    
    return (
        <div style={{ display: 'flex',flexWrap: 'wrap',margin:25, alignItem: 'center' , justifyContent: 'flex-end'}}>
            <TextField 
                label="Search"                 
                variant="outlined"  
                size="small"
                style={{width:300}}
                onChange={event => setKeyWord(event.target.value) }
            />
            <FormControl variant="outlined" size="small" style={{minWidth: 150, marginLeft:10}}>
                <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                <Select
                    native
                    value={field}
                    label="Age"
                    onChange={event => setField(event.target.value) }
                >
                    <option value={"all"}>ALL</option>
                    {arrange.map( (v,i) =>{
                        return(
                            <option key={i} value={v.newHeading}> {v.newHeading} </option>
                        )
                        
                    })}
                </Select>
            </FormControl>
     
        </div>
    )
}

export default FormSearch
