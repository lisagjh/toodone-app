import "./QuestList.css";
import QuestCard from "../QuestCard/QuestCard";
import type { Quest } from "../../types/Quest";

type QuestListProps = {
  quests: Quest[];
  onToggleComplete?: (questId: number, completed: boolean) => void;
};

export default function QuestList({ quests, onToggleComplete }: QuestListProps) {
  return (
    <section className="quest-list">
      <h2>QUESTS ({quests.length})</h2>

      {quests.map((quest) => (
        <QuestCard key={quest.id} quest={quest} onToggleComplete={onToggleComplete} />
      ))}
    </section>
  );
}