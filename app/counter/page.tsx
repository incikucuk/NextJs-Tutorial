import React from 'react'
import Counter from '../components/Counter'

const CounterPage = () => {   //bu classta bu componentin api işlemleri gibi diğer işlemleri yapılırken counter component içinde copmponentin kendi işlevleri yer alır.
  return (
    <div>
        <h1 className='text-6xl mb-16'>Page Content</h1>
        <Counter/>  
        
    </div>
  )
}

export default CounterPage