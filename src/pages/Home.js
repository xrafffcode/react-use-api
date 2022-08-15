import React, { useEffect, useState } from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { API_URL } from '../utils/constants'
import axios from 'axios';


export default function Home(props) {

    const [siswaData, setData] = useState([]);
    const [err, setErr] = useState(null);

    const fetchpairs = async () => {
        await axios
            .get(API_URL + 'api/siswa')
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                setErr(err.message);
            });
    };


    useEffect(() => {
        fetchpairs();
    }, []);

    return (
        <Container className='mt-3'>
            <Button variant="primary" className='float-end mb-3' as={Link} to='/tambahdata'>Tambah Data</Button>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Kelas</th>
                        <th>Jurusan</th>
                    </tr>
                </thead>
                <tbody>
                    {siswaData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.nama}</td>
                                <td>{item.kelas}</td>
                                <td>{item.jurusan}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}