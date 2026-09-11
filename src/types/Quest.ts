export type Quest = {
    id: number;
    title: string;
    category: "WORK" | "PERSONAL" | "HOME" | "PRODUCT" | "GROWTH";
    priority: "CRITICAL" | "CHILL" | "FOCUS";
    time: string | null;
    completed: boolean;
  };
  