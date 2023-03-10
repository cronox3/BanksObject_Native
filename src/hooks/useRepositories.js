import  { useState, useEffect } from 'react';

const [data, setData] = useState([]);
const [loading, setLoading] = useState(true)

const url = "https://dev.obtenmas.com/catom/api/challenge/banks"

useEffect(() => {
  fetch(url)
    .then(response => response.json())
    .then((json) => setData(json))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
}, [])

const useRepositories = () => {
  const repositoriesNodes = repositories
    ? data
    : []

  return { loading, repositories: repositoriesNodes, refetch }
}

export default useRepositories
