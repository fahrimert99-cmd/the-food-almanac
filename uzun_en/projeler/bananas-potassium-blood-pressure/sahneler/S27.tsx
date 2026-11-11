// Sahne 27 — sodyum/potasyum oranı: +%62 ve "bağlantı, kanıt değil".
import React from "react";
import { Baslik, Etiket, Hap, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNa = K(0, "sodium"), tK = K(0, "potassium"), tOran = K(0, "ratio"), tYuzde = K(0, "62 percent");
  const tGozlem = K(1, "observational"), tBag = K(1, "link"), tKanit = K(1, "not proof");
  const bit0 = s.cumleler[1].bas - 0.1;
  const [sc, al] = pop(t, 0.3, 0.5);
  const rOran = pop(t, tOran, 0.4)[1];
  const [s1, a1] = pop(t, tBag, 0.5);
  const [s2, a2] = pop(t, tKanit, 0.5);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [40, 40, 1840])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Etiket t={t} bas={tNa} bitis={bit0} capa={[735, 560]} konum={[700, 300]} metin="SODIUM" renk={RENK.lacivert} boyut={30} />
      <Etiket t={t} bas={tK} bitis={bit0} capa={[1300, 640]} konum={[1230, 420]} metin="POTASSIUM" renk={RENK.altin} boyut={30} />
      {/* oran kartı: masadaki kesik çizgi kalıntısını da örter */}
      <div style={{ position: "absolute", left: 960, top: 850, width: 560, height: 190, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.murekkep}`, borderRadius: 28, boxShadow: "0 8px 22px rgba(48,40,34,0.20)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, fontFamily: INTER, fontWeight: 800,
        color: RENK.murekkep }}>
        <div style={{ fontSize: 34, letterSpacing: 2 }}>SODIUM : POTASSIUM</div>
        <div style={{ fontSize: 30, letterSpacing: 6, color: RENK.mercan, opacity: rOran }}>RATIO</div>
      </div>
      <VurguRozet t={t} bas={tYuzde} vurgu="+62%" not="higher risk" x={960} y={90} renk={RENK.mercan} genislik={380} bitis={bit0} />
      {/* 2. cümle */}
      <Baslik t={t} bas={tGozlem} metin="OBSERVATIONAL DATA" x={960} y={170} boyut={92} renk={RENK.lacivert} hiza="orta" />
      <div style={{ position: "absolute", left: 0, right: 0, top: 290, display: "flex", justifyContent: "center", gap: 40 }}>
        <div style={{ transform: `scale(${s1})`, opacity: a1 }}><Hap metin="A LINK" renk={RENK.yesil} boyut={38} /></div>
        <div style={{ transform: `scale(${s2})`, opacity: a2 }}><Hap metin="NOT PROOF OF CAUSE" renk={RENK.mercan} boyut={38} /></div>
      </div>
    </>
  );
};

export default S27;
