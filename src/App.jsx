import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>DevFlow</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main className="hero" id="home">
        <div className="hero-content">
          <p className="tag">CI/CD DEMO PROJECT</p>

          <h1>
            Build. Test. with CI/CD
            <br />
            <span>Deploy.</span>
          </h1>

          <p className="description">
            A simple React frontend created to demonstrate a Continuous
            Integration workflow using GitHub and modern DevOps tools.
          </p>

          <div className="buttons">
            <button>Get Started</button>
            <button className="secondary">Learn More</button>
          </div>
        </div>

        <div className="status-card">
          <div className="status-header">
            <span>CI Pipeline</span>
            <span className="success">● Passing</span>
          </div>

          <div className="pipeline">
            <div className="step completed">
              <span>✓</span>
              <div>
                <strong>Code Push</strong>
                <small>GitHub</small>
              </div>
            </div>

            <div className="line"></div>

            <div className="step completed">
              <span>✓</span>
              <div>
                <strong>Build</strong>
                <small>React + Vite</small>
              </div>
            </div>

            <div className="line"></div>

            <div className="step completed">
              <span>✓</span>
              <div>
                <strong>Test</strong>
                <small>Automated</small>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="features" id="about">
        <div className="feature">
          <div className="icon">⚡</div>
          <h3>Fast Build</h3>
          <p>Optimized React application with a simple build process.</p>
        </div>

        <div className="feature">
          <div className="icon">🔄</div>
          <h3>Continuous Integration</h3>
          <p>Automatically build and test every code change.</p>
        </div>

        <div className="feature">
          <div className="icon">🚀</div>
          <h3>Ready to Deploy</h3>
          <p>Production-ready build that can be deployed anywhere.</p>
        </div>
      </section>

      <footer id="contact">
        <p>© 2026 DevFlow • React CI/CD Demo</p>
      </footer>
    </div>
  );
}

export default App;