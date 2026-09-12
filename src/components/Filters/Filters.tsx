import "./Filters.css";

type FiltersProps = {
  filter: "ALL" | "ACTIVE" | "COMPLETED";
  setFilter: (f: "ALL" | "ACTIVE" | "COMPLETED") => void;
  counts: {
    all: number;
    active: number;
    completed: number;
  };
};

export default function Filters({ filter, setFilter, counts }: FiltersProps) {
  return (
    <div className="filters">
      <button
        className={`filter-button ${filter === "ALL" ? "active" : ""}`}
        onClick={() => setFilter("ALL")}
      >
        All <span>{counts.all}</span>
      </button>

      <button
        className={`filter-button ${filter === "ACTIVE" ? "active" : ""}`}
        onClick={() => setFilter("ACTIVE")}
      >
        Active <span>{counts.active}</span>
      </button>

      <button
        className={`filter-button ${filter === "COMPLETED" ? "active" : ""}`}
        onClick={() => setFilter("COMPLETED")}
      >
        Completed <span>{counts.completed}</span>
      </button>
    </div>
  );
}
