import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseApp from '@/app/firebase/firebaseConfig';
import { dolarValue } from "../layout";


const fetchFirebase = async () => {
    const db = getFirestore(firebaseApp);
    // Traemos la coleccion de la base de datos
    const querySnapshot = await getDocs(collection(db, "servicios"));
    return querySnapshot.docs.map((doc) => doc.data());
}

export const Servicios = async () => {
    const fetchData = await fetchFirebase()
    const dolar = await dolarValue()

    const ImpuestoPais = 0.30
    const ImpuestoGanancias = 0.45


    return [
        {
            "id": 1,
            "name": "Spotify",
            "plans": [ 
                {
                    "estudiante": 199 * (ImpuestoPais + ImpuestoGanancias) + 199,
                    "individual": 399 * (ImpuestoPais + ImpuestoGanancias) + 399,
                    "familiar": 649 * (ImpuestoPais + ImpuestoGanancias) + 649,
                    "Duo": 549 * (ImpuestoPais + ImpuestoGanancias) + 549,
                }
            ],
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/1200px-Spotify_logo_with_text.svg.png",
        },
        {
            "id": 2,
            "name": "Disney +",
            "plans": [
                {
                   "individual": 799 * dolar.oficial.value_buy,
                   "Combo Star + Disney +": 1999 * dolar.oficial.value_buy,
                   "Combo Star + Disney + LIONSGATE +": 2399 * dolar.oficial.value_buy,
                },
            ],
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Disney_wordmark.svg/1200px-Disney_wordmark.svg.png",
        },
    ]
}