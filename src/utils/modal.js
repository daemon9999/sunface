import { useSelector } from "react-redux"
import store from "src/store"
import { appenModal, destroyModals, deleteModal } from "src/store/modal"


export const useModals = () => useSelector(state => state.modal.modals)
export const createModal = (name, data = false) => store.dispatch(appenModal({name, data}))
export const destroyModal = () => store.dispatch(deleteModal())
export const destroyAllModals = () => store.dispatch(destroyModals())




