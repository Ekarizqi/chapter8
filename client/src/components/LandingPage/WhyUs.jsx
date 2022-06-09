import React from 'react';
import {Card} from 'reactstrap'
import img_complete from "../../assets/icon_complete.png";
import jam from "../../assets/icon_24hrs.png";
import price from "../../assets/icon_price.png";
import prof from "../../assets/icon_professional.png";

function WhyUs() {
    return (
        <div className="container">
            <div className="">
                <h2>Why Us</h2>
                <p>Mengapa harus pilih Binar Car Rental?</p>
            </div>

            <div className="">
                <div className="container">
                    <div className="">
                        <div className="row justify-content-center">
                            <div className="col-md-3">
                                <Card style={{width:"15 rem",padding:"25px", margin:"10px"}}>
                                    <div className="card-body">
                                        <img src={img_complete} alt="icon-suka" />
                                    </div>
                                    <strong>Mobil lengkap</strong>
                                    <p className='card-text'>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card style={{width:"15 rem",padding:"25px", margin:"10px"}}>
                                    <div className="card-body">
                                        <img src={price} alt="price" />
                                    </div>
                                    <strong>Layanan 24 Jam</strong>
                                    <p className='card-text'>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card style={{width:"15 rem",padding:"25px", margin:"10px"}}>
                                    <div className="card-body">
                                        <img src={jam} alt="jam" />
                                    </div>
                                    <strong>Sopir Profesional</strong>
                                    <p className='card-text'>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                                </Card>
                            </div>
                            <div className="col-md-3">
                                <Card style={{width:"15 rem",padding:"25px", margin:"10px"}}>
                                    <div className="card-body">
                                        <img src={prof} alt="prof" />
                                    </div>
                                    <strong>Mobil lengkap</strong>
                                    <p className='card-text'>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyUs;