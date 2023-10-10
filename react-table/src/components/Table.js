import {Table} from 'react-bootstrap';
const TableComponent = ({users}) => {

  const displayTableObjectData = (data) =>{
    return (
      <Table className='table table-bordered'>
        <tbody className='d-flex  flex-row'>
          {Object.keys(data).map((key, index) => {
            return (
              <tr className='d-flex flex-column text-center' key={index}>
                   <td className='border-1'>{key}</td>
                   <td className='border-1'>
                  {typeof data[key] === 'object' ? displayTableObjectData(data[key]) : data[key]}
                </td>
              </tr>
              );
          })}
        </tbody>
      </Table> 
    );
  };


    return (
    <div className='container overflow-x-scroll overflow-y-scroll'>
      <h4 className="text-center">User Details</h4>
    <Table striped bordered hover>
      <thead>
        <tr className='border-1'>
            {Object.keys(users[0]).map((header)=>{
                return <th className='border-1' key={header}>{header.toUpperCase()}</th>
            })}
        </tr>
      </thead>
      <tbody>
          {users.map((user, i)=>{
              return (
                <tr key={user.id}>
                  {Object.values(users[i]).map((value)=>{
                    return (
                      <td key={value}>
                        {typeof value === 'object' ? displayTableObjectData(value) : value}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
      </tbody>
    </Table>
    </div>
  )
}

export default TableComponent;