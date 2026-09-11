import type { Quest } from "../types/Quest";

export const quests: Quest[] = [
  {
    id: 1,
    title: "Review Figma constraint components",
    category: "WORK",
    priority: "CRITICAL",
    time: "10:30 AM",
    completed: false,
  },
  {
    id: 2,
    title: "Walk the dog around the park block",
    category: "PERSONAL",
    priority: "CHILL",
    time: "1:00 PM",
    completed: false,
  },
  {
    id: 3,
    title: "Draft launch marketing announcement",
    category: "WORK",
    priority: "FOCUS",
    time: "4:00 PM",
    completed: false,
  },
  {
    id: 4,
    title: "Water the indoor studio monstera",
    category: "HOME",
    priority: "CHILL",
    time: null,
    completed: true,
  },
  {
    id: 5,
    title: "Align team on Q4 prioritization",
    category: "PRODUCT",
    priority: "CRITICAL",
    time: null,
    completed: true,
  },
  {
    id: 6,
    title: "Do 20 minute Yoga sessions",
    category: "GROWTH",
    priority: "CHILL",
    time: null,
    completed: false,
  },
];
