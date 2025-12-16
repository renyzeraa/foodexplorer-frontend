import { Container } from './style'

/** 
 * Mesmo componente de input porem realiza o
 * search na página, sem que gere conflito de
 * funções change do Input normal
 * 
 * Componente InputSearch para entrada de pesquisa com ícone.
 *
 * Este componente permite a criação de um campo de pesquisa com um ícone associado.
 *
 * @param {object} props - As propriedades do componente.
 * @param {React.Component} props.icon - O ícone a ser exibido junto ao campo de pesquisa.
 * @param {function} props.fnChange - Uma função de retorno de chamada para lidar com mudanças no valor da pesquisa.
 * @param {object} props.rest - Outras propriedades passadas para o componente de entrada.
 * @returns {JSX.Element} Um componente de entrada de pesquisa com ícone.
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
