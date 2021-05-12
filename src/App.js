import React from 'react';
import MyTable from './table'

import myData from './MOCK_DATA.json';

function App() {

  const tableStyle={
    Table_header: {
      background : '#616060',
      textColor: '#ffffff'
    },
    header:[
      {
        newHeading:"Name",
        dataHeading:"name"
      },
      {
        newHeading:"Gender",
        dataHeading:"gender"
      },
      {
        newHeading:"Email",
        dataHeading:"iop"
      },
      
    ]
    
  }
  return (
    <div className="App" style={{backgroundColor:"#f5f5f5",margin:'50px'}}>
      <MyTable design={tableStyle} data={myData}/>
    </div>
  );
}

export default App;


