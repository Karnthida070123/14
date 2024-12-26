import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white text-center">
                            <h2>โปรไฟล์</h2>
                        </div>
                        <div className="card-body text-center">
                            <img 
                                src="https://scontent.fcnx1-1.fna.fbcdn.net/v/t39.30808-6/351484798_985781775927683_1612092628827697675_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ghYfBVzycRwQ7kNvgE1_fPw&_nc_zt=23&_nc_ht=scontent.fcnx1-1.fna&_nc_gid=AkmjNkStBeQO-Ney5aEqDXg&oh=00_AYCakBRaO5ov5cvTBvf3EAsSbJETTfR2mV6Y_seixU-jSg&oe=674DA252" 
                                alt="Profile" 
                                className="rounded-circle mb-3" 
                                width={100}
                                height={100}
                            />
                            <h3 className="mb-3">นางสาวกานต์ธิดา จ่าดวงใจ</h3>
                            <p><strong>รหัสนักศึกษา:</strong> IT.4501</p>
                            <p><strong>อายุ:</strong> 20 ปี</p>
                            <p><strong>สาขาวิชา:</strong> เทคโนโลยีสารสนเทศ</p>
                            <p><strong>วิทยาลัย:</strong> วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
