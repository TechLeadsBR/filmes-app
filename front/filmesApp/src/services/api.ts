import { useSelector } from 'react-redux'

export const useRequestAPI = (path: string) => {
    const token = useSelector<any>(state => state.token)

    return () => new Promise(async (resolve, reject) => {
        try {
            const request = await fetch("http://localhost:5000/api" + path, {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
            const response = await request
            resolve(response)
        } catch (error) {
            reject(error)
        }
    })
}
