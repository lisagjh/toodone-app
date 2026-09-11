import { quests } from "../data/quests";
import QuestList from "../components/QuestList";

function Today() {
  return (
    <main>
      <h1>TOODONE</h1>

      <QuestList quests={quests} />
    </main>
  );
}

export default Today;