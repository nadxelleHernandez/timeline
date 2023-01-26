import "./TimelineEvent.css";
import TimeStamp from "./TimeStamp";
import Proptypes from "prop-types";

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

TimelineEvent.propTypes = {
  person: Proptypes.string.isRequired,
  status: Proptypes.string,
  timestamp: Proptypes.string.isRequired,
};

export default TimelineEvent;
