import React from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { API_URL } from '../utils/constants'
import axios from 'axios';


export default function TambahData() {
    return (
        <Container className='mt-3'>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" placeholder="Masukan Nama" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Kelas</Form.Label>
                    <Form.Control type="text" placeholder="Masukan Kelas" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}