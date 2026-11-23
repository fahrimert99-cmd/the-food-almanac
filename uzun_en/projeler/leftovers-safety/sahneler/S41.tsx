// Sahne 41
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, BolumKarti, Etiket, INTER, IkonYol, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, einout, eout, ilerle, kameraYolu,
  kelimeZamani, kis, pop, sol } from "../kutuphane";

// Yerel hap: pop ile gelir, isteğe bağlı simge
const Pill: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; ikon?: "onay" | "carpi" | "saat" | "uyari"; bitis?: number; boyut?: number }> = ({
  t, bas, x, y, metin, renk, ikon, bitis = 1e9, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, display: "flex",
      alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: ikon ? "8px 26px 8px 10px" : "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5,
      color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      {ikon && <span style={{ width: 44, height: 44, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={28} renk="#fff" kalinlik={6} /></span>}
      {metin}
    </div>
  );
};

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDur = K(1, "pause,"), tTem = K(1, "not"), tFDA = K(2, "FDA"), tLis = K(2, "Listeria"), tAz = K(2, "eliminate"), tErk = K(3, "freeze");
  const bit = tErk - 0.25;
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Etiket t={t} bas={tLis} capa={[1200, 735]} konum={[1580, 610]} metin="LISTERIA" renk={RENK.mercan} boyut={30} />
      </Kamera>
      <Pill t={t} bas={tDur} bitis={bit} x={1600} y={240} metin="A PAUSE" renk={RENK.altin} ikon="saat" />
      <Pill t={t} bas={tTem} bitis={bit} x={1600} y={340} metin="NOT A CLEANING" renk={RENK.mercan} ikon="carpi" />
      <Pill t={t} bas={tAz} x={1600} y={710} metin="NOT REDUCED" renk={RENK.mercan} ikon="carpi" />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tFDA} />
      <BaslikBlok t={t} bas={tErk - 0.1} satirlar={["FREEZE", "EARLY"]} x={1450} y={200} boyut={120} />
      <Not t={t} bas={K(3, "day")} metin="NOT ON DAY FIVE" x={1450} y={430} boyut={38} agirlik={800} renk={RENK.mercan} />
    </>
  );
};
export default S41;
