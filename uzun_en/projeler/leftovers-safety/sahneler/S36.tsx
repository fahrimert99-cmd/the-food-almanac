// Sahne 36
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

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOda = K(1, "room"), tHava = K(1, "cold"), tEs = K(1, "evenly");
  const pk = eout(ilerle(t, tOda, 0.7));
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820])}>
        {/* kaplar arası boşluk oku */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <g stroke={RENK.altin} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" fill="none" opacity={pk}>
            <line x1={970 - 80 * pk} y1={640} x2={970 + 80 * pk} y2={640} />
            <polyline points={`${890},628 ${878},640 ${890},652`} />
            <polyline points={`${1050},628 ${1062},640 ${1050},652`} />
          </g>
        </svg>
        <Etiket t={t} bas={tOda} bitis={tHava - 0.2} capa={[970, 640]} konum={[970, 190]} metin="ROOM AROUND" renk={RENK.altin} boyut={30} />
        <Etiket t={t} bas={tHava} capa={[1385, 560]} konum={[1560, 880]} metin="COLD AIR" renk={RENK.yesil} boyut={30} />
      </Kamera>
      <Pill t={t} bas={K(0, "matters") - 0.1} x={960} y={50} metin="SPACE MATTERS" renk={RENK.altin} boyut={28} />
      <Pill t={t} bas={tEs} x={400} y={880} metin="COOLS EVENLY" renk={RENK.yesil} ikon="onay" />
      <KaynakEtiketi t={t} metin="Rutgers Extension" bas={K(1, "Rutgers")} y={110} />
    </>
  );
};
export default S36;
