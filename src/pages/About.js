import React from 'react';

function About() {
  const images = [
    '/image/6.jpg', 
    '/image/7.jpg', 
    '/image/8.jpg' // Add paths to your additional images here
  ];

  return (
    <div className="container text-center my-5">
      <h1>About Us</h1>
      <p>
        วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เป็นหนึ่งในสถาบันการศึกษาในประเทศไทยที่มุ่งเน้นการเรียนการสอนด้านอาชีวศึกษา 
        โดยเฉพาะในสายงานที่เกี่ยวข้องกับเทคโนโลยีและอุตสาหกรรม 
        ซึ่งวิทยาลัยแห่งนี้มุ่งพัฒนานักศึกษาให้มีทั้งความรู้ ความสามารถ และคุณธรรมควบคู่กัน 
        เพื่อให้สามารถแข่งขันในตลาดแรงงานที่เปลี่ยนแปลงอยู่ตลอดเวลาได้อย่างมั่นใจ
      </p>
      <h2 className="my-4">เป้าหมายของวิทยาลัย</h2>
      <p>
        พัฒนานักศึกษาให้มี <strong>ความรู้ คู่คุณธรรม</strong><br />
        ส่งเสริมการเรียนรู้เพื่อรองรับ <strong>ยุคดิจิทัล</strong> และความก้าวหน้าทางเทคโนโลยี<br />
        เป็นผู้นำในการพัฒนากำลังคนที่มีคุณภาพเพื่อ <strong>เศรษฐกิจของประเทศ</strong>
      </p>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <img 
              src={image} 
              alt={`Lanna Polytechnic Image ${index + 1}`} 
              className="img-fluid rounded shadow"
              style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
