const Container = ({ children }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card" style={{ width: "40%" }}>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};
export default Container;
