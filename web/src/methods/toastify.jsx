import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const oTiposToastify = {
  TIPO_SUCCESS: 1,
  TIPO_ERROR: 2,
  TIPO_ALERT: 3
}
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

function getReactToastify(iTipo, sConteudo) {
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
  return readyToast()
}

export { getReactToastify, oTiposToastify }
