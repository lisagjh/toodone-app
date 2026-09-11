import QuestCard from "./QuestCard/QuestCard";

function QuestList({ quests }) {
  return (
    <section>
      <h2>QUESTS ({quests.length})</h2>

      {quests.map((quest) => (
        <QuestCard
          key={quest.id}
          quest={quest}
        />
      ))}
    </section>
  );
}

export default QuestList;