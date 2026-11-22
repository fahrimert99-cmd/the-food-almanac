// Sahne 16 — açık buzdolabı: sağda 3–4 gün başlığı, gün noktaları ve termometre etiketi.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, ANTON, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUc = K(0, "three"), tDort = K(0, "four"), tNot = K(0, "refrigerator,");
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1700], [20, 40, 1560])}>
        <Etiket t={t} bas={K(0, "leftovers")} bitis={tUc} capa={[560, 830]} konum={[1180, 860]} metin="LEFTOVERS" renk={RENK.altin} boyut={30} />
        <Etiket t={t} bas={K(0, "40")} capa={[730, 395]} konum={[1330, 700]} metin="40°F OR BELOW" renk={RENK.yesil} boyut={30} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "American")} />
      <Baslik t={t} bas={tUc} metin="3–4 DAYS" x={1860} y={330} boyut={190} renk={RENK.koyuYesil} hiza="sag" />
      <div style={{ position: "absolute", right: 60, top: 470, display: "flex", gap: 22 }}>
        {[1, 2, 3, 4].map((d) => {
          const bas = d <= 3 ? tUc + (d - 1) * 0.12 : tDort;
          const [sc, al] = pop(t, bas, 0.45);
          const vurgu = d >= 3;
          return (
            <div key={d} style={{ width: 84, height: 84, borderRadius: "50%", transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center",
              justifyContent: "center", fontFamily: ANTON, fontSize: 44, background: vurgu ? RENK.yesil : RENK.kagitAcik,
              color: vurgu ? "#fff" : RENK.lacivert, border: `4px solid ${vurgu ? RENK.yesil : RENK.lacivert}` }}>{d}</div>
          );
        })}
      </div>
      <Not t={t} bas={tNot} metin={s.meta.baslik!.not!} x={1860} y={590} hiza="sag" genislik={640} boyut={36} agirlik={800} />
    </>
  );
};

export default S16;
