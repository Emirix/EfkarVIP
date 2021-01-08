import { useEffect, useState } from "react"

export default function Loading({loading}){

    const [yazilar] = useState([
        "Şarkılar alınıyor",
        "Dertler yükleniyor",
        "Hayaller hazır mı?",
        "Çakmağı arıyorum",
        "Cigara yakılıyor",
        "Hayata isyan mode: on",
        "Façalar çekiliyor"
    ])

    const [yazi,setYazi] = useState()

    useEffect(()=>{
        setInterval(()=>{
            setYazi(yazilar[Math.floor(Math.random() * yazilar.length)]);
          
        },1000)
    })
    

    useEffect(()=>{
        setYazi(yazilar[Math.floor(Math.random() * yazilar.length)]);
    },[])

   
    return(
        
        <div className="loading-container"
             style={{top: loading === true ? "0" :"-2000px"}}
            >
            <div className="retro"></div>
            <div className="img">
              
            </div>

            <div className="loading-aciklama">
                <h3>EfkarVIP'e Hoşgeldiniz</h3>
                <p className="text-secondary">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <div className="load"></div>
             
                <p>Yükleniyor : <span className="text-secondary">{yazi}</span></p>
            </div>
        </div>
    )

}