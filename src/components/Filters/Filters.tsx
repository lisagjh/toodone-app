import "./Filters.css" 

export default function Filters() {
    return (
        <div className="filters">
            <button className="filter-button active">All <span>6</span></button>
            <button className="filter-button">Active</button>
            <button className="filter-button">Completed</button>
        </div>
    );
}