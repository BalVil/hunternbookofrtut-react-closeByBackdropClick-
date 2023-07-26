import styles from './Button.module.scss';

function Button({
  variant = 'button',
  ariaLabel,
  title,
  type = 'button',
  onClick,
  disabled,
}) {
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      className={styles[variant]}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{title}</span>
    </button>
  );
}

export default Button;
