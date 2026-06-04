import "./DetailGroup.css"

function DetailGroup({ label, value, isAddress }:{label:string, value:string, isAddress?: boolean}) {
  return (
    <div className={`data-group ${isAddress ? "address-group" : ""}`}>
      <span className="data-label">{label}</span>
      {isAddress ? (
        <p className="data-address">{value}</p>
      ) : (
        <span className="data-value">{value}</span>
      )}
    </div>
  );
}

export default DetailGroup;