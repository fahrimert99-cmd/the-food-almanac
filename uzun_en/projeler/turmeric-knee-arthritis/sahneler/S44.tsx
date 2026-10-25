// Sahne 44 — Kurkumin: hafif antiplatelet etki, takviye uyarısı. Sol üstte başlıklar, sağda kapsül şişesi.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Şişe etiketindeki anlamsız rakamlar için etiket renginde yama
const YAMA = "radial-gradient(ellipse 50% 50% at 50% 50%, #FAF9F5 0%, #FAF9F5 85%, rgba(250,249,245,0) 100%)";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // alt kenardaki sahte çizgiler pencerenin dışında kalır (y < 1020)
  const pen = kameraYolu(t, s.sure, [60, 10, 1780], [170, 30, 1640]);
  const tCur = K(0, "Curcumin");
  const tAnti = K(0, "antiplatelet");
  const tBleed = K(0, "bleeding risk");
  const tSupp = K(1, "supplements");
  const tFood = K(1, "turmeric in food");
  const tNo = K(1, "no one");
  const [sc, al] = pop(t, tBleed, 0.5);
  return (
    <>
      <Kamera gorsel="tam/44" pencere={pen}>
        <div style={{ position: "absolute", left: 1553, top: 474, width: 60, height: 330, background: "#FAF9F5" }} />
        <div style={{ position: "absolute", left: 1350, top: 735, width: 140, height: 62, background: YAMA }} />
        <Etiket t={t} bas={tCur} bitis={3.9} capa={[1380, 310]} konum={[1010, 150]} metin="CURCUMIN" renk={RENK.altin} boyut={34} />
        <Etiket t={t} bas={tSupp} bitis={11.2} capa={[1370, 300]} konum={[1010, 140]} metin="SUPPLEMENTS" renk={RENK.mercan} boyut={34} />
        <Etiket t={t} bas={tFood} capa={[700, 600]} konum={[1010, 560]} metin="TURMERIC IN FOOD" renk={RENK.yesil} boyut={34} />
      </Kamera>
      <BaslikBlok t={t} bas={tAnti} bitis={7.1} satirlar={["MILD", "ANTIPLATELET"]} x={70} y={140} boyut={86}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <div style={{ position: "absolute", left: 70, top: 300, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al * sol(t, 7.1) }}>
        <Hap metin="ADDS TO BLEEDING RISK" renk={RENK.mercan} boyut={36} />
      </div>
      <BaslikBlok t={t} bas={tNo} satirlar={["NEVER STOP A", "PRESCRIBED MEDICINE", "ON YOUR OWN"]} x={70} y={130} boyut={72}
        renkler={[RENK.lacivert, RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S44;
