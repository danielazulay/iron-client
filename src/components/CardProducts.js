function CardProducts(props) {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.img}
            className="img-fluid rounded-start"
            alt="Cerveja"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">
              <small className="text-muted">{props.size}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProducts;
