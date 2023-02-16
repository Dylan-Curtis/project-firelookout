function TrailCard({trail, photo}){
return(
    <div className="TrailCard">
        <img src={photo} alt={trail.name} />
        <h4>{trail.name}</h4>
    </div>
)}

export default TrailCard