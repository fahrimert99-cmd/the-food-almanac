// Sahne 40 — belirsiz olanlar: sisli bağ yolu; başlık, etiketler ve "1'in biraz altı" şeması.
import React from "react";
import { Baslik, Etiket, Hap, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "uncertain?"), tHafif = K(1, "light"), tYardim = K(1, "help"), tTemiz = K(2, "cleaner");
  const tAlt = K(3, "leaned"), tNS = K(3, "not");
  const pK = eout(ilerle(t, tAlt - 0.1, 0.5));
  const x0 = 1280, x1 = 1800, xBir = 1640;
  const xIsaret = xBir - 60 * eout(ilerle(t, K(3, "below"), 0.8));
  const [sc, al] = pop(t, tNS, 0.5);
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 30, 1760])}>
        <Etiket t={t} bas={tHafif} capa={[420, 430]} konum={[760, 300]} metin="LIGHT DRINKING" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={tTemiz} capa={[1010, 700]} konum={[1230, 300]} metin="NOT SHOWN YET" renk={RENK.lacivert} boyut={28} />
      </Kamera>
      <Baslik t={t} bas={tBas} metin="WHAT IS UNCERTAIN?" x={960} y={110} boyut={92} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={tYardim} metin="light drinking could still help a little" x={960} y={186} boyut={36} hiza="orta" bitis={tTemiz + 1.5} />
      {pK > 0 && (
        <div style={{ position: "absolute", left: 1210, top: 540, width: 640, height: 340, opacity: pK, borderRadius: 26,
          background: "#FCF8EC", border: `4px solid ${RENK.lacivert}`, boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
          <div style={{ position: "absolute", left: 0, right: 0, top: 18, textAlign: "center", fontFamily: INTER, fontWeight: 800,
            fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>LOW-VOLUME RESULT</div>
          <svg width={640} height={340} style={{ position: "absolute", left: 0, top: 0 }}>
            <line x1={x0 - 1210} x2={x1 - 1210} y1={150} y2={150} stroke={RENK.lacivert} strokeWidth={4} />
            <line x1={xBir - 1210} x2={xBir - 1210} y1={108} y2={192} stroke={RENK.lacivert} strokeWidth={4} strokeDasharray="8 6" />
            <circle cx={xIsaret - 1210} cy={150} r={16} fill={RENK.altin} stroke="#fff" strokeWidth={4} />
          </svg>
          <div style={{ position: "absolute", left: xBir - 1210 - 150, top: 196, width: 300, textAlign: "center", fontFamily: INTER, fontWeight: 800,
            fontSize: 24, whiteSpace: "nowrap", color: RENK.lacivert }}>1 = NO DIFFERENCE</div>
          <div style={{ position: "absolute", left: 20, top: 240, fontFamily: INTER, fontWeight: 700, fontSize: 20, color: RENK.gri }}>ILLUSTRATIVE</div>
          <div style={{ position: "absolute", left: 0, right: 0, top: 276, display: "flex", justifyContent: "center", opacity: al, transform: `scale(${sc})` }}>
            <Hap metin="NOT SIGNIFICANT" renk={RENK.mercan} boyut={26} />
          </div>
        </div>
      )}
    </>
  );
};

export default S40;
