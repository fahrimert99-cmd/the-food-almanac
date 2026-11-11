// Sahne 27 — evde yaşayan yaşlılar: mutfak, sağ panelde "net cevap yok" ve doktora sor.
import React from "react";
import { Baslik, Etiket, IkonYol, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pPanel = eout(ilerle(t, K(0, "older") - 0.4, 0.8));
  const [sq, aq] = pop(t, K(1, "doctor"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 60, 1740])}>
        <Etiket t={t} bas={K(0, "home")} capa={[690, 800]} konum={[330, 800]} metin="AT HOME" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={900} />
      <Baslik t={t} bas={K(0, "older")} bitis={c[1].bas - 0.1} metin="OLDER ADULTS" x={1860} y={330} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "live")} bitis={c[1].bas - 0.1} metin="LIVING AT HOME" x={1860} y={440} boyut={72} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "clear")} metin="NO CLEAR ANSWER" x={1860} y={330} boyut={84} hiza="sag" renk={RENK.mercan} />
      <Not t={t} bas={K(1, "answer")} metin="from this review" x={1860} y={400} hiza="sag" boyut={36} agirlik={800} />
      <div style={{ position: "absolute", right: 60, top: 560, display: "flex", alignItems: "center", gap: 16, transform: `scale(${sq})`,
        transformOrigin: "100% 50%", opacity: aq, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
        padding: "10px 28px 10px 14px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
        <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}><IkonYol ad="soru" boyut={28} renk="#fff" /></span>
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.lacivert }}>ASK YOUR DOCTOR</span>
      </div>
    </>
  );
};

export default S27;
