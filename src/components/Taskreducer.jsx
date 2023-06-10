import { useReducer } from "react"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function Tr() {
    
}

const Taskreducer = () => {

    const [dd, setdd] = useReducer(false)

    return (
        <Table striped bordered hover className="mt-5">

            <thead>
                <tr>
                    <th>Check</th>
                    <th>Kegiatan</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>
                        <input type="checkbox" style={{width:"20px", height:"20px"}}></input>
                    </td>
                    <td className="d-flex justify-content-between align-items-center">
                        Mark
                        {" "}<Button variant="warning">Edit</Button>
                    </td>

                    <td>
                        <Button variant="danger">Hapus</Button>
                    </td>
                </tr>
            </tbody>

        </Table>
    )
}

export default Taskreducer