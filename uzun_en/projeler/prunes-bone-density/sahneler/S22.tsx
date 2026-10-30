// Sahne 22 — Hooshmand 2011: 160 kadın, 100 g erik vs kuru elma, 1 yıl.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; metin: string; y: number }> = ({ t, bas, metin, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1450, top: y, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, display: "flex",
      alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`, borderRadius: 999,
      padding: "6px 22px 6px 8px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap" }}>
      <span style={{ width: 34, height: 34, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad="onay" boyut={22} renk="#fff" kalinlik={7} />
      </span>{metin}
    </div>
  );
};

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820]);
  const tEski = K(0, "earlier trial"), tHoosh = K(1, "Hooshmand"), t160 = K(1, "160");
  const tErik = K(1, "100 grams"), tElma = K(1, "dried apples"), tIyi = K(1, "prune group");
  const tFore = K(1, "forearm"), tSpine = K(1, "spine");
  const b = s.meta.baslik;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={pencere}>
        <Etiket t={t} bas={tErik} capa={[420, 400]} konum={[820, 150]} metin="100 G PRUNES" renk={RENK.mercan} />
        <Etiket t={t} bas={tElma} capa={[1090, 330]} konum={[1150, 120]} metin="100 G DRIED APPLE" renk={RENK.altin} boyut={26} />
      </Kamera>
      <Panel a={eout(ilerle(t, tEski, 0.6))} genislik={540} opak={0.97} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tHoosh} />
      <BaslikBlok t={t} bas={tEski} satirlar={b?.satirlar ?? []} x={1450} y={210} boyut={70} renkler={[RENK.lacivert, RENK.altin]} />
      <VurguRozet t={t} bas={t160} bitis={tIyi - 0.2} vurgu="160" not="postmenopausal women, low bone density" x={1670} y={400} genislik={400} />
      <Not t={t} bas={tIyi} metin={b?.not ?? ""} x={1450} y={400} boyut={30} genislik={400} />
      <Pil t={t} bas={tFore} metin="FOREARM" y={640} />
      <Pil t={t} bas={tSpine} metin="SPINE" y={720} />
    </>
  );
};

export default S22;
