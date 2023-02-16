function TrailCard({trail}){
return(
    <div className="TrailCard">
        <img src={trail.image} alt={trail.name} className="trail-image"/>
        <h5>
            </h5>
        <h4 className="trail-name">{trail.name}</h4>
        <h5 classname="hiking-des">Length:{trail.length} mi ~ </h5>

    </div>
)}

export default TrailCard