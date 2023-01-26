import "./TimelineEvent.css";
import TimeStamp from "./TimeStamp";

const TimelineEvent = (props) => {
  return (
    <section className="timeline-event">
      <div className="event-person">{props.person}</div>
      <div className="event-status">{props.status}</div>
      <div className="event-time">
        <TimeStamp time={props.timestamp}></TimeStamp>
      </div>
    </section>
  );
};

export default TimelineEvent;
