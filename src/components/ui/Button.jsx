import '../../style/Button.css'

export default function Button({ variant = 'hero', className = '', children, ...props }) {
  return (
    <button type="button" className={`button button-${variant} ${className}`} {...props}>
      {children}
    </button>
  )
}
