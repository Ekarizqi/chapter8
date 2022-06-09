import React from 'react';

function CtaBanner() {
    return (
        <div>
            <div className="container">
                <div className="card text-center">
                    <div className="card-body">
                        <div className="card-title">Sewa Mobil di (Lokasimu) Sekarang
                        </div>
                        <div className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                        <Link to={"/user"}>    
                            <div className="btn btn-success">
                                Mulai Sewa Mobil
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CtaBanner;