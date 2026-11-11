// Sahne 36 — Faktör Xa'yı bloklarlar; normal diyete devam (MedlinePlus). Sol görsel, sağ panel.
import React from "react";
import { BaslikBlok, Etiket, Ikon, INTER, ANTON, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tVit = K(1, "vitamin K"), tXa = K(1, "block"), tNorm = K(2, "continue");
  const cik = tNorm - 0.3;
  const pPan = eout(ilerle(t, 0.3, 0.8));
  const [sv, av] = pop(t, tVit, 0.5);
  const [sx, ax] = pop(t, tXa, 0.5);
  const ad = sol(t, cik);
  const hap = (renk: string): React.CSSProperties => ({ display: "flex", alignItems: "center", gap: 16, whiteSpace: "nowrap",
    background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "12px 30px", fontFamily: INTER,
    fontWeight: 800, fontSize: 40, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" });
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1860])}>
        <Etiket t={t} bas={K(2, "normal diet")} capa={[560, 560]} konum={[700, 150]} metin="YOUR NORMAL DIET" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPan} taraf="sag" genislik={700} />
      {/* mekanizma: K vitamini ile uğraşmazlar, Faktör Xa'yı bloklarlar */}
      <div style={{ position: "absolute", left: 1290, top: 330, opacity: av * ad, transform: `scale(${sv})`, transformOrigin: "0% 50%" }}>
        <div style={{ ...hap(RENK.gri), color: RENK.gri }}>VITAMIN K
          <span style={{ position: "absolute", left: 24, right: 24, top: "50%", height: 5, background: RENK.mercan, borderRadius: 3 }} />
        </div>
      </div>
      <Not t={t} bas={tVit} bitis={cik} metin="instead of interfering with it" x={1290} y={420} boyut={30} renk={RENK.gri} />
      <div style={{ position: "absolute", left: 1290, top: 540, opacity: ax * ad, transform: `scale(${sx})`, transformOrigin: "0% 50%" }}>
        <div style={hap(RENK.altin)}>
          FACTOR XA
          <span style={{ fontFamily: ANTON, fontSize: 34, color: RENK.mercan, letterSpacing: 2 }}>BLOCKED</span>
        </div>
      </div>
      <Not t={t} bas={K(1, "clotting protein")} bitis={cik} metin="a clotting protein" x={1290} y={630} boyut={30} renk={RENK.gri} />
      {/* kapanış: sağ panelde başlık */}
      <BaslikBlok t={t} bas={tNorm} satirlar={s.meta.baslik!.satirlar} x={1290} y={400} boyut={88} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tNorm + 0.2} metin={s.meta.baslik!.not!} x={1290} y={590} boyut={30} renk={RENK.gri} />
    </>
  );
};

export default S36;
