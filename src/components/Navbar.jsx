
import React, { useState } from 'react';

function Navbar() {
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'About', id: 'about' },
    { label: 'Events', id: 'events' },
    { label: 'Qualifications', id: 'qualifications' },
    { label: 'Contact', id: 'contact' },
  ];
  const [active, setActive] = useState('Home');

  // Smooth scroll to section
  const handleNavClick = (id, label) => {
    setActive(label);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg mt-4">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-center">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  className={`nav-link${active === item.label ? ' active' : ''}`}
                  href={`#${item.id}`}
                  aria-current={active === item.label ? 'page' : undefined}
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(item.id, item.label);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;