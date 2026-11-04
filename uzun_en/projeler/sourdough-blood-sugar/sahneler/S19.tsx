// Sahne 19 — Lappi: dört ekmek, 50 g karbonhidrat, 11 kişi
import React from "react";
import { KaynakEtiketi, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol, ANTON } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFour = K(0, "four"), tFifty = K(0, "fifty"), tEleven = K(0, "eleven"), tIns = K(0, "insulin");
  const X = [440, 860, 1260, 1650];
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        {X.map((x, i) => {
          const [sc, al] = pop(t, tFour + i * 0.35, 0.5);
          const a = al * sol(t, tFifty - 0.2);
          if (a <= 0) return null;
          return (
            <div key={i} style={{ position: "absolute", left: x - 38, top: 215, width: 76, height: 76, borderRadius: "50%", background: RENK.lacivert,
              color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 46,
              transform: `scale(${sc})`, opacity: a, border: `4px solid ${RENK.kagitAcik}` }}>{i + 1}</div>
          );
        })}
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "Lappi")} />
      <VurguRozet t={t} bas={tFifty} bitis={tEleven - 0.3} vurgu="50 G" not="available carbohydrate each" x={960} y={80} genislik={520} />
      <VurguRozet t={t} bas={tEleven} vurgu="11 PEOPLE" not="with insulin resistance" x={960} y={80} genislik={520} />
    </>
  );
};
export default S19;
