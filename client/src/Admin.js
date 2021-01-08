import { useState, useEffect } from "react";
import axios from "axios";

export default function Admin() {
  const [istekSarkilar, setIstekSarkilar] = useState();
  const [ok, setOk] = useState(false);
  const [isLogged,setLogged] = useState(false)
  const [mSarki,setMSarki] = useState()
  /* Giriş Stateleri */
  const [nickc,setNickc] = useState("");
  const [sifre,setSifre] = useState("");
  const [dbVeri,setDbVeri] = useState();
  /**/

  const BASE_URL = "http://localhost:5000"

  useEffect(() => {
    // İstekleri Çek
    axios.get(BASE_URL+"/istekleriAl").then((res) => {
      setIstekSarkilar(res.data);
      setOk(true);

    });
  }, []);

  useEffect(()=>{

    
    axios.get(BASE_URL+"/admin/login").then(res=>{
        setDbVeri(res.data)
       
     }) 

     axios.get(BASE_URL+"/istekleriAl").then((res) => {
      setIstekSarkilar(res.data);
      setOk(true);

    });

  })

  function girisYap(){

        if( sifre === dbVeri[0].pass && nickc === dbVeri[0].nick){
            setLogged(true)
        }else{
            alert("Yanlış şifre veya kullanıcı adı")
        }
  
  }

  return (
    <div>
        {isLogged ? <div className="admin-con">
      <h1 className="mb-0">Admin Paneli</h1>
      <p className="my-0 py-0">EfkarVIP</p>

      <hr />

      <div className="con2">

      <h1>Manuel Şarkı Ekleme</h1>
      <div className="mb-4">
        <input value={mSarki} onChange={e=>{setMSarki(e.target.value)}} placeholder="Şarkının youtube linki" className="w-50 mx-auto d-block"/>
        <button className="d-block w-25 mt-2 mx-auto" onClick={()=>{

var id = mSarki.replace("https://youtu.be/","").replace("https://www.youtube.com/watch?v=","") 
var sonuc = "https://www.youtube.com/embed/" + id
          axios.post(BASE_URL+"/sarki/ekle",{
            sarki:sonuc
          })
        }}>Ekle</button>
      </div>

        <h1>İstek Şarkılar :</h1>
        <ul>
          {ok ? (
            istekSarkilar.map((val) => {
              return (
                <li>
                  {val.sarki}

                <button onClick={()=>{
                  axios.post(BASE_URL+"/istek/sil",{
                    
                    id:val._id
                  })
                }}className="red d-block ml-auto mr-1">Sil</button>

                  <button onClick={()=>{
                     
                      var id = val.sarki.replace("https://youtu.be/","").replace("https://www.youtube.com/watch?v=","") 
                      var sonuc = "https://www.youtube.com/embed/" + id
                      axios.post(BASE_URL+"/istek/onay",{
                        sonuc:sonuc,
                        id:val._id
                      })

                     
                  }}>Onayla</button>

                  
                </li>
              );
            })
          ) : (
            <></>
          )}
        </ul>

        <h1>Giren IP'ler</h1>
        <ul>
          <li>192.168</li>
          <li>192.168</li>
        </ul>
      </div>
    </div> : <div className="login-admin w-25 mx-auto mt-5">
        <h3>Admin</h3>
        
        Kullanıcı Adı : <input value={nickc} onChange={e=>{
            setNickc(e.target.value)
        }}/>
        <br/> <br/>
        Şifre : <input value={sifre} onChange={e=>{
            setSifre(e.target.value)
        }}/>
        <br/>
        <button className="w-50 mx-auto mt-3 d-block" onClick={()=>{girisYap()}}>Giriş Yap</button>
        </div>}

    </div>
  );
}
