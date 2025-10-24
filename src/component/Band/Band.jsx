import "./Band.css"
export default function Band({text="Antioxydant jeun", icon}) {
  return (
    <div className="band-container">
        {icon}
        <p>{text}</p>
    </div>
  )
}
