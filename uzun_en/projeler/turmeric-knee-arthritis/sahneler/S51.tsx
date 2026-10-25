// Sahne 51 — Beş: reçeteli tedaviyi sürdür; baharat tedavi değildir
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, Ikon, INTER, Kamera, Not, RENK, SP, einout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBes = K(0, "Five"), tTedavi = K(1, "treatment"), tAsci = K(2, "Turmeric"), tDegil = K(2, "not a");
  const [sc, al] = pop(t, tBes, 0.5);
  const cik = tDegil - 0.15;
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1760])}>
        <Etiket t={t} bas={tTedavi} bitis={cik} capa={[1300, 500]} konum={[1500, 150]} metin="PRESCRIBED TREATMENT" renk={RENK.yesil} />
        <Etiket t={t} bas={tAsci} bitis={cik} capa={[560, 440]} konum={[330, 250]} metin="TURMERIC IN COOKING" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 80, top: 80, width: 84, height: 84, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 58,
        transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>5</div>
      <BaslikBlok t={t} bas={K(1, "Keep")} bitis={tAsci - 0.2} satirlar={["KEEP YOUR", "TREATMENT"]} x={90} y={250} boyut={84} />
      <Baslik t={t} bas={tDegil} metin="NOT A TREATMENT" x={90} y={250} boyut={80} renk={RENK.mercan} />
      <Ikon t={t} bas={tDegil + 0.2} ad="carpi" x={700} y={110} boyut={80} zemin={RENK.mercan} />
      <Not t={t} bas={K(2, "no supplement")} metin="No supplement in place of medical care" x={90} y={330} boyut={32} genislik={560} agirlik={800} />
    </>
  );
};

export default S51;
