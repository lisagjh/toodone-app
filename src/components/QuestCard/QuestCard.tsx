import "./QuestCard.css";

function QuestCard({ quest }) {
  return (
    <article className="quest-card">
      <button className="quest-checkbox">
        {quest.completed && "✓"}
      </button>

      <div className="quest-content">
        <div className="quest-meta">
          <span className="priority">{quest.priority}</span>
          <span className="category">{quest.category}</span>
        </div>

        <h3>{quest.title}</h3>
      </div>

      {quest.time && (
        <time>◷ {quest.time}</time>
      )}
    </article>
  );
}

export default QuestCard;