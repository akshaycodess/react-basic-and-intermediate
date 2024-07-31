import { useCallback, useState } from "react"

export function useArray(intialArray) {
    const [array, setArray] = useState(intialArray)

    const push = useCallback((element) => {
        setArray((currArray) => {
            return [...currArray, element]
        })
    }, [])

    const replace = useCallback((index, element) => {
        setArray((currArray) => {
            return [...currArray.slice(0, index), element, ...currArray.slice(index + 1)]
        })
    }, [])

    const filter = useCallback((callback) => {
        setArray((currArray) => {
            return currArray.filter(callback)
        })
    }, [])

    const remove = useCallback((index) => {
        setArray((currArray) => {
            return currArray.filter((element, i) => {
                if (i !== index) return element
            })
        })
    }, [])

    const clear = useCallback(() => {
        setArray([])
    }, [])

    const reset = useCallback(() => {
        setArray(intialArray)
    }, [intialArray])

    return { array, set: setArray, push, replace, filter, remove, clear, reset }

}
