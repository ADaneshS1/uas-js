import Button from 'react-bootstrap/Button';
import Taskreducer from './Taskreducer';

const Todo = () => {
    return (

        <div className="container">

            <div className="pt-5">
                <h1>Jadwal Kegiatan Harian</h1>

                <div className="d-flex justify-content-evenly mt-4">
                    <input style={{width:"65%", padding:"4px 7px"}} type="text" placeholder="Tambahkan Kegiatan Anda"></input>
                    <Button>Tambah Kegiatan</Button>
                </div>
            </div>

            <Taskreducer/>

        </div>
        
    )
}

export default Todo