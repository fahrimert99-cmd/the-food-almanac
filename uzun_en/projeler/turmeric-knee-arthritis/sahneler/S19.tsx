// Sahne 19 — MR taraması: ağrı hafifledi ama eklemde değişiklik görülmedi.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol, INTER, ANTON } from "../kutuphane";

const Satir: React.FC<{ t: number; bas: number; bas2: number; bitis: number; metin: string; y: number }> = ({ t, bas, bas2, bitis, metin, y }) => {
  const [s1, a1] = pop(t, bas, 0.5), [s2, a2] = pop(t, bas2, 0.5);
  const a = sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1060, top: y, display: "flex", alignItems: "center", gap: 20, opacity: a }}>
      <div style={{ transform: `scale(${s1})`, transformOrigin: "0% 50%", opacity: a1 }}><Hap metin={metin} renk={RENK.lacivert} boyut={34} /></div>
      <div style={{ transform: `scale(${s2})`, transformOrigin: "0% 50%", opacity: a2, background: RENK.lacivert, color: "#fff", borderRadius: 999,
        padding: "8px 24px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, whiteSpace: "nowrap" }}>NO CHANGE</div>
    </div>
  );
};

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const b = s.meta.baslik!;
  const tMri = K(0, "M R I"), tSwell = K(1, "swelling"), tCart = K(1, "cartilage"), tNo = K(1, "not change");
  const tExt = K(2, "extract"), tEase = K(2, "ease pain"), tWithout = K(2, "without");
  const satirSon = c[2].bas - 0.1;
  const [sE, aE] = pop(t, tEase, 0.55);
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1840])}>
        {/* kabartma plaket üzerindeki bozuk yazıyı örten ahşap yama */}
        <div style={{ position: "absolute", left: 318, top: 650, width: 126, height: 66, borderRadius: 8,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #6A3F2A 0%, #6A3F2A 70%, rgba(106,63,42,0) 100%)" }} />
        <Etiket t={t} bas={tMri} capa={[440, 300]} konum={[1000, 190]} metin="MRI SCANNER" renk={RENK.lacivert} boyut={30} />
        <Etiket t={t} bas={tExt} capa={[1000, 680]} konum={[1330, 840]} metin="TURMERIC EXTRACT" renk={RENK.altin} boyut={28} />
      </Kamera>
      <Satir t={t} bas={tSwell} bas2={tNo} bitis={satirSon} metin="JOINT SWELLING" y={330} />
      <Satir t={t} bas={tCart} bas2={tNo + 0.25} bitis={satirSon} metin="CARTILAGE" y={440} />
      <div style={{ position: "absolute", left: 1060, top: 330, transform: `scale(${sE})`, transformOrigin: "0% 50%", opacity: aE, display: "flex", alignItems: "center", gap: 18 }}>
        <Ikon t={t} bas={tEase} ad="onay" x={30} y={30} boyut={60} zemin={RENK.yesil} />
        <div style={{ marginLeft: 50 }}><Hap metin="PAIN EASED" renk={RENK.yesil} boyut={34} /></div>
      </div>
      <BaslikBlok t={t} bas={tWithout} satirlar={b.satirlar} x={1860} y={520} boyut={100} hiza="sag" />
    </>
  );
};

export default S19;
