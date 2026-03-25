import { login } from './actions'
import styles from './Login.module.scss';

export default function LoginPage() {
  return (
    <div className={`${styles['page-wrapper']} ${styles['page-wrapper--home']}`}>
      <form action={login} className={`${styles['card--login']}`} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className={`${styles['text-center']} ${styles['mb-2']}`}>
          <h1 className={`${styles['title-secondary']} ${styles['mb-2']}`} style={{ fontSize: '1.875rem' }}>Acceso Privado</h1>
          <p style={{ color: 'var(--color-text-medium)', fontWeight: 500, fontSize: '0.875rem' }}>Por favor, ingresa el código de tu invitación.</p>
        </div>

        <input
          type="password"
          name="password"
          placeholder="Código de acceso"
          required
          autoFocus
          className={`${styles['input-field']} ${styles['input-field--center']}`}
          style={{ padding: '1rem' }}
        />

        <button type="submit" className={`${styles.btn} ${styles['btn-primary']}`} style={{ padding: '1rem' }}>
          Entrar
        </button>
      </form>
    </div>
  )
}
