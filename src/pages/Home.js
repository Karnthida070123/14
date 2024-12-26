import React from 'react';

function Home() {
  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">
        WELCOME TO LANNA POLYTECHNIC CHIANGMAI TECHNOLOGICAL COLLEGE
      </h1>
      <img 
        src={"/image/4.jpg"} 
        alt="Lanna Polytechnic Chiangmai" 
        className="img-fluid rounded shadow mb-4"
        style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
      />
      <p className="lead fw-bold">"ความรู้ คู่คุณธรรม"</p>
    </div>
  );
}

export default Home;
