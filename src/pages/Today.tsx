import { quests } from "../data/quests";
import QuestList from "../components/QuestList";
import Header from "../components/Header";
import ProfilePic from "../assets/profile.jpg";

function Today() {
  return (
    <main>
      <Header props={{ image: ProfilePic, imageAlt: "icon of person outline"}} />
      <QuestList quests={quests} />
    </main>
  );
}

export default Today;