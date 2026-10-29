// Sahne 53 — adım 4: direnç egzersizi; sağ sütunda başlık ve notlar.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sn, an] = pop(t, 0.0, 0.5);
  const tDutch = K(2, "dutch");
  const tSon = tDutch - 0.2;
  const sag = (bas: number, y: number, metin: string, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <div style={{ position: "absolute", right: 60, top: y, transform: `translate(0, -50%) scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
        <Hap metin={metin} renk={renk} boyut={32} />
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [20, 10, 1820], [90, 50, 1700])}>
        <Etiket t={t} bas={K(1, "bands,")} bitis={tSon} capa={[830, 890]} konum={[690, 770]} metin="BANDS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "weights")} bitis={tSon} capa={[1190, 850]} konum={[1500, 700]} metin="WEIGHTS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "body-weight")} bitis={tSon} capa={[430, 700]} konum={[330, 430]} metin="BODY-WEIGHT MOVES" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 1350, top: 130, width: 100, height: 100, borderRadius: "50%", background: RENK.altin, color: "#fff",
        transform: `scale(${sn})`, opacity: an, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 66 }}>4</div>
      <Baslik t={t} bas={K(1, "resistance")} metin="LIFT" x={1860} y={320} boyut={110} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "twice")} metin="TWICE A WEEK" x={1860} y={440} boyut={96} hiza="sag" renk={RENK.koyuYesil} />
      {sag(tDutch, 590, "DUTCH TRIAL", RENK.lacivert)}
      {sag(K(2, "supervised"), 670, "SUPERVISED", RENK.yesil)}
      {sag(K(3, "doctor"), 780, "ASK YOUR DOCTOR", RENK.altin)}
    </>
  );
};

export default S53;
