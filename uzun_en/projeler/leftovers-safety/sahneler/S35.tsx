// Sahne 35
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

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBuz = K(0, "ice"), tRaf = K(1, "top shelf"), tOrt = K(1, "covered"), tYok = K(1, "rather");
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Etiket t={t} bas={tBuz} bitis={tRaf - 0.2} capa={[667, 790]} konum={[1010, 900]} metin="ICE BATH" renk={RENK.altin} boyut={30} />
        <Etiket t={t} bas={tRaf} capa={[870, 250]} konum={[1430, 560]} metin="TOP SHELF" renk={RENK.altin} boyut={30} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "soups")} satirlar={["ICE BATH"]} x={1300} y={200} boyut={120} />
      <Not t={t} bas={K(0, "soups") + 0.3} metin={s.meta.baslik?.not ?? ""} x={1300} y={290} boyut={36} />
      <Pill t={t} bas={tOrt} x={1480} y={680} metin="COVERED LOOSELY" renk={RENK.yesil} ikon="onay" />
      <Pill t={t} bas={tYok} x={1480} y={790} metin="NOT SITTING OUT" renk={RENK.mercan} ikon="carpi" />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "Nebraska")} />
    </>
  );
};
export default S35;
