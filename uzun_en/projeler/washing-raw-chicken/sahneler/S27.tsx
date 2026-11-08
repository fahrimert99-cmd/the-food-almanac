// Sahne 27 — "don't wash" mesajı: %93 durulamayı bıraktı, mesajsız grup %39 (anlatımdaki sayılar).
import React from "react";
import { BaslikBlok, CubukGrafik, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNc = K(0, "NC State");
  const tMesaj = K(1, "don't wash");
  const t93 = K(2, "Ninety-three");
  const t39 = K(2, "39");
  const [sh, ah] = pop(t, tNc - 0.1, 0.55);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={tMesaj} bitis={t93 - 0.1} capa={[640, 520]} konum={[1130, 330]} metin="DON'T WASH MESSAGE" renk={RENK.yesil} boyut={30} />
      </Kamera>
      {/* kaynak notu: aynı çalışma */}
      <div style={{ position: "absolute", left: 1010, top: 140, transform: `scale(${sh})`, transformOrigin: "0% 50%", opacity: ah * (1 - eout(ilerle(t, t93 - 0.35, 0.3))) }}>
        <Hap metin="SAME NC STATE STUDY" renk={RENK.altin} boyut={30} />
      </div>
      <BaslikBlok t={t} bas={t93 - 0.05} satirlar={["93% SKIPPED", "THE RINSE"]} x={1180} y={190} boyut={118}
        renkler={[RENK.koyuYesil, RENK.lacivert]} />
      <CubukGrafik t={t} bas={t93} maks={100} x={1230} y={560} w={560} h={300}
        cubuklar={[
          { etiket: "GOT MESSAGE", deger: 93, metin: "93%", renk: RENK.yesil, bas: t93 },
          { etiket: "NO MESSAGE", deger: 39, metin: "39%", renk: RENK.mercan, bas: t39 - 0.1 },
        ]} />
    </>
  );
};

export default S27;
