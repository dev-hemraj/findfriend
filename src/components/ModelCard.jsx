function ModelCard(props) {
  return (
    <div className="models col-12 col-lg-3">
      <div className="models__card">
        <div className="models__card--image">
          <img src={props.img.src} alt={props.img.alt} />
          <div className="models__overlayInfo">
            <div className="country">
              <h5>{props.country}</h5>
            </div>
            <div className={`status  ${props.status}`}>
              <h5>{props.status}</h5>
            </div>
          </div>
        </div>

        <div className="models__card--info">
          <div className="modelName">
            <h4>{props.modelName}</h4>
          </div>
          <div className="modelAge">
            <h4>Age: {props.modelAge}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelCard;
