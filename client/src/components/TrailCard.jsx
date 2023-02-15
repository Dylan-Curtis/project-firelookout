function TrailCard({trail, image}){
return(
    <div className="TrailCard">
        <img src={image} alt={trail.name} />
        <h4>{trail.name}</h4>
    </div>
)}

export default TrailCard