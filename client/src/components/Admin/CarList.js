import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Container, Row
} from 'reactstrap';
import {fetchProducts} from "../User/redux/actions/productActions";
import CarComponent from './CarComponent';

const CarList = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    console.log("Products: ", products);

    return (
        <div>
            <Container>
                <nav aria-label="breadcrumb">
                    <ol className='breadcrumb' style={{background: "#F4F5F7"}}>
                        <li className=" breadcrumb-item">
                            <a href="/car">Cars</a>
                        </li>
                        <li className='breadcrumb-item active' aria-current="page">
                            List Car
                        </li>
                    </ol>
                </nav>

                <div className="mt-4">
                    <p className='font-weight-bold' style={{fontSize:"20px", height: "42px"}}>List Car</p>
                    <a className="btn btn-primary" href='/add'>+ Add New Car</a>
                </div>

                <div className="ml-3">
                    <div className="btn btn-outline-primary mr-2">All</div>
                    <div className="btn text-sub-primary outline-sub-primary mr-2">Small</div>
                    <div className="btn text-sub-primary outline-sub-primary mr-2">Medium</div>
                    <div className="btn text-sub-primary outline-sub-primary mr-2">Large</div>
                </div>
                <Row>
                    <CarComponent />
                </Row>
            </Container>
        </div>
    );
};

export default CarList;