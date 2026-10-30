// Sahne 48 — varfarin: sağ sütunda başlık, rozet, klinik notu; takvim kusuru kâğıt yamayla örtülü.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const [sc, al] = pop(t, K(3, "Tell"), 0.55);
  // takvimin okunmaz rakamlarını örten çokgen (hap kutusunun üst kenarını izler)
  const yama = "0px 0px, 1010px 0px, 1010px 345px, 780px 345px, 747px 322px, 590px 290px, 480px 305px, 400px 338px, 307px 358px, 240px 440px, 215px 450px, 0px 70px";
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1780])}>
        <div style={{ position: "absolute", inset: 0, background: kagit(1), clipPath: `polygon(${yama})` }} />
        <Etiket t={t} bas={K(0, "blood thinner")} capa={[560, 440]} konum={[940, 300]} metin="BLOOD THINNER" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "50 gram")} capa={[860, 640]} konum={[960, 470]} metin="50 G PORTION" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin="MedlinePlus" bas={K(1, "MedlinePlus")} />
      <BaslikBlok t={t} bas={K(0, "warfarin")} satirlar={[b.satirlar[0]]} x={1200} y={180} boyut={104} renkler={[RENK.mercan]} />
      <BaslikBlok t={t} bas={K(1, "keeping")} satirlar={[b.satirlar[1]]} x={1200} y={290} boyut={104} renkler={[RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(2, "30")} vurgu={b.vurgu ?? ""} not={b.not} x={1500} y={430} genislik={500} boyut={110} />
      <div style={{ position: "absolute", left: 1200, top: 730, width: 640, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%",
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 28, padding: "16px 28px", fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 1.5, lineHeight: 1.3, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
        TELL YOUR ANTICOAGULATION CLINIC
      </div>
    </>
  );
};

export default S48;
