import React from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { API_URL } from '../utils/constants'
import axios from 'axios';


export default function TambahData() {

    const [data, setData] = React.useState({
        nama: '',
        kelas: '',
        jurusan: ''
    })

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post(API_URL + 'api/siswa', data)
            .then(res => {
                console.log(res)
                alert('Data berhasil ditambahkan');
                window.location.href = '/';
            }).catch(err => {
                console.log(err)
            }
            )
    }

    return (
        <Container className='mt-3'>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" placeholder="Masukan Nama" name="nama" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Kelas</Form.Label>
                    <Form.Control type="text" placeholder="Masukan Kelas" name="kelas" onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Jurusan</Form.Label>
                    <Form.Control type="text" placeholder="Masukan Jurusan" name="jurusan" onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}