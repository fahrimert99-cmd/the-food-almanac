// Sahne 31 — Rickman incelemesi: karotenoidler
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Parcaciklar, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        {/* alttaki sahte imza örtülür */}
        <div style={{ position: "absolute", left: 700, top: 980, width: 520, height: 100,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "Rickman")} />
      <Etiket t={t} bas={K(0, "carotenoids")} bitis={K(0, "similar") + 2.2} capa={[900, 560]} konum={[450, 260]} metin="CAROTENOIDS" renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(0, "similar")} bitis={K(0, "often") - 0.1} satirlar={["GENERALLY", "SIMILAR"]} x={1860} y={170} boyut={88}
        hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <BaslikBlok t={t} bas={K(0, "often")} satirlar={["OFTEN HIGHER", "IN CANNED"]} x={1860} y={170} boyut={88}
        hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} bitis={K(0, "possibly") - 0.1} />
      <Etiket t={t} bas={K(0, "possibly")} bitis={12.6} capa={[420, 560]} konum={[450, 260]} metin="HOW IT WAS MEASURED" renk={RENK.lacivert} />
      <Etiket t={t} bas={K(0, "heat")} capa={[920, 480]} konum={[450, 260]} metin="HEAT FREES THEM" renk={RENK.mercan} />
      <Parcaciklar t={t} bas={K(0, "frees")} kaynak={[920, 560]} hedef={[920, 300]} adet={18} omur={1.6} tohum="s31" />
    </>
  );
};

export default S31;
