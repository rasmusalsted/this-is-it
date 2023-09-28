import React from 'react'
import SafetyHero from '../Components/SafetyHero'
import SafetyInfo from '../Components/SafetyInfo'

const Nyheder = () => {

  return (

    <>
      <header>
        <SafetyHero />
      </header>
      <main>
        <section>
          <SafetyInfo />
        </section>
      </main>
    </>
  )
}

export default Nyheder