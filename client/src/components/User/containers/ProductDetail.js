import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {
    Row,Col, Card, CardBody, CardTitle, CardSubtitle,CardText, Button, Container
} from 'reactstrap'
import {
    fetchProductDetail, removeSelectedProducts,
} from "../redux/actions/productActions";
import {FiUsers, FiSettings} from 'react-icons/fi';
import {AiOutlineCalendar} from 'react-icons/ai';
import ModalImage from 'react-modal-image';



const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log(productId);

    /* const fetchProductDetail = async () => {
        const response = await axios
        .get(`https://rent-cars-api.herokuapp.com/customer/car/${productId}`)
        .catch((err) => {
            console.log("Err", err);
        });
        dispatch(selectedProducts(response.data));
    };
 */
    useEffect(() =>{
        if (productId && productId !== "") dispatch(fetchProductDetail(productId));
        return () => {
            dispatch(removeSelectedProducts());
        }
    }, []);

    return (
        <div >
            {/* <Banner /> */}
            {Object.keys(product).length === 0 ? (
                <div>...Loading</div>
            ): (
                <Container style={{marginTop:"70px", padding:"10px"}}><Row>
                    <Col>
                        <Card style={{
                            marginRight:"20px",
                            width:"605px",
                            height:"618px"
                        }}>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Tentang Paket
                                </CardTitle>
                                <CardSubtitle tag="h6">
                                    Include
                                </CardSubtitle>
                                <CardText>
                                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                    <li>Sudah termasuk bensin selama 12 jam</li> 
                                    <li>Sudah termasuk Tiket Wisata</li> 
                                    <li> Sudah termasuk pajak</li> 
                                </CardText>
                                <CardSubtitle tag="h6">
                                    Exclude
                                </CardSubtitle>
                                <CardText>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li> 
                                    <li>Tidak termasuk akomodasi penginapan</li> 
                                </CardText>
                                <CardTitle tag="h5">
                                    Refund, Reschedule, Overtime
                                </CardTitle>
                                <CardText>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li> 
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li> 
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li> 
                                    <li>Tidak termasuk akomodasi penginapan</li> 
                                </CardText>
                                <Button color="success"
                                    href="#">
                                    Lanjutkan Pembayaran
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card key={product.id} 
                        style={{
                        width:"405px",
                        height:"435px"}}>
                            <CardBody>
                            {/* <CardImg
                                alt="Card image cap"
                                src={product.image}
                                top
                                width="270px"
                                height="200px"
                            /> */}
                            <ModalImage 
                                small={product.image}
                                large={product.image}
                             />
                            <CardTitle tag="h6" style={{marginTop:"15px"}}>
                                {product.name} / {product.category}
                            </CardTitle>
                            <Row style={{paddingBottom:"10px", marginBottom:"30px"}}>
                                    <CardText style={{fontSize:"12px"}}>
                                        <FiUsers/> 4 Orang
                                        <FiSettings/> Manual
                                        <AiOutlineCalendar/> Tahun 2020
                                    </CardText>
                            </Row>
                            <CardTitle style={{fontSize:"14px", fontWeight:"bold"}}>
                                <Row> 
                                    <Col>Total</Col>
                                    <Col>Rp{product.price}/ hari </Col>
                                </Row>
                            </CardTitle>
                                <Button block color="success">
                                    Lanjutkan pembayaran
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                 </Row></Container>
            )}
        </div>
    );
};

export default ProductDetail;