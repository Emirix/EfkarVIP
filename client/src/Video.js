/*
BAŞLAMA TARİHİ:  04.01.2021
*/

import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Emirix-Spinner/Spinner";

export default function Video() {
  const [liste, setListe] = useState([]);

  const [sarki, setSarki] = useState(
    "https://www.youtube.com/embed/sANxwABlHg4?autoplay=1"
  );
  const [dertPaneli, setDertPaneli] = useState(false);
  const [dIsim, setDIsim] = useState();
  const [dSehir, setSehir] = useState();
  const [dMesaj, setDMesaj] = useState();
  const [dert, setDert] = useState();
  const [dertGonderildiMi] = useState(true);
  const [isGetted, setGetted] = useState(false);
  const [istekSarki, setIstekSarki] = useState();
  const [un,setUN] = useState(false)

  // DEPLOYAN ÖNCE SİL 
  const BASE_URL = "http://localhost:5000";
  

  useEffect(() => {
    dertAl();
 
  });

  useEffect(() => {
    dertAl();

    getX();

    
    
  
    // KISAYOLLAR
    document.addEventListener("keydown", function (event) {
      switch (event.keyCode) {
        case 88:
          degistir();
          break;
        case 83:
          degistir();
          break;
        case 69:
          degistir();
          break;
        default:
          break;
      }
    }
  );
  }, []);

  async function getX() {
    const res = await axios(BASE_URL+"/sarkilar/list");

    return setListe(await res.data[0].sarkilar);
  }

  function degistir() {
    setSarki(liste[Math.floor(Math.random() * liste.length)] + "?autoplay=1"); //
  }

  
  // Tab sistemi
  const [tab, setTab] = useState({
    t1: "active",
    t2: "",
    t3: "",
    t4: "",
    t5: "",
  });
  const [tabBorder, setTabBorder] = useState({
    width: 100,
    left: 0,
  });

  function goTab(e) {
    if (e === 1) {
      setTab({
        t1: "active",
        t2: "",
        t3: "",
        t4: "",
        t5: "",
      });

      setTabBorder({
        width: 120,
        left: 0,
      });
    }

    if (e === 2) {
      setTab({
        t1: "",
        t2: "active",
        t3: "",
        t4: "",
        t5: "",
      });

      setTabBorder({
        width: 130,
        left: 133,
      });
    }

    if (e === 3) {
      setTab({
        t1: "",
        t2: "",
        t3: "active",
        t4: "",
        t5: "",
      });
      setTabBorder({
        width: 85,
        left: 274,
      });
    }

    if (e === 4) {
      setTab({
        t1: "",
        t2: "",
        t3: "",
        t4: "active",
        t5: "",
      });

      setTabBorder({
        width: 105,
        left: 370,
      });
    }

    if (e === 5) {
      setTab({
        t1: "",
        t2: "",
        t3: "",
        t4: "",
        t5: "active",
      });

      setTabBorder({
        width: 118,
        left: 497,
      });
    }
  }
  // Tab sistemi end

  function dertGonder() {
    axios.post(BASE_URL+"/add", {
      isim: dIsim,
      sehir: dSehir,
      mesaj: dMesaj,
    });
    alert("Derdiniz alınmıştır ve sayfada gösterilmeye başlatılmıştır");
  }

  const dertAl = () => {
    axios.get(BASE_URL+"/get").then((res) => {
      setDert(res.data);
      setGetted(true);
    });
  };

  const istekEkle = () => {
    axios.post(BASE_URL+"/istekEkle", {
      sarki: istekSarki,
    });

    setIstekSarki("");
    alert(
      "Şarkınız sistemimize girilmiştir. Yönetici onayından sonra eklenecektir."
    );
    setTab(1);
  };

  return (
    <>
      <iframe
      title="Efkar"
        src={sarki}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>

      {/** DERT YAZMA PANELİ POPUP */}

      {dertPaneli ? (
        <div className="popup-container">
          <div className="popup p-2 pt-0">
            <div className="flex center-y">
              <div className="close-icon" onClick={() => setDertPaneli(false)}>
                <svg version="1.1" viewBox="0 0 357 357">
                  <g>
                    <g id="close">
                      <polygon
                        points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
			214.2,178.5 		"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <h3 className="p-1 mx-auto">Derdini Yaz</h3>
            </div>

            {dertGonderildiMi ? (
              <div>
                <input
                  placeholder="İsminiz"
                  onChange={(e) => setDIsim(e.target.value)}
                />
                <small>Boş bırakıp ismi gizleyebilirsin</small>
                <input
                  placeholder="Memleket nere dayı"
                  className="mt-3"
                  onChange={(e) => setSehir(e.target.value)}
                />
                <textarea
                  rows="5"
                  className="w-100 mt-3"
                  placeholder="Derdini anlat reis"
                  onChange={(e) => setDMesaj(e.target.value)}
                ></textarea>

                <button
                  className="mt-3 w-100"
                  onClick={() => {
                    dertGonder();
                  }}
                >
                  Gönder
                </button>
              </div>
            ) : (
              <h1>siktir aq</h1>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
      

      {/** DERT YAZMA PANELİ POPUP END*/}


        {un ?  <div className="popup-container">
          <div className="popup p-2 rounded">

          <div className="flex center-y">
              <div className="close-icon" onClick={() => setUN(false)}>
                <svg version="1.1" viewBox="0 0 357 357">
                  <g>
                    <g id="close">
                      <polygon
                        points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 
			214.2,178.5 		"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <h3 className="p-1 mx-auto">Güncelleme Notları</h3>
            </div>

            <ul>
              <li className="h">Version 1 07.01.2021</li>
              <li>Yayınlanma</li>

              <li className="h">Version 1.2 08.01.2021</li>
              <li>Responsived</li>
              <li>Şarkı ekleme bugu düzeltildi</li>
              <li>Admin paneli şifrelendi</li>
              <li>Yüklenme resmi optimize edildi</li>
            </ul>


          </div>
        </div>: <></>}



      <div className="button_con">
        <ul>
          <li
            className={tab.t1}
            onClick={() => {
              goTab(1);
            }}
          >
            <svg version="1.1" viewBox="0 0 306.773 306.773">
              <g>
                <path
                  d="M302.93,149.794c5.561-6.116,5.024-15.49-1.199-20.932L164.63,8.898
		c-6.223-5.442-16.2-5.328-22.292,0.257L4.771,135.258c-6.092,5.585-6.391,14.947-0.662,20.902l3.449,3.592
		c5.722,5.955,14.971,6.665,20.645,1.581l10.281-9.207v134.792c0,8.27,6.701,14.965,14.965,14.965h53.624
		c8.264,0,14.965-6.695,14.965-14.965v-94.3h68.398v94.3c-0.119,8.264,5.794,14.959,14.058,14.959h56.828
		c8.264,0,14.965-6.695,14.965-14.965V154.024c0,0,2.84,2.488,6.343,5.567c3.497,3.073,10.842,0.609,16.403-5.513L302.93,149.794z"
                />
              </g>
            </svg>
            Ana Sayfa
          </li>
          <li className={tab.t2} onClick={() => goTab(2)}>
            <svg version="1.1" viewBox="0 0 426.667 426.667">
              <g>
                <g>
                  <g>
                    <path
                      d="M299.307,206.827h-32.64v0.107c-21.76,0-39.467-20.907-39.467-42.667c0-21.76,17.707-37.333,39.467-37.333v-32
				c-39.36,0-71.467,32-71.467,71.467s32,71.467,71.467,71.467v-0.107h32.64c22.293,0,42.027,15.787,42.027,43.84v27.733h32V274.24
				C373.333,235.84,339.2,206.827,299.307,206.827z"
                    />
                    <rect x="341.333" y="330.667" width="32" height="64" />
                    <rect x="0" y="330.667" width="320" height="64" />
                    <path
                      d="M359.467,154.24c13.12-12.907,21.333-30.933,21.333-50.773C380.8,64,348.693,32,309.333,32v32
				c21.76,0,39.467,17.707,39.467,39.467c0,21.76-17.707,39.467-39.467,39.467v32c47.893,0,85.333,38.933,85.333,86.827v47.573h32
				v-47.68C426.667,214.187,399.36,173.227,359.467,154.24z"
                    />
                    <rect x="394.667" y="330.667" width="32" height="64" />
                  </g>
                </g>
              </g>
            </svg>
            Dert Dinliyici
          </li>
          <li className={tab.t3} onClick={() => goTab(3)}>
            <svg version="1.1" viewBox="0 0 430.23 430.23">
              <g>
                <g>
                  <g>
                    <path
                      d="M217.875,159.668c-24.237,0-43.886,19.648-43.886,43.886c0,24.237,19.648,43.886,43.886,43.886
				c24.237,0,43.886-19.648,43.886-43.886C261.761,179.316,242.113,159.668,217.875,159.668z M217.875,226.541
				c-12.696,0-22.988-10.292-22.988-22.988c0-12.696,10.292-22.988,22.988-22.988h0c12.696,0,22.988,10.292,22.988,22.988
				C240.863,216.249,230.571,226.541,217.875,226.541z"
                    />
                    <path
                      d="M392.896,59.357L107.639,26.966c-11.071-1.574-22.288,1.658-30.824,8.882c-8.535,6.618-14.006,16.428-15.151,27.167
				l-5.224,42.841H40.243c-22.988,0-40.229,20.375-40.229,43.363V362.9c-0.579,21.921,16.722,40.162,38.644,40.741
				c0.528,0.014,1.057,0.017,1.585,0.01h286.824c22.988,0,43.886-17.763,43.886-40.751v-8.359
				c7.127-1.377,13.888-4.224,19.853-8.359c8.465-7.127,13.885-17.22,15.151-28.212l24.033-212.114
				C432.44,82.815,415.905,62.088,392.896,59.357z M350.055,362.9c0,11.494-11.494,19.853-22.988,19.853H40.243
				c-10.383,0.305-19.047-7.865-19.352-18.248c-0.016-0.535-0.009-1.07,0.021-1.605v-38.661l80.98-59.559
				c9.728-7.469,23.43-6.805,32.392,1.567l56.947,50.155c8.648,7.261,19.534,11.32,30.825,11.494
				c8.828,0.108,17.511-2.243,25.078-6.792l102.922-59.559V362.9z M350.055,236.99l-113.894,66.351
				c-9.78,5.794-22.159,4.745-30.825-2.612l-57.469-50.678c-16.471-14.153-40.545-15.021-57.992-2.09l-68.963,50.155V149.219
				c0-11.494,7.837-22.465,19.331-22.465h286.824c12.28,0.509,22.197,10.201,22.988,22.465V236.99z M409.112,103.035
				c-0.007,0.069-0.013,0.139-0.021,0.208l-24.555,212.114c0.042,5.5-2.466,10.709-6.792,14.106c-2.09,2.09-6.792,3.135-6.792,4.18
				V149.219c-0.825-23.801-20.077-42.824-43.886-43.363H77.337l4.702-40.751c1.02-5.277,3.779-10.059,7.837-13.584
				c4.582-3.168,10.122-4.645,15.674-4.18l284.735,32.914C401.773,81.346,410.203,91.545,409.112,103.035z"
                    />
                  </g>
                </g>
              </g>
            </svg>
            Galeri
          </li>
          <li className={tab.t4} onClick={() => goTab(4)}>
            <svg viewBox="0 0 426.66667 426.66667">
              <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
            </svg>
            Şarkı Ekle
          </li>
          <li className={tab.t5} onClick={() => goTab(5)}>
            <svg viewBox="0 0 512 512">
              <g>
                <path d="m256 512c-68.38 0-132.667-26.628-181.02-74.98s-74.98-112.64-74.98-181.02 26.628-132.667 74.98-181.02 112.64-74.98 181.02-74.98 132.667 26.628 181.02 74.98 74.98 112.64 74.98 181.02-26.628 132.667-74.98 181.02-112.64 74.98-181.02 74.98zm0-480c-123.514 0-224 100.486-224 224s100.486 224 224 224 224-100.486 224-224-100.486-224-224-224z" />
                <path d="m256 368c-8.836 0-16-7.164-16-16 0-40.386 15.727-78.354 44.285-106.912 17.872-17.873 27.715-41.635 27.715-66.911 0-27.668-22.509-50.177-50.177-50.177h-3.646c-27.668 0-50.177 22.509-50.177 50.177v5.823c0 8.836-7.164 16-16 16s-16-7.164-16-16v-5.823c0-45.313 36.864-82.177 82.177-82.177h3.646c45.313 0 82.177 36.864 82.177 82.177 0 33.823-13.171 65.622-37.088 89.539-22.514 22.513-34.912 52.446-34.912 84.284 0 8.836-7.164 16-16 16z" />
                <path d="m256.02 432c-8.836 0-16.005-7.164-16.005-16s7.158-16 15.995-16h.01c8.836 0 16 7.164 16 16s-7.164 16-16 16z" />
              </g>
            </svg>
            Hakkımızda
          </li>
        </ul>
        <div
          className="borderx"
          style={{ width: tabBorder.width, marginLeft: tabBorder.left }}
        ></div>
      </div>

      {tab.t1 === "active" ? (
        <div className="ana_sayfa">
          <div
            className="item"
            onClick={() => {
              degistir();
            }}
          >
            <svg
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 458.186 458.186"
              className="refreshButton"
            >
              <g>
                <g>
                  <path
                    d="M445.651,201.95c-1.485-9.308-10.235-15.649-19.543-14.164c-9.308,1.485-15.649,10.235-14.164,19.543
			c0.016,0.102,0.033,0.203,0.051,0.304c17.38,102.311-51.47,199.339-153.781,216.719c-102.311,17.38-199.339-51.47-216.719-153.781
			S92.966,71.232,195.276,53.852c62.919-10.688,126.962,11.29,170.059,58.361l-75.605,25.19
			c-8.944,2.976-13.781,12.638-10.806,21.582c0.001,0.002,0.002,0.005,0.003,0.007c2.976,8.944,12.638,13.781,21.582,10.806
			c0.003-0.001,0.005-0.002,0.007-0.002l102.4-34.133c6.972-2.322,11.675-8.847,11.674-16.196v-102.4
			C414.59,7.641,406.949,0,397.523,0s-17.067,7.641-17.067,17.067v62.344C292.564-4.185,153.545-0.702,69.949,87.19
			s-80.114,226.911,7.779,310.508s226.911,80.114,310.508-7.779C435.905,339.799,457.179,270.152,445.651,201.95z"
                  />
                </g>
              </g>
            </svg>
            <p>Yeni Şarkı</p>
          </div>

          <div className="item">
            <svg
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              className="refreshButton"
            >
              <g>
                <g>
                  <path
                    d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
			v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
                  />
                </g>
              </g>
            </svg>

            <p>Kaydet</p>
          </div>
        </div>
      ) : (
        <></>
      )}

      {tab.t2 === "active" ? (
        <div className="dertDinliyici">
          <div className="sticky">
            <h3>Dert Dinliyici (Beta)</h3>
            <p>
              Burada son yazılan dertleri görebilir veya kendi derdinizi
              yazabilirsiniz.
            </p>
            <button
              onClick={() => setDertPaneli(true)}
              style={{ position: "sticky", top: 10, backgroundColor: "#111" }}
            >
              Derdini yaz
            </button>
          </div>
          <div className="dertler">
            <div className="dert_listesi">
              <h3 style={{ marginTop: 10, marginBottom: 10 }}>
                Son yazılanlar
              </h3>

              {isGetted ? (
                dert.map((val,key) => {
                  return (
                    <div key={key} className="derbeder">
                      <p className="gonderen">
                        {val.isim == null ? "Gizli Derbeder" : val.isim}
                        <span className="text-secondary "> - {val.sehir}</span>
                      </p>
                      <p>{val.mesaj}</p>
                    </div>
                  );
                })
              ) : (
                <div
                  className="flex center-y center-x text-center w-100"
                  color="#e67e22"
                  width="20"
                >
                  <Spinner />
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {tab.t3 === "active" ? (
        <div className="galeri">
          <p className="text-secondary text-center mt-5">
            Bu kısım yakında geliştirilecektir.
          </p>
        </div>
      ) : (
        <></>
      )}

      {tab.t4 === "active" ? (
        <div className="sarkiEkle mt-3 text-center">
          Eklemek istediğiniz şarkının youtube adresi : <br />{" "}
          <input
            value={istekSarki}
            placeholder="Şarkı"
            className="w-50"
            onChange={(e) => setIstekSarki(e.target.value)}
          />
          <br />
          <button
            className="w-25 mt-2"
            onClick={() => {
              istekEkle();
            }}
          >
            Ekle
          </button>
        </div>
      ) : (
        <></>
      )}

      {tab.t5 === "active" ? (
        <div className="Hakkımızda">
          <p className="text-secondary text-center mt-5">
            Bu uygulama <b className="text-white">Emir Tanır</b> tarafından
            geliştirilmiştir.
          </p>
          <p className="text-secondary text-center mt-1">
            İkonlar : flaticon.com
          </p>

          <button onClick={()=>{
            setUN(true)
          }} className="d-block mx-auto">Güncelleme Notları</button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
