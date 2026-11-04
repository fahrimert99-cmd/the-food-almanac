// Sahne 39 — Consumer Reports: 28 çubuk test edildi; 28 küçük çubuk ikonu, kurşun + kadmiyum.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Panel, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 80, 1920], [0, 170, 1740]);
  const t28 = K(0, "28");
  const tHepsi = K(1, "every single");
  const [sl, al] = pop(t, K(0, "lead"), 0.5);
  const [sc, ac] = pop(t, K(0, "cadmium"), 0.5);
  const [sb, ab] = pop(t, K(1, "Both"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={pen} />
      <Panel a={1} taraf="sag" genislik={900} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={1.79} bitis={8} />
      <Etiket t={t} bas={K(0, "dark chocolate bars")} bitis={8} capa={[300, 450]} konum={[430, 190]} metin="DARK CHOCOLATE BARS" renk={RENK.altin} />
      <Baslik t={t} bas={t28} metin="28 BARS" x={1080} y={170} boyut={110} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={t28 + 0.15} metin="TESTED" x={1080} y={290} boyut={110} renk={RENK.lacivert} />
      {/* 28 küçük çubuk: 4 satır x 7 sütun, sırayla belirir; "every single" anında işaretlenir */}
      {Array.from({ length: 28 }, (_, i) => {
        const r = Math.floor(i / 7), c = i % 7;
        const [p, a] = pop(t, t28 + 0.1 + i * 0.07, 0.4);
        const isa = t >= tHepsi + i * 0.04;
        return (
          <div key={i} style={{ position: "absolute", left: 1090 + c * 100, top: 420 + r * 70, width: 80, height: 50, transform: `scale(${p})`, opacity: a,
            background: "#5A3A2E", borderRadius: 8, border: `3px solid ${RENK.murekkep}`, boxShadow: "inset 0 0 0 5px #6E4838" }}>
            {isa && <span style={{ position: "absolute", right: -7, top: -9, width: 20, height: 20, borderRadius: "50%", background: RENK.mercan, border: `3px solid ${RENK.kagitAcik}` }} />}
          </div>
        );
      })}
      <div style={{ position: "absolute", left: 1090, top: 735, display: "flex", gap: 20 }}>
        <div style={{ transform: `scale(${sl})`, transformOrigin: "0 50%", opacity: al }}><Hap metin="LEAD" renk={RENK.lacivert} boyut={28} /></div>
        <div style={{ transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: ac }}><Hap metin="CADMIUM" renk={RENK.altin} boyut={28} /></div>
      </div>
      <div style={{ position: "absolute", left: 1090, top: 830, transform: `scale(${sb})`, transformOrigin: "0 50%", opacity: ab }}>
        <Hap metin="BOTH IN EVERY BAR" renk={RENK.mercan} boyut={28} />
      </div>
    </>
  );
};

export default S39;
