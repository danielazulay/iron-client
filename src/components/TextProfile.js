function TextProfile(props) {
  return (
    <div className="col-md-6 mb-3">
      <label className="form-label">
        <strong>{props.label}</strong>
      </label>
      <input type="text" className="form-control" value={props.name} />
    </div>
  );
}

export default TextProfile;
