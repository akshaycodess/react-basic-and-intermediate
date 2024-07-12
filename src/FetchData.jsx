import { useState, useEffect } from "react"

export function FetchData() {
    const [users, setUsers] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        console.log('a')
        setLoading(true)
        setError(null)
        // abort controller builtin
        const controller = new AbortController()
        // fetch request
        fetch('https://jsonplaceholder.typicode.com/users', { signal: controller.signal })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                } else {
                    return Promise.reject(res)
                }
            })
            .then(data => {
                setUsers(data)
            })
            .catch(e => {
                // to catch error and avoid our manual abort
                if (e?.name === 'AbortError') return
                setError(e)
            })
            .finally(() => {
                // data is ready to display now
                setLoading(false);
            })
            // to abort the request
            return () => {
                controller.abort()
            }
    }, [])

    let output
    if (loading) {
        output = <h2>loading...</h2>
    } else if(error != null) {
        output = <h2>Error</h2>
    }
    else {
        output = JSON.stringify(users)
    }

    return (
        <div>
            <h2>Users listing (fetch API)</h2>
            {output}
        </div>
    )
}