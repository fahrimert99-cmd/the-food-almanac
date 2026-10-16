// Sahne 43 — Macan 2006 pilot çalışması (varfarin)
import React from "react";
import { AltSis, BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, einout, ilerle, kagit,
  kameraYolu, kelimeZamani } from "../kutuphane";

// kâğıt rengi yama: görseldeki sahte yazı satırlarını örter
const Yama: React.FC<{ x: number; y: number; w: number; h: number }> = ({ x, y, w, h }) => (
  <div style={{ position: "absolute", left: x, top: y, width: w, height: h,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 70%, ${kagit(0)} 100%)` }} />
);

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pPanel = einout(ilerle(t, 0.1, 0.8));
  const tKapat = c[2].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Yama x={470} y={110} w={1000} h={90} />
        <Yama x={470} y={628} w={1000} h={52} />
        <Etiket t={t} bas={K(1, "aged")} bitis={tKapat} capa={[650, 440]} konum={[740, 655]} metin="AGED GARLIC EXTRACT" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={K(1, "placebo")} bitis={tKapat} capa={[1330, 450]} konum={[1300, 655]} metin="PLACEBO" renk={RENK.altin} boyut={26} />
      </Kamera>
      <AltSis a={0.9} />
      <Panel a={pPanel} taraf="sag" genislik={600} />
      <BaslikBlok t={t} bas={K(0, "mixed")} bitis={c[1].bas + 0.2} satirlar={["MIXED,", "PARTLY", "REASSURING"]} x={1860} y={330}
        boyut={86} hiza="sag" renkler={[RENK.lacivert, RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(1, "52")} bitis={tKapat} vurgu="52" not="PEOPLE ON WARFARIN" x={1660} y={230} genislik={400} />
      <VurguRozet t={t} bas={K(1, "12")} bitis={tKapat} vurgu="12" not="WEEKS" x={1660} y={500} genislik={400} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={K(2, "no")} satirlar={["NO", "INCREASED", "BLEEDING"]} x={1860} y={300} boyut={84} hiza="sag"
        renkler={[RENK.lacivert, RENK.lacivert, RENK.koyuYesil]} />
      <Ikon t={t} bas={K(2, "either")} ad="onay" x={1660} y={640} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S43;
