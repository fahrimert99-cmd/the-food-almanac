// Sahne 53 — adım 6: Yeni Zelanda denemesi; haşlanmış (parboiled) pirinç.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Cubuk: React.FC<{ t: number; bas: number; ad: string; oran: number; renk: string; y: number }> = ({ t, bas, ad, oran, renk, y }) => {
  const p = eout(ilerle(t, bas, 0.9));
  return (
    <>
      <div style={{ position: "absolute", left: 1340, top: y - 40, fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5,
        color: RENK.lacivert, opacity: eout(ilerle(t, bas - 0.1, 0.4)) }}>{ad}</div>
      <div style={{ position: "absolute", left: 1340, top: y, height: 38, width: 440 * oran * p, borderRadius: 10, background: renk }} />
    </>
  );
};

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNZ = K(1, "New Zealand"), tPar = K(2, "parboiling"), tCool = K(2, "cooling"), tAra = K(3, "parboiled");
  const [sc, al] = pop(t, tPar - 0.2, 0.5);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [40, 30, 1840], [120, 50, 1680])}>
        <Etiket t={t} bas={tAra} capa={[1380, 330]} konum={[1400, 150]} metin="PARBOILED" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.0} metin="STEP 6" x={60} y={80} boyut={60} renk={RENK.altin} />
      <Baslik t={t} bas={tNZ} metin="NEW ZEALAND TRIAL" x={960} y={80} boyut={66} renk={RENK.koyuYesil} hiza="orta" />
      {t >= tPar - 0.2 && (
        <div style={{ position: "absolute", left: 1300, top: 640, width: 540, height: 300, opacity: al, transform: `scale(${sc})`,
          transformOrigin: "50% 50%", background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 26,
          boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
          <div style={{ position: "absolute", left: 28, top: 18, fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 3,
            color: RENK.gri }}>ILLUSTRATIVE</div>
        </div>
      )}
      <Cubuk t={t} bas={tPar} ad="PARBOILING" oran={1} renk={RENK.altin} y={750} />
      <Cubuk t={t} bas={tCool} ad="COOLING" oran={0.55} renk={RENK.yesil} y={865} />
    </>
  );
};
export default S53;
