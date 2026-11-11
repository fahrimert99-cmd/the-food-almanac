// Sahne 12 — gözlemsel çalışmalar yemeği kişiden ayıramaz; NIH Klinik Merkezi'nde her öğün kontrol edildi.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Hap, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const son1 = K(1, "so the") - 0.1;
  const [sf, af] = pop(t, K(0, "food"), 0.5);
  const [sp_, ap] = pop(t, K(0, "person"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [80, 40, 1700], [230, 90, 1480])}>
        <Etiket t={t} bas={K(1, "NIH")} capa={[650, 690]} konum={[600, 330]} metin="NIH CLINICAL CENTER" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "controlled")} capa={[1190, 505]} konum={[1090, 270]} metin="EVERY MEAL CONTROLLED" renk={RENK.yesil} />
      </Kamera>
      {/* 1. cümle: yemek / kişi ayrılamaz */}
      <Baslik t={t} bas={K(0, "observational")} bitis={son1} metin="OBSERVATIONAL STUDIES" x={330} y={170} boyut={78} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 330, top: 255, display: "flex", alignItems: "center", gap: 22 }}>
        <div style={{ transform: `scale(${sf})`, transformOrigin: "0% 50%", opacity: af * (t < son1 ? 1 : 0) }}><Hap metin="FOOD" renk={RENK.mercan} boyut={34} /></div>
        <div style={{ transform: `scale(${sp_})`, transformOrigin: "0% 50%", opacity: ap * (t < son1 ? 1 : 0) }}><Hap metin="THE PERSON" renk={RENK.lacivert} boyut={34} /></div>
      </div>
      <Ikon t={t} bas={K(0, "separate")} bitis={son1} ad="soru" x={940} y={285} boyut={70} zemin={RENK.mercan} />
    </>
  );
};

export default S12;
