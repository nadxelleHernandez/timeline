import "./TimeLine.css";
import TimelineEvent from "./TimelineEvent";
import Proptypes from "prop-types";

const Timeline = (props) => {
  const events = props.data.events.map((tEvent, i) => {
    return (
      <li key={i}>
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

Timeline.propTypes = {
  data: Proptypes.array.isRequired,
};

export default Timeline;
