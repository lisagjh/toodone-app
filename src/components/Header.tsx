type HeaderProps = {
    image: string;
    imageAlt: string;
  };
  
  function Header({ image, imageAlt }: HeaderProps) {
    return (
      <header className="quest-header">
        <div className="header-row">
          <h1>TOODONE</h1>
  
          <div className="meta-actions">
            <div className="streak-badge">
              <span className="streak-icon">🔥</span>
              <span className="streak-count">5 day streak</span>
            </div>
  
            <img
              src={image}
              alt={imageAlt}
              className="avatar"
              style={{ height: "24px", width: "24px" }}
            />
          </div>
        </div>
  
        <div className="date-row">
          <p className="date-info">
            Today is{" "}
            {new Date().toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </p>
  
          <p className="task-info">
            2 tasks left
            {/* TODO: make dynamic */}
          </p>
        </div>
      </header>
    );
  }
  
  export default Header;
  