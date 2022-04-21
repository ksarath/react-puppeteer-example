import React from 'react'
import { useQuery } from 'react-query'

function Cats() {
  const { isLoading, error, data } = useQuery('catsData', () =>
     fetch('https://cat-fact.herokuapp.com/facts').then(res =>
       res.json()
     )
   )
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message
 
   return (
     <div>
        <h1 className='App-cats'>Cats</h1>
        <ul className='App-cats-data'>
            {data.map((d) =>
                <li>{d.text}</li>
            )}
        </ul>
     </div>
   )
}

export default Cats;
