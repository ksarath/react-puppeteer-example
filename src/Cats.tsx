import React from 'react'
import { useQuery, UseQueryResult } from 'react-query'

const Cats = () => {
  interface CatFact {
    text: string;
  }
  interface CatFactsError {
    message: string;
  }

  const catFacts: UseQueryResult<CatFact[], CatFactsError> = useQuery('catsData', () =>
    fetch('https://cat-fact.herokuapp.com/facts').then(res =>
      res.json()
    )
  )

  if (catFacts.isLoading || catFacts.isIdle) return (<>Loading...</>);

  if (catFacts.error) return (<>An error has occurred: {catFacts.error.message}</>);

  return (
    <div>
      <h1 className='App-cats'>Cats</h1>
      <ul className='App-cats-data'>
        {catFacts.data.map((d) =>
          <li>{d.text}</li>
        )}
      </ul>
    </div>
  );
}

export default Cats;
