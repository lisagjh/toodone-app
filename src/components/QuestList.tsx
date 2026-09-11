import QuestCard from "./QuestCard/QuestCard";
import type { Quest } from "../types/Quest";

type QuestListProps = {
  quests: Quest[];
};

function QuestList({ quests }: QuestListProps) {
  return (
    <section>
      <h2>QUESTS ({quests.length})</h2>

      {quests.map((quest) => (
        <QuestCard key={quest.id} quest={quest} />
      ))}
    </section>
  );
}

export default QuestList;
