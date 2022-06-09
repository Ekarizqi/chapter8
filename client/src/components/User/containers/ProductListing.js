import React, {useEffect} from "react";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
    Container, Row
} from 'reactstrap';
import {fetchProducts} from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    /* const fetchProducts = async () => {
        const response = await axios
        .get('https://rent-cars-api.herokuapp.com/customer/car')
        .catch((err) => {
            console.log("Err", err);
        });
        dispatch(setProducts(response.data));
    }; */

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    console.log("Products: ", products);
    return (
        <div>
            {/* <Banner /> */}
            <Container style={{marginTop:"60px", padding:"10px"}}>
            <Row xs="3">
                <ProductComponent/>
            </Row>
            </Container>
        </div>
    );
};

export default ProductListing;
