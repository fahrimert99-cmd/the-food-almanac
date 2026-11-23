// Sahne 18 — Tayvan çalışması: 80 yeni anne, çay grubu ve rutin bakım grubu.
import React from "react";
import { BaslikBlok, Etiket, Hap, KaynakEtiketi, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t80 = K(0, "80 women"), tCay = K(1, "chamomile tea"), tRutin = K(2, "routine care");
  const [s1, a1] = pop(t, tCay, 0.5);
  const [s2, a2] = pop(t, tRutin, 0.5);
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1760])}>
        <Etiket t={t} bas={tCay} capa={[990, 655]} konum={[1230, 560]} metin="CHAMOMILE TEA" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.4} />
      <BaslikBlok t={t} bas={t80} satirlar={["80 NEW", "MOTHERS"]} x={1330} y={200} boyut={96} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={t80 + 0.5} metin="chamomile tea for 2 weeks" x={1334} y={430} boyut={30} renk={RENK.gri} />
      <div style={{ position: "absolute", left: 1330, top: 700, transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1 }}>
        <Hap metin="HALF: TEA" renk={RENK.yesil} boyut={28} />
      </div>
      <div style={{ position: "absolute", left: 1330, top: 800, transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2 }}>
        <Hap metin="OTHERS: ROUTINE CARE" renk={RENK.gri} boyut={28} />
      </div>
    </>
  );
};

export default S18;
