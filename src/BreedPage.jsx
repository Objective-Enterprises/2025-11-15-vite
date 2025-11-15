import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BreedPage() {
  const params = useParams()
  const url = `https://dog.ceo/api/breed/${params.breedName}/images/random`
  const [dog, setDog] = useState()
  useEffect(() => {
    async function getDog() {
      const response = await fetch(url)
      const data = await response.json()
      setDog(data.message)
    }
    getDog()
  }, [])

  async function handleClick() {
    const response = await fetch(url)
    const data = await response.json()
    setDog(data.message)
  }

  return (
    <>
      <button onClick={handleClick}>New {params.breedName}</button>
      <img src={dog} />
    </>
  )
}