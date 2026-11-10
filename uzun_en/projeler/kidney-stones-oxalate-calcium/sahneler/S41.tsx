// Sahne 41 — Su standart öneri; kalp/böbrek yetmezliği ve idrar söktürücüde doktora danış.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sağ sütundaki durum hapı (ekran koordinatı)
const Durum: React.FC<{ t: number; bas: number; metin: string; y: number }> = ({ t, bas, metin, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1300, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
      <Hap metin={metin} renk={RENK.mercan} boyut={32} />
    </div>
  );
};

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cik = c[1].bas - 0.1;
  const [sk, ak] = pop(t, K(0, "low risk") , 0.5);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1860], [50, 40, 1760])}>
        <Etiket t={t} bas={K(0, "Water")} bitis={cik} capa={[690, 330]} konum={[1000, 170]} metin="WATER" renk={RENK.yesil} />
        {ak > 0 && t < cik && (
          <div style={{ position: "absolute", left: 1000, top: 250, transform: `translate(-50%,-50%) scale(${sk})`, opacity: ak }}>
            <Hap metin="LOW RISK" renk={RENK.yesil} boyut={28} />
          </div>
        )}
        <Etiket t={t} bas={K(1, "ask your doctor")} capa={[670, 700]} konum={[1380, 640]} metin="YOUR DOCTOR" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(1, "if you have")} metin="ASK FIRST" x={1300} y={215} boyut={130} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "if you have") + 0.3} metin="IF YOU HAVE…" x={1304} y={290} boyut={28} renk={RENK.gri} agirlik={800} />
      <Durum t={t} bas={K(1, "heart failure")} metin="HEART FAILURE" y={370} />
      <Durum t={t} bas={K(1, "kidney failure")} metin="KIDNEY FAILURE" y={455} />
      <Durum t={t} bas={K(1, "water pills")} metin="WATER PILLS" y={540} />
    </>
  );
};

export default S41;
