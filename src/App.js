import React, { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    return stored === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Demo App</h1>
      <div className="space-x-2">
        <label htmlFor="dark-toggle">Dark mode</label>
        <input
          id="dark-toggle"
          type="checkbox"
          checked={darkMode}
          onChange={(e) => setDarkMode(e.target.checked)}
        />
      </div>
    </div>
  );
}
