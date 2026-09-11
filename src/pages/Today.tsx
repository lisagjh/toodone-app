import { quests } from "../data/quests";
import QuestList from "../components/QuestList";
import Header from "../components/Header";
import ProgressCard from "../components/ProgressCard/ProgressCard";
import Filters from "../components/Filters/Filters";

import ProfilePic from "../assets/profile.jpg";

function Today() {
  return (
    <main>
      <Header image={ProfilePic} imageAlt="icon of person outline" />
      <ProgressCard />
      <Filters />
      {/* <QuestList quests={quests} /> */}
    </main>
  );
}

export default Today;
