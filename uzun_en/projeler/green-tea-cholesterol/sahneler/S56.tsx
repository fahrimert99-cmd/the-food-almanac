// Sahne 56 — büyük resim: yemek düzeni, hareket, ilaç; yeşil çay "yanında", yerine değil.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(2, "Green") - 0.15;
  const tIlac = K(1, "medicines");
  const [sc, al] = pop(t, tIlac, 0.55);
  const solma = t > tSon ? Math.max(0, 1 - (t - tSon) / 0.4) : 1;
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [120, 20, 1700], [200, 70, 1560])} />
      {m(t, s)}
      {/* 1. cümle: üç araç (12.8'e kadar) */}
      <Etiket t={t} bas={K(1, "heart-healthy")} bitis={tSon} capa={[1150, 320]} konum={[1550, 180]} metin="EATING PATTERN" renk={RENK.yesil} />
      <Etiket t={t} bas={K(1, "physical")} bitis={tSon} capa={[800, 870]} konum={[1300, 840]} metin="PHYSICAL ACTIVITY" renk={RENK.yesil} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 1640, top: 640, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al * solma, whiteSpace: "nowrap",
          display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999,
          padding: "8px 24px 8px 10px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
          boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
          <span style={{ width: 42, height: 42, borderRadius: "50%", background: RENK.lacivert, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IkonYol ad="onay" boyut={26} renk="#fff" />
          </span>
          STATINS · IF PRESCRIBED
        </div>
      )}
      {/* 3. cümle: yeşil çay yanında */}
      <Etiket t={t} bas={K(2, "Green")} capa={[525, 275]} konum={[260, 130]} metin="GREEN TEA" renk={RENK.altin} />
      {/* 4. cümle: yerine geçmez */}
      <Baslik t={t} bas={K(3, "cannot")} metin="NOT A" x={50} y={250} boyut={46} renk={RENK.mercan} />
      <Baslik t={t} bas={K(3, "cannot") + 0.18} metin="SUBSTITUTE" x={50} y={300} boyut={46} renk={RENK.mercan} />
    </>
  );
};
const m = (t: number, s: any) => s.meta.etiket ? <KaynakEtiketi t={t} metin={s.meta.etiket} bas={0.3} bitis={12.6} y={150} /> : null;

export default S56;
