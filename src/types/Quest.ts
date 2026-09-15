export const QUEST_CATEGORIES = [
  "WORK",
  "PERSONAL",
  "HOME",
  "PRODUCT",
  "GROWTH",
] as const;

export const QUEST_PRIORITIES = ["CRITICAL", "CHILL", "FOCUS"] as const;

export type QuestCategory = (typeof QUEST_CATEGORIES)[number];
export type QuestPriority = (typeof QUEST_PRIORITIES)[number];

export type Quest = {
  id: number;
  title: string;
  category: QuestCategory;
  priority: QuestPriority;
  date: string;
  time: string | null;
  completed: boolean;
};

export type NewQuest = Omit<Quest, "id" | "completed">;
