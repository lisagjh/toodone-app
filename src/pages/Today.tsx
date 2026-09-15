import { useState } from "react";

import { quests as initialQuests } from "../data/quests";
import NewQuestBar from "../components/NewQuestBar/NewQuestBar";
import QuestList from "../components/QuestList/QuestList";
import Header from "../components/Header";
import ProgressCard from "../components/ProgressCard/ProgressCard";
import Filters from "../components/Filters/Filters";

import ProfilePic from "../assets/profile.jpg";
import type { NewQuest } from "../types/Quest";

function Today() {
  const [quests, setQuests] = useState(initialQuests);
  const [filter, setFilter] = useState<"ALL" | "ACTIVE" | "COMPLETED">("ALL");

  const handleToggleComplete = (questId: number, completed: boolean) => {
    setQuests(prev =>
      prev.map(q => (q.id === questId ? { ...q, completed } : q))
    );
  };

  const handleAddQuest = (quest: NewQuest) => {
    setQuests(prev => [
      ...prev,
      {
        ...quest,
        id: Math.max(0, ...prev.map(q => q.id)) + 1,
        completed: false,
      },
    ]);
    if (filter === "COMPLETED") {
      setFilter("ALL");
    }
  };

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
      <QuestList quests={filteredQuests} onToggleComplete={handleToggleComplete} />
      <NewQuestBar onAdd={handleAddQuest} />
    </main>
  );
}

export default Today;