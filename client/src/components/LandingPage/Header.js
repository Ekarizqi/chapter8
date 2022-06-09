import React from 'react';
import car from "../../assets/car.png";
import {Container} from "react-bootstrap";
import {Link } from "react-router-dom";

function HeaderUser() {
    return (
        <Container style={{backgroundColor:"#F1F3FF"}}
            fluid>
            <div className="row">
                <div className="col-md-6">
                    <h1>Sewa & Rental Mobil Terbaik di kawasan Surabaya</h1>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <Link to={"/user"}>    
                        <div className="btn btn-success">
                            Mulai Sewa Mobil
                        </div>
                    </Link>
                </div>
                <div className='col-md-6'>
                    <img src={car} alt="car" />
                </div>
            </div>
        </Container>
    );
}

export default HeaderUser;     