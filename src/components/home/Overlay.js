// state management
import { useDispatch, useSelector } from "react-redux"
import { closeExpandsHandler, overlay } from "src/redux/page/pageActions"



const Overlay = () => {
    const dispatch = useDispatch()
    const pageData = useSelector(state => state.pageData)


    const handleCloseAllExpands = () => {
        dispatch(overlay(false))
        dispatch(closeExpandsHandler(false))
    }


    return (
        <div
            className={` absolute h-full w-full top-0 right-0 over-lay ${pageData?.overlay ? "over-lay-on" : ''}`}
            onClick={handleCloseAllExpands}
        />
    )
}

export default Overlay
