export const setValidationError = (formik, data) => {
    if('errors' in data){
        for(let k in data.errors){
            formik.setFieldError(k,data.errors[k])
        }
    }
}

export const  inStorage = (key, value, remember = false) => {
    remember ? localStorage.setItem(key, value) : sessionStorage.setItem(key, value)
} 

export const fromStorage = key => {
    return localStorage.getItem(key) || sessionStorage.getItem(key)
}

export const removeStorage = key => {
    localStorage.removeItem(key)
    sessionStorage.removeItem(key)
}

export const imgUrl = filename => `${import.meta.env.VITE_API_URL}/image/${filename}`