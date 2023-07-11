import { Container } from './style'

/** Mesmo componente de input porem realiza o
 * search na página, sem que gere conflito de
 * funções change do Input normal
 */

export function InputSearch({ icon: Icon, fnChange, ...rest }) {
  /**
   * Lidar com as buscas de pratos
   * @param {event} oEv
   */
  function handleFnSearch(oEv) {
    fnChange(oEv)
  }
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} onChange={handleFnSearch} />
    </Container>
  )
}
