import "./stats.css";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const Stats = () => {
  return (
    <div className="Stats" id="Stats">
      <div className="Stats__Container" >
        <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
          {({ isVisible }) => (
            <h1 className="stat">
              {isVisible ? <CountUp start={0} end={7} /> : "0"}
            </h1>
          )}
        </VisibilitySensor>
        <p>Institutes Covered</p>
      </div>
      <div className="Stats__Container">
        <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
          {({ isVisible }) => (
            <h1 className="stat">
              {isVisible ? <CountUp start={0} end={400} /> : "0"} +
            </h1>
          )}
        </VisibilitySensor>
        <p>Students Trained</p>
      </div>
      <div className="Stats__Container">
        <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
          {({ isVisible }) => (
            <h1 className="stat">
              {isVisible ? <CountUp decimals={1} start={0} end={4.5} /> : "0"}
            </h1>
          )}
        </VisibilitySensor>
        <p>Average Rating</p>
      </div>
    </div>
  );
}

export default Stats;