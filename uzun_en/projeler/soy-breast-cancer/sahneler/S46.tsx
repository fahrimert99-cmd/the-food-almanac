// Sahne 46 — soya tüketimini ölçmenin zorluğu.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Ambalajdaki bozuk yazıyı örten ambalaj rengi yamalar (görsel koordinatı)
const Yama: React.FC<{ x: number; y: number; w: number; h: number; aci?: number }> = ({ x, y, w, h, aci = 0 }) => (
  <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h, borderRadius: "50%",
    transform: `rotate(${aci}deg)`,
    background: "radial-gradient(ellipse, #E0E0DD 0%, #E0E0DD 60%, rgba(217,217,214,0) 100%)" }} />
);

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYanlis = K(1, "counted");
  const [sc, al] = pop(t, tYanlis, 0.5);
  const tSoy = K(1, "soy");
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Yama x={1640} y={497} w={100} h={64} aci={-20} />
        <Yama x={1680} y={640} w={150} h={44} aci={-45} />
        <Etiket t={t} bas={K(0, "questionnaires")} bitis={K(1, "People") - 0.1 + 0.2} capa={[330, 520]} konum={[330, 900]} metin="FOOD QUESTIONNAIRE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "misremember")} bitis={tSoy - 0.1} capa={[330, 520]} konum={[330, 900]} metin="MISREMEMBERED MEALS" renk={RENK.mercan} />
        <Etiket t={t} bas={tSoy} capa={[1693, 740]} konum={[1560, 910]} metin="PACKAGED FOODS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Food")} metin="COUNTING SOY IS HARD" x={60} y={92} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1200, top: 90, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="MAY BE COUNTED WRONGLY" renk={RENK.mercan} />
      </div>
    </>
  );
};

export default S46;
