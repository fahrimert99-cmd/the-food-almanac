// Sahne 18 — 2010 çalışması: 50 kişi, günde dört kapsül, 12 hafta. Kitap (sahte yazı) kâğıt yamayla örtülü.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t50 = K(0, "50"), tTed = K(0, "treated"), tHala = K(0, "still");
  const tYarim = K(1, "Half"), tDort = K(1, "four"), tPlas = K(2, "Half"), t12 = K(2, "12");
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [20, 10, 1880], [80, 40, 1760])}>
        {/* açık kitaptaki anlamsız yazıyı örten kâğıt yama */}
        <div style={{ position: "absolute", left: 150, top: 585, width: 1200, height: 560, background: kagit(1),
          boxShadow: `0 0 50px 50px ${kagit(1)}` }} />
        <Etiket t={t} bas={tYarim} bitis={t12 + 3} capa={[1250, 470]} konum={[1170, 105]} metin="AGED GARLIC EXTRACT" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={tPlas} capa={[1600, 540]} konum={[1560, 860]} metin="MATCHING PLACEBO" renk={RENK.altin} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "2010")} metin="2010 TRIAL" x={150} y={690} boyut={76} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t50 - 0.05} vurgu="50" not="PEOPLE" x={300} y={770} genislik={300} boyut={90} />
      <Liste t={t} x={500} y={780} aralik={104} boyut={36} genislik={760} isaret="onay" ogeler={[
        { bas: tTed - 0.05, metin: "TREATED FOR HIGH BP", bitis: tYarim - 0.2 },
        { bas: tHala - 0.05, metin: "STILL UNCONTROLLED", renk: RENK.mercan, bitis: tYarim - 0.2 },
      ]} />
      <VurguRozet t={t} bas={tDort - 0.05} vurgu="4" not="CAPSULES A DAY" x={640} y={770} genislik={340} boyut={90} />
      <VurguRozet t={t} bas={t12 - 0.05} vurgu="12" not="WEEKS" x={1020} y={770} genislik={300} boyut={90} renk={RENK.yesil} />
    </>
  );
};

export default S18;
