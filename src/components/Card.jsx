const Card = ({name, position}) => {
  return (
    <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDR8H0rgV-zmSodkT_erGjzA_VhfWE22Pg7Q&s" alt="" />
        <p className="card-name">{name}</p>
        <p className="card-position">{position}</p>
    </div>
  )
}

export default Card
