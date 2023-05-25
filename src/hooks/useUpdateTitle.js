import { useEffect } from 'react'

export const useUpdateTitle = (title) => {
    useEffect(() => {
        document.title = title;
    })
}
