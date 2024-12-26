import React from 'react';

const courseImages = [
  { name: 'ช่างยน (AU)', src: '/image/au.png' },
  { name: 'ยานยนต์ไฟฟ้า (EV)', src: '/image/ev.png' },
  { name: 'ช่างไฟกำลัง (EP)', src: '/image/ep.png' },
  { name: 'ช่างอิเล็กทรอนิกส์ (EL)', src: '/image/el.png' },
  { name: 'ช่างก่อสร้าง (CO)', src: '/image/co.png' },
  { name: 'สถาปัตยกรรม (AR)', src: '/image/ar.png' },
  { name: 'เทคโนโลยีสารสนเทศ (IT)', src: '/image/it.png' },
  { name: 'การบัญชี (AC)', src: '/image/ac.png' },
  { name: 'การตลาด (MK)', src: '/image/mk.png' },
  { name: 'ธุรกิจดิจิทัล (DT)', src: '/image/dt.png' },
  { name: 'การท่องเที่ยว (TG)', src: '/image/tg.png' },
  { name: 'การโรงแรม (HM)', src: '/image/hm.png' },
];

const Courses = () => (
  <div className="container">
    <p>หลักสูตรที่เปิดสอน</p>
    <ul>
      <p>ปวช. และ ปวส.</p>
      {courseImages.map((course, index) => (
        <li key={index}>
          <img
            src={course.src}
            alt={course.name}
            style={{ width: '100px', height: '100px', marginRight: '10px' }}
          />
          {course.name}
        </li>
      ))}
    </ul>
    <p>หลักสูตรของเรามุ่งเน้นการพัฒนาทักษะทางด้านเทคโนโลยีและการปฏิบัติจริง</p>
  </div>
);

export default Courses;
