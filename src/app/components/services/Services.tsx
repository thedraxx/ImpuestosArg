import React from 'react'
import Streaming from './streaming/Streaming';
import { getFirestore, collection, doc, setDoc, getDocs } from "firebase/firestore";
import firebaseApp from '@/app/firebase/firebaseConfig';
import { Dolar } from '@/app/interface/iDolarValue';

const fetchFirebase = async () => {
    const db = getFirestore(firebaseApp);
    // Traemos la coleccion de la base de datos
    const querySnapshot = await getDocs(collection(db, "servicios"));
    return querySnapshot.docs.map((doc) => doc.data());
}

interface ServicesProps {
    CotizeDolar: Dolar
}

const Services = async ({ CotizeDolar }: ServicesProps) => {

    const fetchData = await fetchFirebase()

    return (
        <div
            className='flex flex-1 flex-col mt-5 mb-5 justify-center items-center sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4'
        >
            {
                fetchData.map((item: any) => {
                    return (
                        <Streaming
                            key={item.id}
                            item={item}
                            CotizeDolar={CotizeDolar}
                        />
                    )
                })
            }
        </div >
    )
}

export default Services