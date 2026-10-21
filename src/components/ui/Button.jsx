import './Button.css'

export default function Button({ variant = 'hero', className = '', children, ...props }) {
  return (
    <button type="button" className={`btn btn--${variant} ${className}`} {...props}>
      {children}
    </button>
  )
}
