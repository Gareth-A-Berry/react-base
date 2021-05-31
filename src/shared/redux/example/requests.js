import { callApi } from '@utils/api'

export const getExamplePostRequest = (agent) => (payload) => agent.post('/example-post-end-point', payload)
export const getExampleGetRequest = (agent) => () => agent.get('/example-get-end-point')

export const handlePostExample = async (payload) => {
    return callApi(getExamplePostRequest)(payload)
        .then(({ data }) => data)
        .catch((e) => e)
}

export const handleGetExample = async (payload) => {
    return callApi(getExampleGetRequest)(payload)
        .then(({ data }) => data)
        .catch((e) => e)
}

