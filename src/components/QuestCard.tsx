function QuestCard({ quest }) {
    return (
      <article>
        <h3>{quest.title}</h3>
        <p>{quest.category}</p>
        <p>{quest.priority}</p>
        <p>{quest.time}</p>
      </article>
    );
  }
  
  export default QuestCard;