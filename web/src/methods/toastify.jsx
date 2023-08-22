import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const oTiposToastify = {
  TIPO_SUCCESS: 1,
  TIPO_ERROR: 2,
  TIPO_ALERT: 3
}

/**
 * Função assíncrona para obter a configuração padrão do Toastify.
 *
 * O Toastify é uma biblioteca para exibir notificações de toasts em um aplicativo React.
 * Esta função retorna um objeto com as configurações padrão para exibir os toasts.
 *
 * @returns {Promise<object>} Um objeto contendo as configurações padrão do Toastify.
 */
async function getConfigurationToastify() {
  return {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored'
  }
}

/**
 * Função para exibir notificações de toast com base no tipo de notificação e conteúdo fornecido.
 *
 * Esta função utiliza a biblioteca Toastify para exibir notificações de toast em um aplicativo React.
 *
 * @param {number} iTipo - O tipo de notificação (por exemplo, TIPO_SUCCESS, TIPO_ERROR ou TIPO_ALERT).
 * @param {string} sConteudo - O conteúdo da notificação que será exibido no toast.
 */
function getReactToastify(iTipo, sConteudo) {
  /**
   * Função interna para exibir o toast com base no tipo de notificação e conteúdo.
   */
  const readyToast = () => {
    {
      switch (iTipo) {
        case oTiposToastify.TIPO_SUCCESS:
          toast.success(sConteudo, getConfigurationToastify())
          break
        case oTiposToastify.TIPO_ERROR:
          toast.error(sConteudo, getConfigurationToastify())
          break
        case oTiposToastify.TIPO_ALERT:
          toast.warn(sConteudo, getConfigurationToastify())
          break
      }
    }
  }

  // Chama a função para exibir o toast
  return readyToast()
}

export { getReactToastify, oTiposToastify }
