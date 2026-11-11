// Sahne 22 — öğün başına 25–30 g; kas yapımını "açma" anahtarı
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSayi = K(0, "25");
  const tPro = K(0, "protein");
  const tOgun = K(0, "meal");
  const tYasli = K(0, "older adults");
  const tAc = K(0, "switch");
  const tBolum = K(1, "meal-spreading");
  const tGor = K(1, "see");
  const pAc = eout(ilerle(t, tAc + 0.15, 0.7));
  const [sc, al] = pop(t, tBolum, 0.5);
  const [, alAc] = pop(t, tAc, 0.5);
  const renkAc = pAc > 0.5 ? RENK.yesil : "#B9B4A8";
  const sagX = 1720;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        {/* ölçü kabındaki sahte rakamlar kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1340, top: 140, width: 400, height: 440, background: kagit(1),
          boxShadow: `0 0 50px 50px ${kagit(1)}` }} />
      </Kamera>
      <VurguRozet t={t} bas={tSayi} vurgu="25–30 G" not="PER MEAL" x={440} y={80} genislik={440} boyut={100} renk={RENK.koyuYesil} bitis={9.3} />
      <Etiket t={t} bas={tPro} bitis={9.3} capa={[560, 460]} konum={[200, 640]} metin="PROTEIN" renk={RENK.mercan} />
      <Etiket t={t} bas={tOgun} bitis={9.3} capa={[500, 760]} konum={[200, 790]} metin="PER MEAL" renk={RENK.altin} />
      <Baslik t={t} bas={tYasli} metin="OLDER ADULTS" x={sagX} y={590} boyut={34} renk={RENK.altin} hiza="orta" font="inter" agirlik={800} aralik={4} />
      <Baslik t={t} bas={tAc} metin="MUSCLE BUILDING" x={sagX} y={660} boyut={42} renk={RENK.lacivert} hiza="orta" />
      {/* açma anahtarı: söylenince kapalıdan açığa döner */}
      <div style={{ position: "absolute", left: sagX - 100, top: 720, width: 200, height: 100, borderRadius: 50, opacity: alAc,
        background: renkAc, boxShadow: "0 8px 22px rgba(48,40,34,0.22)", border: `4px solid ${RENK.kagitAcik}` }}>
        <div style={{ position: "absolute", top: 8, left: 8 + pAc * 100, width: 76, height: 76, borderRadius: "50%", background: "#fff",
          boxShadow: "0 3px 8px rgba(48,40,34,0.35)" }} />
      </div>
      <div style={{ position: "absolute", left: 960, top: 112, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="MEAL-SPREADING PART" renk={RENK.lacivert} boyut={28} />
      </div>
      <Ikon t={t} bas={tGor} ad="soru" x={1250} y={112} boyut={72} zemin={RENK.altin} />
    </>
  );
};

export default S22;
