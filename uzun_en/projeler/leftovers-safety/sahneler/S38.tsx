// Sahne 38
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

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKay = K(0, "rolling"), tMw = K(1, "microwave"), tKar = K(1, "stir"), tEsit = K(1, "unevenly");
  const dn = ilerle(t, tKar, 3.0) * 2;
  const pa = eout(ilerle(t, tKar, 0.4));
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        {/* mikrodalga ekranındaki sahte yazıları gri düz yüzeyle kapat */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <rect x={1596} y={256} width={68} height={40} rx={4} fill="#8a867f" />
          <rect x={1596} y={486} width={62} height={22} rx={3} fill="#9a968f" />
        </svg>
        <Etiket t={t} bas={tKay} bitis={tMw - 0.2} capa={[950, 650]} konum={[1450, 770]} metin="ROLLING BOIL" renk={RENK.mercan} boyut={30} />
        <Etiket t={t} bas={tMw} capa={[1397, 400]} konum={[1500, 650]} metin="MICROWAVE" renk={RENK.altin} boyut={30} />
        {pa > 0 && (
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }} opacity={pa}>
            <ellipse cx={1397} cy={322} rx={85} ry={22} fill="none" stroke={RENK.altin} strokeWidth={6} strokeLinecap="round"
              strokeDasharray="70 50" strokeDashoffset={-dn * 240} />
          </svg>
        )}
      </Kamera>
      <Pill t={t} bas={tKar} x={1500} y={740} metin="STIR PARTWAY" renk={RENK.altin} />
      <Pill t={t} bas={tEsit} x={1500} y={830} metin="HEATS UNEVENLY" renk={RENK.mercan} ikon="uyari" />
    </>
  );
};
export default S38;
