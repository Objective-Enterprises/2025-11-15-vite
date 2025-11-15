import { useEffect, useState } from 'react'

export default function HomePage() {
  const [dog, setDog] = useState()
  useEffect(() => {
    async function getDog() {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await response.json()
      setDog(data.message)
    }
    getDog()
  }, [])

  async function handleClick() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    setDog(data.message)
  }

  return (
    <>
      <button onClick={handleClick}>New Dog</button>
      <img src={dog} />
    </>
  )
}