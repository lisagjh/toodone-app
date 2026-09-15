import { useState } from "react";

import "./NewQuestBar.css";
import {
  QUEST_CATEGORIES,
  QUEST_PRIORITIES,
  type NewQuest,
  type QuestCategory,
  type QuestPriority,
} from "../../types/Quest";

type NewQuestBarProps = {
  onAdd: (quest: NewQuest) => void;
};

function todayISO() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatTime(value: string): string | null {
  if (!value) return null;

  const [hourString, minute] = value.split(":");
  const hour = Number(hourString);
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;

  return `${hour12}:${minute} ${period}`;
}

export default function NewQuestBar({ onAdd }: NewQuestBarProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<QuestCategory>("PERSONAL");
  const [priority, setPriority] = useState<QuestPriority>("CHILL");
  const [date, setDate] = useState(todayISO);
  const [time, setTime] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextTitle = title.trim();
    if (!nextTitle || !date) return;

    onAdd({
      title: nextTitle,
      category,
      priority,
      date,
      time: formatTime(time),
    });

    setTitle("");
    setCategory("PERSONAL");
    setPriority("CHILL");
    setDate(todayISO());
    setTime("");
  };

  return (
    <form className="new-quest-bar" onSubmit={handleSubmit}>
      <div className="new-quest-bar-row">
        <label className="title-field" htmlFor="new-quest-input">
          <span className="field-label">Quest</span>
          <input
            id="new-quest-input"
            type="text"
            placeholder="Add a new quest"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <button type="submit">Add</button>
      </div>

      <div className="new-quest-bar-row">
        <label htmlFor="new-quest-category">
          <span className="field-label">Category</span>
          <select
            id="new-quest-category"
            value={category}
            onChange={(event) => setCategory(event.target.value as QuestCategory)}
          >
            {QUEST_CATEGORIES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="new-quest-priority">
          <span className="field-label">Priority</span>
          <select
            id="new-quest-priority"
            value={priority}
            onChange={(event) => setPriority(event.target.value as QuestPriority)}
          >
            {QUEST_PRIORITIES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="new-quest-date">
          <span className="field-label">Date</span>
          <input
            id="new-quest-date"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </label>

        <label htmlFor="new-quest-time">
          <span className="field-label">Time</span>
          <input
            id="new-quest-time"
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </label>
      </div>
    </form>
  );
}
