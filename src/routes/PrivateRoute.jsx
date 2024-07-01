import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"

export const PrivateRoute = ({element})=> {

    const user = useSelector(state => state.user.value)
    const navigate = useNavigate()

    useEffect (() => {
        if (!user) {
        toast.error('Please login to continue')

        navigate('/login')
        }

    }, [user])

    return element


}