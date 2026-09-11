import "./ProgressCard.css";


function ProgressCard() {
  return (
    <div className="progress-card">
        <div className="progress-circle-container">
            <div className="circle"></div>
        </div>
        <div className="progress-text">
            <h2>You're crushing it!</h2>
            <p>4 of 6 daily quests done. Knock out 1 more to secure today's perfect streak!</p>
        </div>
    </div>
  );
}

export default ProgressCard;
