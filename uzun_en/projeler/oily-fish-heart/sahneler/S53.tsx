// Sahne 53 — güvenlik notu: ilaç etkileşimleri
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(2, "never");
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        {/* kutudaki anlamsız yazı: kapak rengiyle örtülür */}
        <div style={{ position: "absolute", left: 985, top: 490, width: 135, height: 66, borderRadius: "50%",
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #E9DDBF 0%, #E4D6B2 70%, #D8C9A2 100%)" }} />
        <Etiket t={t} bas={K(1, "medicines")} bitis={K(2, "talk")} capa={[780, 400]} konum={[780, 150]} metin="OTHER MEDICINES" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "doctor")} bitis={bit} capa={[420, 665]} konum={[420, 880]} metin="DOCTOR OR PHARMACIST" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "safety")} metin="SAFETY" x={1860} y={170} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "note.")} metin="FIRST" x={1860} y={290} boyut={110} renk={RENK.mercan} hiza="sag" />
      <Not t={t} bas={K(1, "interact")} metin="Fish oil can interact with other medicines and conditions" x={1860} y={400} hiza="sag" genislik={520} boyut={32} />
      <Liste t={t} x={1260} y={560} aralik={78} isaret="nokta" genislik={600}
        ogeler={[
          { bas: K(2, "blood"), metin: "BLOOD THINNERS", renk: RENK.altin },
          { bas: K(2, "irregular"), metin: "IRREGULAR HEARTBEAT", renk: RENK.altin },
          { bas: K(2, "triglycerides,"), metin: "HIGH TRIGLYCERIDES", renk: RENK.altin },
        ]} />
      <Ikon t={t} bas={bit} ad="uyari" x={1290} y={880} boyut={80} zemin={RENK.mercan} />
      <Not t={t} bas={bit} metin="NEVER STOP A PRESCRIBED MEDICINE ON YOUR OWN" x={1350} y={845} boyut={30} genislik={500} agirlik={800} />
    </>
  );
};
export default S53;
