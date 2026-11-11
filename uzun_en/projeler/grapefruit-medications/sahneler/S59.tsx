// Sahne 59 — özet: dozu aralamak çözmez, enzim bir gün ve fazlası engelli kalır.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKapat = K(1, "Not") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 60, 1740])}>
        {/* kadran üzerindeki anlamsız küçük yazıları örten yamalar */}
        <div style={{ position: "absolute", left: 926, top: 163, width: 68, height: 20, borderRadius: 8, background: "#F1EBD6" }} />
        <div style={{ position: "absolute", left: 926, top: 297, width: 68, height: 20, borderRadius: 8, background: "#F1EBD6" }} />
        <Etiket t={t} bas={K(0, "doses")} bitis={3.6} capa={[704, 930]} konum={[420, 790]} metin="PILL" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "blocked")} bitis={tKapat} capa={[960, 830]} konum={[1440, 790]} metin="ENZYME STAYS BLOCKED" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "ask")} capa={[704, 930]} konum={[380, 700]} metin="ASK YOUR PHARMACIST" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Spacing")} bitis={tKapat} satirlar={["SPACING", "THE DOSES"]} x={80} y={250} boyut={96} />
      <Baslik t={t} bas={K(0, "fix")} bitis={tKapat} metin="DOESN'T FIX IT" x={80} y={450} boyut={64} renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(0, "up")} bitis={tKapat} vurgu="A DAY+" not="enzyme stays blocked" x={1560} y={230} genislik={420} />
      <BaslikBlok t={t} bas={K(1, "every")} satirlar={["NOT EVERY DRUG", "IS AFFECTED"]} x={1860} y={170} boyut={78} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S59;
