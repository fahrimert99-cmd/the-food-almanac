import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, MARKA, Not, Panel, RENK, SP, VurguRozet, eout,
  ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Sahne 1 — kale/ıspanak + hap şişesi; sağda boş kâğıda rozetler ve başlık
const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bitisEt = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 20, 1800])}>
        <Etiket t={t} bas={K(0, "warfarin,")} bitis={bitisEt} capa={[1000, 540]} konum={[820, 150]} metin="WARFARIN" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "spinach")} bitis={bitisEt} capa={[973, 693]} konum={[1000, 880]} metin="SPINACH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "kale.")} bitis={bitisEt} capa={[467, 533]} konum={[360, 150]} metin="KALE" renk={RENK.yesil} />
      </Kamera>
      {/* görselin sağ kenarındaki sert kesiği yumuşat */}
      <div style={{ position: "absolute", left: 1020, top: 0, bottom: 0, width: 160, background: `linear-gradient(to right, ${kagit(0)}, ${kagit(1)})` }} />
      <div style={{ position: "absolute", left: 1180, top: 0, bottom: 0, right: 0, background: kagit(1) }} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <VurguRozet t={t} bas={K(1, "12")} vurgu="12" not="adults in the trial" x={1520} y={110} genislik={420} />
      <VurguRozet t={t} bas={K(1, "80")} vurgu="–80%" not="vitamin K intake" x={1520} y={330} genislik={420} renk={RENK.mercan} />
      <BaslikBlok t={t} bas={K(1, "pushed")} satirlar={s.meta.baslik?.satirlar ?? []} x={1180} y={690} boyut={100}
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S01;
