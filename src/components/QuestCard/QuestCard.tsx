import "./QuestCard.css";
import type { Quest } from "../../types/Quest";

type QuestCardProps = {
  quest: Quest;
  onToggleComplete?: (questId: number, completed: boolean) => void;
};

function formatQuestDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export default function QuestCard({ quest, onToggleComplete }: QuestCardProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggleComplete?.(quest.id, event.target.checked);
  };

  return (
    <article className="quest-card">
      <input
        type="checkbox"
        className="quest-checkbox"
        checked={quest.completed}
        onChange={handleChange}
        aria-label={`Mark "${quest.title}" as ${quest.completed ? "incomplete" : "complete"}`}
      />

      <div className="quest-content">
        <div className="quest-meta">
          <span className="priority">{quest.priority}</span>
          <span className="category">{quest.category}</span>
        </div>

        <h3>{quest.title}</h3>
      </div>

      <time dateTime={quest.date}>
        {formatQuestDate(quest.date)}
        {quest.time ? ` · ${quest.time}` : ""}
      </time>
    </article>
  );
}