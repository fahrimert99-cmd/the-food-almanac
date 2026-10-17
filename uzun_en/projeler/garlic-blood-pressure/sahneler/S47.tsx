// Sahne 47 — Nokta 2: reçeteli ilaca devam, takviyeden önce doktora/eczacıya söyle.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tD = K(1, "tell");
  const tL = K(1, "especially");
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [80, 40, 1760], [150, 80, 1620])}>
        {/* kutu kapağındaki anlamsız yazıyı örten düz plaka */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <polygon points="495,308 950,190 1114,258 700,356" fill="#E9E3C8" stroke="#8C8470" strokeWidth={2} />
          <polygon points="515,314 945,206 1090,262 705,342" fill="none" stroke="#B5AD92" strokeWidth={1.5} />
        </svg>
        <Etiket t={t} bas={K(1, "medicine")} bitis={tD - 0.1} capa={[760, 560]} konum={[250, 640]} metin="KEEP PRESCRIBED MEDICINE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "garlic")} bitis={tL} capa={[1330, 470]} konum={[1260, 110]} metin="GARLIC SUPPLEMENT" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={0.05} vurgu="2" not="OF 5 POINTS" x={200} y={110} genislik={230} />
      <Baslik t={t} bas={tD} bitis={tL} metin="TELL YOUR" x={1860} y={170} boyut={70} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tD + 0.2} bitis={tL} metin="DOCTOR OR" x={1860} y={240} boyut={70} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "pharmacist")} bitis={tL} metin="PHARMACIST" x={1860} y={310} boyut={70} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tL} metin="ESPECIALLY IF YOU USE" x={1402} y={105} boyut={26} agirlik={800} />
      <Liste t={t} x={1400} y={145} aralik={62} boyut={28} genislik={480} isaret="nokta"
        ogeler={[
          { bas: K(1, "warfarin,"), metin: "WARFARIN", renk: RENK.altin },
          { bas: K(1, "aspirin"), metin: "ASPIRIN", renk: RENK.altin },
          { bas: K(1, "another"), metin: "ANOTHER BLOOD THINNER", renk: RENK.altin },
        ]} />
    </>
  );
};

export default S47;
