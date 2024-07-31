import { useEffect, useState } from "react"

export function useFetch(url, options = {}) {
const [isLoading, setIsLoading] = useState(true)
const [isError, setIsError] = useState(false)
const [data, setData] = useState()

useEffect(() => {
    setIsLoading(true)
    setData(undefined)
    setIsError(false)
    const controller = new AbortController()

    // Fetch request.
    fetch(url, { signal: controller.signal, ...options })
        .then((response) => {
            // To make it work for GET and POST requests
            if (response.status === 200 || response.status === 201) {
                return response.json()
            }
            console.log(response.status)
            return Promise.reject(response)
        })
        .then((data) => {
            setData(data)
        })
        .catch((error) => {
            if (error.name === "AbortError") return
            console.log("error in fetch", error)
            setIsError(true)
        })
        .finally(() => {
            if (controller.signal.aborted) return
            setIsLoading(false)
        })

        return () => {
            controller.abort()
        }
    }, [url])

    return { isLoading, isError, data }
    
}
