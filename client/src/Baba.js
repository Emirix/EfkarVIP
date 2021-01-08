import baba from "./muslum.png";
import { useState, useEffect } from "react";

export default function Baba() {
  const [sozler] = useState([
    "Bir gün “O seni çok üzmüştü sıra sende” deseler, ben o günde kıyamam sana.",
    "Unuttum desem de inanma sakın anılarla yazdım seni kalbime…",
    "Çünkü sen çölüme yağmur oldun. Sen geceme gündüz oldun!",
    "Özlerim ben seni seninle bir… Sıla mı hasret mi adını sen koy!",
    " Sen kibritin hiç yanmayan ucunda, birinin hayatından geçmiş oldun.",
    "Dünya tersine dönse senden vazgeçmem…",
    " Aşkını kalbimde sakladığımı unutursun diye çok korkuyorum.",
    "İnsanın hayatında neşenin yeri olduğu kadar hüznünde yeri olacaktır.",
    " Dikkatli yaşayacaksın hayatı, insandan çok şeytan var.",
    "Yarım kalan sevgiye, şu emanet gülmeye, yaşamadan ölmeye itirazım var!",
    "Hayat berbat biz yeniden başlayalım.",
    "Senin hasretin varken bu şehirde yaşanmaz.",
    "Sevgisizliğine bir kalp verdim.",
    "Ne güzeldi ümitlerim kırdı gitti sevdiklerim.",
    "Gizleme ne olursun saklı hislerini, sende bana aşıksın, hem de deliler gibi...",
    "Ağlayan gözlere değil, ağlatan kalbine sor. Boşalan kadehe değil, sarhoş eden aşka sor.",
    "Bütün duygularım ağır yaralı.",
    "Tanrı yazar kullar çeker, bir eziyet bin isyanı getirir. Bağrımızda dostlar sıkar silahı, bizi bu dost yaraları öldürür.",
    "Dert çekme tespih çek",
    "Yakarsa dünyayı garipler yakar.",
    "İçki içmem su içerim.",
    "Almayın, korsan kaset almayın kardeşim.",
    "Çiçeklere gerek yok aslında, sizler birer çiçeksiniz",
    "Dert olmasın bende söylemeyeyim.",
  ]);
  const [soz, setSoz] = useState();
 
  useEffect(seriSozGetir, []);

 

  function seriSozGetir() {
    setSoz([sozler[Math.floor(Math.random() * sozler.length)]]);
  
  }

  return (
    <div className="baba" >
      <img
        src={baba}
        className="ferdi_BABA"
        onMouseOver={() => {
          seriSozGetir();
        }}
        onClick={() => {
          seriSozGetir();
        }}
      />
      <div className="soz">
        <h3>Müslüm baba diyor ki;</h3>
        <p>{soz}</p>
      </div>
    </div>
  );
}
