// Sahne 39 — tarih ana koruma değil; seçim, ısıtma ve soğuk buzdolabı. FDA: ≤40°F buzdolabı, 0°F dondurucu.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const [sc, al] = pop(t, 0.2, 0.5);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [20, 90, 1780])}>
        {/* süt kutusu üzerindeki anlamsız logo yazısını örten etiket */}
        <div style={{ position: "absolute", left: 650, top: 590, width: 270, transform: `scale(${sc})`, opacity: al, textAlign: "center",
          background: RENK.kagitAcik, border: `4px solid ${RENK.lacivert}`, borderRadius: 14, padding: "10px 0 12px",
          boxShadow: "0 8px 20px rgba(48,40,34,0.2)" }}>
          <div style={{ fontFamily: ANTON, fontSize: 64, lineHeight: 1.05, color: RENK.lacivert }}>FRIDGE</div>
        </div>
        <Etiket t={t} bas={K(2, "40")} capa={[500, 440]} konum={[560, 200]} metin="THERMOMETER" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.4} />
      <Baslik t={t} bas={K(0, "date")} bitis={c[1].bas - 0.2} metin="THE DATE" x={1180} y={200} boyut={84} renk={RENK.mercan} />
      <Not t={t} bas={K(0, "not")} bitis={c[1].bas - 0.2} metin="is not your main protection" x={1184} y={270} boyut={38} />
      <Liste t={t} isaret="onay" x={1180} y={150} aralik={88} boyut={34} genislik={700}
        ogeler={[
          { bas: K(1, "Food"), metin: "FOOD CHOICES", bitis: c[2].bas - 0.2 },
          { bas: K(1, "heating"), metin: "HEATING", bitis: c[2].bas - 0.2 },
          { bas: K(1, "cold"), metin: "COLD FRIDGE", bitis: c[2].bas - 0.2 },
        ]} />
      <VurguRozet t={t} bas={K(2, "40")} vurgu="≤ 40°F" not="FDA advice for the refrigerator" x={1500} y={200} genislik={500} />
      <VurguRozet t={t} bas={K(2, "zero")} vurgu="0°F" not="for the freezer" x={1500} y={520} genislik={500} renk={RENK.koyuYesil} />
    </>
  );
};

export default S39;
