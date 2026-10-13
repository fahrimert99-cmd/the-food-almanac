// Sahne 12 — bir yumurta limitin yarısından fazlasını kullanır; beyaz omlet dönemi.
import React from "react";
import { Etiket, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYarim = K(0, "more than half");
  const aB = eout(ilerle(t, K(0, "limit") - 0.9, 0.5));
  const dolu = eout(ilerle(t, tYarim, 1.0)) * 0.6;
  const cik = K(1, "That") - 0.1;
  const aG = aB * sol(t, cik, 0.5);
  const bx = 140, by = 190, bw = 820, bh = 56;
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 100, 1800])}>
        <Etiket t={t} bas={K(1, "omelets")} capa={[1000, 660]} konum={[760, 340]} metin="EGG WHITE OMELET" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "yolk")} capa={[330, 650]} konum={[360, 420]} metin="SKIPPED YOLKS" renk={RENK.mercan} />
      </Kamera>
      {aG > 0 && (
        <>
          <Not t={t} bas={K(0, "single") - 0.1} bitis={cik} metin="THE DAILY LIMIT" x={bx} y={bx - 40} boyut={30} agirlik={800} />
          <div style={{ position: "absolute", left: bx, top: by, width: bw, height: bh, opacity: aG, borderRadius: 14,
            background: "#FCF8EC", border: `4px solid ${RENK.lacivert}`, overflow: "hidden", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
            <div style={{ width: `${dolu * 100}%`, height: "100%", background: RENK.mercan }} />
          </div>
          <Not t={t} bas={tYarim} bitis={cik} metin="1 LARGE EGG: MORE THAN HALF" x={bx} y={by + 80} boyut={40} agirlik={800} renk={RENK.mercan} genislik={900} />
          <div style={{ position: "absolute", left: bx + 600, top: by - 52, opacity: aG, fontFamily: INTER, fontWeight: 800, fontSize: 20,
            letterSpacing: 2, color: RENK.altin, border: `3px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999, padding: "4px 14px" }}>ILLUSTRATIVE</div>
        </>
      )}
    </>
  );
};

export default S12;
