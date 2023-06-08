import React from 'react'
import Services from './components/services/Services'
import firebaseApp from './firebase/firebaseConfig'
import { getFirestore, collection, doc, setDoc, getDocs } from "firebase/firestore";


const fetchFirebase = async () => {
  const db = getFirestore(firebaseApp);
  // Traemos la coleccion de la base de datos
  const querySnapshot = await getDocs(collection(db, "servicios"));
  const services = querySnapshot.docs.map((doc) => doc.data());

}





const HomePage = async () => {

  const db = await fetchFirebase()



  return (
    <>

      <div
        className='flex flex-col  justify-center min-h-screen py-2 bg-black'
      >
        <h1 className='text-6xl font-bold text-white'>
          Calculadora de impuestos digitales para Argentina.
        </h1>
      </div>
      <div
        className='flex flex-col items-center justify-center py-5 bg-white'
      >
        <h1
          className='text-4xl font-bold text-black mt-5 mb-5'
        >
          Streaming
        </h1>
        <Services />
        <h1
          className='text-4xl font-bold text-black mt-5 mb-5'
        >
          Musica
        </h1>
      </div>

    </>

  )
}

export default HomePage