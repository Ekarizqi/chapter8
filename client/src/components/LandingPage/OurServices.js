import React from 'react';
import service from "../../assets/img_service.png"
import ceklist from "../../assets/Group 53.png"

function OurServices() {
    return (
        <div className='container' id='OurServices'>
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <div className='img-service'>
                        <img src={service} alt='img_service' />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className=''>
                        <h2>Best Car Rental for any kind of trip in Surabaya!</h2>
                        <br />
                        <p>Sewa mobil di Surabaya bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <div>
                            <div className=''>
                                <img src={ceklist}  alt="ceklist"/>
                                &emsp;Sewa Mobil Lepas Kunci di Bali 24 Jam
                            </div>
                            <div className=''>
                                <img src={ceklist}  alt="ceklist"/>
                                &emsp;Sewa Mobil Jangka Panjang Bulanan
                            </div>
                            <div className=''>
                                <img src={ceklist}  alt="ceklist"/>
                                &emsp;Gratis Antar - Jemput Mobil di Bandara
                            </div>
                            <div className=''>
                                <img src={ceklist}  alt="ceklist"/>
                                &emsp;Layanan Airport Transfer / Drop In Out
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;