import "./TimeLine.css";
import TimelineEvent from "./TimelineEvent";

const Timeline = (props) => {
  const events = props.data.events.map((tEvent) => {
    return (
      <li>
        <TimelineEvent
          person={tEvent.person}
          status={tEvent.status}
          timestamp={tEvent.timestamp}
        />
      </li>
    );
  });
  return (
    <section className="timeline">
      <ul>{events}</ul>
    </section>
  );
};

export default Timeline;
