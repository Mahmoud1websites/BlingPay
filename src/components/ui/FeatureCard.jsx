import '../../style/FeatureCard.css'

export default function FeatureCard({ icon, title, children }) {
  return (
    <div className="feature-card">
      <img src={icon} alt="" />
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  )
}
