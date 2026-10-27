// Sahne 54 — dört: etiketi oku
import React from "react";
import { ANTON, INTER, Baslik, Etiket, Hap, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDort = K(0, "four"), tBasl = K(1, "read");
  const tEv = K(2, "extra virgin"), tDavis = K(2, "2010"), tLabel = K(2, "what was on"), tEsit = K(2, "did not"), tIc = K(2, "inside");
  const tFark = K(3, "quality");
  const [sc, al] = pop(t, tDort, 0.5);
  const [s2, a2] = pop(t, tEsit, 0.5);
  const chip = (bas: number, metin: string, y: number, renk: string) => {
    const [c1, a1] = pop(t, bas, 0.5);
    return a1 > 0 ? (
      <div style={{ position: "absolute", left: 1500, top: y, transform: `translate(-50%, -50%) scale(${c1})`, opacity: a1 }}>
        <Hap metin={metin} renk={renk} boyut={32} />
      </div>
    ) : null;
  };
  const p = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        {/* ortadaki şişenin sahte etiketi: boş kâğıt etiket */}
        <div style={{ position: "absolute", left: 875, top: 505, width: 215, height: 100, borderRadius: 8, background: RENK.kagitAcik,
          border: `3px solid ${RENK.murekkep}`, opacity: 0.96, display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: ANTON, fontSize: 40, color: RENK.lacivert, letterSpacing: 1 }}>
          <span style={{ opacity: eout(ilerle(t, tEv, 0.4)) }}>EXTRA VIRGIN</span>
        </div>
      </Kamera>
      <Panel a={p} taraf="sol" genislik={640} />
      <Panel a={p} taraf="sag" genislik={760} />
      <div style={{ position: "absolute", left: 70, top: 130, width: 104, height: 104, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 66, transform: `scale(${sc})`, opacity: al }}>4</div>
      <Baslik t={t} bas={tBasl} metin="READ THE" x={70} y={330} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={tBasl + 0.18} metin="LABEL" x={70} y={450} boyut={110} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tEv} bitis={tDavis - 0.2} capa={[1010, 555]} konum={[1500, 330]} metin="EXTRA VIRGIN" renk={RENK.yesil} />
      <VurguRozet t={t} bas={tDavis} bitis={tLabel - 0.2} vurgu="2010" not="DAVIS TEST" x={1500} y={210} genislik={340} />
      {chip(tLabel, "ON THE LABEL", 330, RENK.altin)}
      {a2 > 0 && (
        <div style={{ position: "absolute", left: 1500, top: 430, transform: `translate(-50%, -50%) scale(${s2})`, opacity: a2,
          fontFamily: INTER, fontWeight: 800, fontSize: 80, lineHeight: 1, color: RENK.mercan }}>≠</div>
      )}
      {chip(tIc, "WHAT'S INSIDE", 540, RENK.mercan)}
      <Baslik t={t} bas={tFark} metin="QUALITY VARIES" x={1500} y={700} boyut={64} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tFark + 0.3} metin="BOTTLE TO BOTTLE" x={1500} y={775} boyut={40} renk={RENK.gri} hiza="orta" font="inter" agirlik={800} />
    </>
  );
};

export default S54;
