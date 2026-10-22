// Sahne 38 — mit denetlendi: kahve sıvıya sayılır, ama sudan üstün olduğu söylenmiyor.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tB = c[1].bas - 0.1, tC = c[2].bas - 0.1;
  const pPanel = eout(ilerle(t, 0.2, 0.6));
  const [sc, al] = pop(t, K(1, "beats water"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={K(0, "coffee")} bitis={tC} capa={[960, 700]} konum={[1120, 850]} metin="COFFEE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "water")} capa={[590, 640]} konum={[470, 120]} metin="WATER" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={760} />
      <BaslikBlok t={t} bas={K(0, "myth") - 0.1} bitis={tC} satirlar={["THE MYTH", "CHECKED"]} x={1860} y={260} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "not supported")} bitis={tB} metin="NOT SUPPORTED FOR HABITUAL DRINKERS" x={1860} y={500} hiza="sag" genislik={560} boyut={36} agirlik={800} />
      {al > 0 && t < tC + 0.4 && (
        <div style={{ position: "absolute", right: 60, top: 640, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al * (1 - eout(ilerle(t, tC, 0.4))),
          display: "flex", alignItems: "center", gap: 16, background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999,
          padding: "10px 28px 10px 12px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
          <span style={{ width: 48, height: 48, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IkonYol ad="carpi" boyut={30} renk="#fff" kalinlik={7} />
          </span>
          <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert }}>NOT SHOWN TO BEAT WATER</span>
        </div>
      )}
      <BaslikBlok t={t} bas={K(2, "Water stays")} satirlar={["WATER STAYS", "THE SIMPLEST", "DRINK"]} x={1860} y={300} boyut={92} hiza="sag"
        renkler={[RENK.lacivert, RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S38;
