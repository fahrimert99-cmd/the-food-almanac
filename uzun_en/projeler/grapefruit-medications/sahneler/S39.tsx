// Sahne 39 — açık defter: sol sayfada başlık, sağ sayfada mektubun üç vuruşu.
import React from "react";
import { ANTON, Baslik, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const KART: React.CSSProperties = {
  position: "absolute", background: "#FCF8EC", border: `4px solid ${RENK.lacivert}`, borderRadius: 22,
  boxShadow: "0 12px 30px rgba(48,40,34,0.22)",
};

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "experts");
  const tMektup = K(1, "researchers");
  const tKanit = K(1, "validated");
  const tListe = K(1, "predicted");
  const tFlorida = K(2, "Florida");
  const tCitrus = K(2, "Citrus");
  const aSol = eout(ilerle(t, tBaslik - 0.2, 0.5));
  const aSag = eout(ilerle(t, tMektup - 0.1, 0.5));
  const [sc2, al2] = pop(t, tListe, 0.5);
  const [sc3, al3] = pop(t, tFlorida, 0.5);
  return (
    <>
      <Kamera gorsel={s.meta.gorsel!} pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={tCitrus} capa={[225, 840]} konum={[470, 650]} metin="CITRUS" renk={RENK.mercan} />
      </Kamera>
      {/* sol sayfa: başlık kartı */}
      <div style={{ ...KART, left: 370, top: 230, width: 540, height: 300, opacity: aSol, transform: `translateY(${(1 - aSol) * 16}px)` }} />
      <Baslik t={t} bas={tBaslik} metin="DO EXPERTS" x={410} y={340} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={tBaslik + 0.2} metin="AGREE?" x={410} y={452} boyut={104} renk={RENK.koyuYesil} />
      {/* sağ sayfa: mektup kartı */}
      <div style={{ ...KART, left: 1010, top: 170, width: 600, height: 640, opacity: aSag, transform: `translateY(${(1 - aSag) * 16}px)` }} />
      <div style={{ position: "absolute", left: 1050, top: 205, width: 520, opacity: aSag, fontFamily: INTER, fontWeight: 800, fontSize: 28,
        letterSpacing: 3, color: RENK.altin }}>LETTER · SAME JOURNAL</div>
      <div style={{ position: "absolute", left: 1050, top: 255, width: 520, height: 4, background: RENK.altin, opacity: aSag }} />
      {t >= tKanit && (
        <div style={{ position: "absolute", left: 1050, top: 290, width: 520, opacity: eout(ilerle(t, tKanit, 0.5)),
          transform: `translateX(${(1 - eout(ilerle(t, tKanit, 0.5))) * -30}px)`, fontFamily: ANTON, fontSize: 60, lineHeight: 1.1, color: RENK.lacivert }}>
          NO VALIDATED EVIDENCE OF SERIOUS HARM
        </div>
      )}
      {t >= tListe && (
        <div style={{ position: "absolute", left: 1050, top: 535, width: 520, opacity: al2, transform: `scale(${sc2})`, transformOrigin: "0 50%",
          background: RENK.lacivert, borderRadius: 16, padding: "14px 22px", fontFamily: INTER, fontWeight: 800, fontSize: 32,
          letterSpacing: 1, color: "#fff" }}>LIST = PREDICTED RISK</div>
      )}
      {t >= tFlorida && (
        <div style={{ position: "absolute", left: 1050, top: 660, width: 520, opacity: al3, transform: `scale(${sc3})`, transformOrigin: "0 50%",
          border: `3px solid ${RENK.altin}`, borderRadius: 16, padding: "12px 22px", fontFamily: INTER, fontWeight: 800, fontSize: 30,
          color: RENK.altin, background: "#FFF9E8" }}>TIES: FLORIDA DEPT. OF CITRUS</div>
      )}
    </>
  );
};

export default S39;
