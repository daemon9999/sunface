import { useSelector } from "react-redux"

export const useOptimization = () => useSelector(state => state.optimization)
