function StatsBar({ totalModel, onlineModel }) {
  return (
    <section className="statsBar">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="statsBar__onlineNow">
            <h4>
              {onlineModel} <span>Online Now</span>
            </h4>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="statsBar__totalModel">
            <h4>
              <span>Total Model:</span> {totalModel}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
