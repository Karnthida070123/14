const App = () => (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink to="/" className="nav-link" end>หน้าแรก</NavLink>
          <NavLink to="/about" className="nav-link">เกี่ยวกับเรา</NavLink>
          <NavLink to="/courses" className="nav-link">หลักสูตร</NavLink>
          <NavLink to="/contact" className="nav-link">ติดต่อเรา</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
  
  // Render the App
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);