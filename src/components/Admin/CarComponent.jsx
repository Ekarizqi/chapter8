import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardTitle } from 'reactstrap';
import {FiTrash2, FiClock, FiEdit, FiKey} from 'react-icons/fi';
import ModalImage from 'react-modal-image';

const CarComponent = ()  => {
    const products = useSelector((state)=> state.allProducts.products);
    const renderList = products.map ((product) => {

    return (
        <div>
            <div className="container">
                <div className="row-col ml-3 pt-4">
                    <div className="card-group">
                        <Card key={product.id} style={{width: "20rem", height:"580px"}}>
                            <ModalImage 
                                small={product.image}
                                large={product.image}
                             />
                            <div className="card-body">
                                <CardTitle tag="h5">
                                    {product.name} / {product.category}
                                </CardTitle>
                                <CardTitle tag="h4"> Rp{product.price}/ hari</CardTitle>
                                <p className='card-text'><FiKey/> {product.start_rent_at} - {product.finish_rent_at} </p>
                                <p className='card-text'> <FiClock/> {product.updatedAt} </p>

                                <a href="#" className="btn btn-outline-danger"><FiTrash2 />Delete</a>
                                <a href="#" className="btn btn-success" ><FiEdit />Edit</a>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
    });

    return <>{renderList}</>
}

export default CarComponent;