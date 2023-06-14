import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseApp from '@/app/firebase/firebaseConfig';

const dolarValue = async () => {
    const DolarValue = await fetch('https://api.bluelytics.com.ar/v2/latest')
    const data = await DolarValue.json()
    return data
  }

const fetchFirebase = async () => {
    const db = getFirestore(firebaseApp);
    // Traemos la coleccion de la base de datos
    const querySnapshot = await getDocs(collection(db, "servicios"));
    return querySnapshot.docs.map((doc) => doc.data());
}

export const Servicios = async () => {
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
                   "individual": 799 ,
                   "Combo Star + Disney +": 1999,
                   "Combo Star + Disney + LIONSGATE +": 2399,
                },
            ],
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Disney_wordmark.svg/1200px-Disney_wordmark.svg.png",
        },
        {
            "id": 3,
            "name": "Star +",
            "plans": [
                {
                   "individual": 1749 ,
                   "Combo Star + Disney +": 1999 ,
                   "Combo Star + Disney + LIONSGATE +": 2399,
                },
            ],
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Star%2B_logo.svg/2560px-Star%2B_logo.svg.png",
        },
        {
            "id": 4,
            "name": "Apple TV",
            "plans": [
                {
                   "individual":  ((ImpuestoGanancias + ImpuestoPais )* (6.99 * dolar.oficial.value_buy)) + (6.99 * dolar.oficial.value_buy) ,
                },
            ],
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/2560px-Apple_TV_Plus_Logo.svg.png",
        },
        {
            "id": 5,
            "name": "Amazon Prime Video",
            "plans": [
                {
                    "individual":  ((ImpuestoPais + ImpuestoGanancias) * (580)) + 580,
                },
            ],
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Amazon_Prime_Video_logo.svg/2560px-Amazon_Prime_Video_logo.svg.png",
        },
        {
            "id": 5,
            "name": "Netflix",
            "plans": [
                {
                    "Basic":  ((ImpuestoPais + ImpuestoGanancias) * (999)) + 999,
                    "Standard":  ((ImpuestoPais + ImpuestoGanancias) * (1699)) + 1699,
                    "Premium":  ((ImpuestoPais + ImpuestoGanancias) * (2399)) + 2399,
                },
            ],
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/2560px-Netflix_logo.svg.png",
        },
        {
            "id": 6,
            "name": "HBO Max",
            "plans": [
                {
                    "Movil":  ((ImpuestoPais + ImpuestoGanancias) * (389)) + 389,
                    "Standard":  ((ImpuestoPais + ImpuestoGanancias) * (699)) + 699,
                },
            ],
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/HBO_Max_Logo.svg/2560px-HBO_Max_Logo.svg.png",
        },
    ]
}