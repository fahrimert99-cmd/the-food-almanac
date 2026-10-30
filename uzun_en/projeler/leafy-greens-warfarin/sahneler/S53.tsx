// Sahne 53 — İpucu 5: INR kontrolleri, herkese söyle, K vitamini listesi. Broşürdeki bozuk yazı yamayla örtülü.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, Kamera, RENK, SP, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBes = K(0, "five"), tInr = K(1, "INR checks"), tTell = K(1, "tell every"), tWarf = K(1, "take warfarin");
  const tListe = K(2, "list of vitamin k"), tMed = K(2, "MedlinePlus");
  const [sb, ab] = pop(t, tBes, 0.5);
  const [sm, am] = pop(t, tMed, 0.55);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [40, 30, 1840], [120, 80, 1680])}>
        {/* broşürdeki bozuk yazıyı örten, kâğıt rengi çizgili kart */}
        <div style={{ position: "absolute", left: 904, top: 456, width: 330, height: 120, transform: "rotate(27deg)", transformOrigin: "0 0",
          background: "#F4EFE2", border: `2px solid ${RENK.murekkep}`, padding: "16px 18px", boxSizing: "border-box" }}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{ height: 3, width: i === 3 ? "55%" : "100%", background: RENK.murekkep, opacity: 0.35, marginBottom: 20 }} />
          ))}
        </div>
        <Etiket t={t} bas={tWarf} bitis={tListe - 0.2} capa={[900, 600]} konum={[1150, 310]} metin="I TAKE WARFARIN" renk={RENK.mercan} boyut={30} />
        <Etiket t={t} bas={tListe} capa={[1120, 560]} konum={[1120, 300]} metin="VITAMIN K FOOD LIST" renk={RENK.yesil} boyut={30} />
      </Kamera>
      <div style={{ position: "absolute", left: 80, top: 90, width: 90, height: 90, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 60,
        transform: `scale(${sb})`, opacity: ab }}>5</div>
      <Baslik t={t} bas={tInr} bitis={tListe - 0.2} metin="KEEP YOUR INR CHECKS" x={960} y={130} boyut={72} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1480, top: 130, transform: `translate(-50%, -50%) scale(${sm})`, opacity: am }}>
        <Hap metin="MEDLINEPLUS" renk={RENK.altin} boyut={32} />
      </div>
    </>
  );
};

export default S53;
