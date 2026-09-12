import { useState } from "react";

import { quests } from "../data/quests";
import QuestList from "../components/QuestList";
import Header from "../components/Header";
import ProgressCard from "../components/ProgressCard/ProgressCard";
import Filters from "../components/Filters/Filters";

import ProfilePic from "../assets/profile.jpg";

function Today() {
  const [filter, setFilter] = useState<"ALL" | "ACTIVE" | "COMPLETED">("ALL");

  const filteredQuests = quests.filter((quest) => {
    if (filter === "ALL") return true;
    if (filter === "ACTIVE") return !quest.completed;
    if (filter === "COMPLETED") return quest.completed;
  })

  return (
    <main>
      <Header image={ProfilePic} imageAlt="icon of person outline" />
      <ProgressCard />
      <Filters
        filter={filter}
        setFilter={setFilter}
        counts={{
          all: quests.length,
          active: quests.filter(q => !q.completed).length,
          completed: quests.filter(q => q.completed).length
        }}
      />
      <QuestList quests={filteredQuests} />
    </main>
  );
}

export default Today;
