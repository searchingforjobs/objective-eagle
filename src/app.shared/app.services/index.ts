import { useEffect, useState } from 'react'
import axios, { AxiosInstance } from 'axios'

const API_BASE_URL = 'http://84.201.178.199'

const endpoint = (name: string, id?: string) => {
    if (id) {
        return `${API_BASE_URL}/${name}/${id}`
    }
    return `${API_BASE_URL}/${name}`
}

export const API = {
    INSTITUTIONS: (id?: string) => endpoint('institutions', id),
    ATTENDEES: (id?: string) => endpoint('attendees', id),
    SECURITY_PROFILES: (id?: string) => endpoint('security', id),
    INCIDENTS: (id?: string) => endpoint('incidents', id),
    VISITS: (id?: string) => endpoint('visits', id),
    STUDENTS: (id?: string) => endpoint('students', id),
    MANAGERS: (id?: string) => endpoint('managers', id),
    EVENTS: (id?: string) => endpoint('events', id),
    PROFILES: (id?: string) => endpoint('profiles', id),
    PASSPORTS: (id?: string) => endpoint('passport', id),
    DRIVER_LICENSES: (id?: string) => endpoint('driver-licenses', id),
    BIRTH_CERTIFICATES: (id?: string) => endpoint('birth-certificates', id),
}

export const $api = axios.create()

export function useResource<DataModel, CreateDto, UpdateDto>(
    endpoint: string,
    api: AxiosInstance,
) {
    const [error, setError] = useState(null)
    const [isFetching, setFetching] = useState<boolean>(false)
    const [data, setData] = useState<DataModel | null>(null)

    function doFetchingOperation(operation: () => any) {
        setFetching(true)
        const result = operation()
        setFetching(false)
        return result
    }

    function resetError() {
        setError(null)
    }

    function getResource() {
        return doFetchingOperation(() => {
            api.get<DataModel>(endpoint)
                .then((response) => {
                    resetError()
                    setData(response.data)
                })
                .catch((error) => {
                    setError(error)
                })
            return data
        })
    }

    function updateResourceState(){
        const data = getResource()
        setData(data)
    }

    function createOne(dto: CreateDto, options?: { image: Buffer }){
        if (options) {
            const formData = new FormData()

            for (const [key, value] of Object.entries(dto)) {
                formData.append(key, value)
            }

            formData.append('file', new Blob([options?.image], { type: 'image'}))

            api.post(endpoint, formData)
                .then((response) => {
                    resetError()
                })
                .catch((error) => {
                    setError(error)
                })

            updateResourceState()
            return actions
        }

        doFetchingOperation(() => {
            api.post<Array<DataModel>>(endpoint, dto)
                .then((response) => {
                    resetError()
                })
                .catch((error) => {
                    setError(error)
                })
            return dto
        })
        updateResourceState()
        return actions
    }

    function getOne(id: string){
        return doFetchingOperation(() => {
            api.get<DataModel>(`${endpoint}/${id}`)
                .then((response) => {
                    resetError()
                    setData(response.data)
                })
                .catch((error) => {
                    setError(error)
                })
            return data
        })
    }

    function updateOne(id: string, dto: UpdateDto){
        api.patch<Array<DataModel>>(`${endpoint}/${id}`, dto)
            .then((response) => {
                resetError()
            })
            .catch((error) => {
                setError(error)
            })
        updateResourceState()
        return actions
    }

    function deleteOne(id: string){
        api.delete<Array<DataModel>>(`${endpoint}/${id}`)
            .then((response) => {
                resetError()
            })
            .catch((error) => {
                setError(error)
            })
        updateResourceState()
        return actions
    }

    const actions = {
        create: createOne,
        get: getOne,
        update: updateOne,
        delete: deleteOne
    }


    useEffect(() => {
        updateResourceState()
    }, [])


    return {
        data: data,
        state: {
            isFetching: isFetching,
            error: error,
        },
        do: actions,
    }

}