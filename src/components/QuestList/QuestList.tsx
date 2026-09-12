import "./QuestList.css";
import QuestCard from "../QuestCard/QuestCard";
import type { Quest } from "../../types/Quest";

type QuestListProps = {
  quests: Quest[];
};

export default function QuestList({ quests }: QuestListProps) {
  return (
    <section className="quest-list">
      <h2>QUESTS ({quests.length})</h2>

      {quests.map((quest) => (
        <QuestCard key={quest.id} quest={quest} />
      ))}
    </section>
  );
}