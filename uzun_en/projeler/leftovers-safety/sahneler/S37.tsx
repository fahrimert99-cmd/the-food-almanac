// Sahne 37
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

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIc = K(0, "internal"), t165 = K(0, "165"), tHepsi = K(0, "all"), tAHA = K(1, "American"), tExt = K(1, "extension"), tSrv = K(1, "services");
  const KAY = [
    { bas: tAHA, ad: "AHA" },
    { bas: tExt, ad: "UNL" },
    { bas: tSrv, ad: "RUTGERS" },
  ];
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Etiket t={t} bas={tIc} capa={[595, 500]} konum={[330, 190]} metin="INTERNAL TEMPERATURE" renk={RENK.altin} boyut={28} />
      </Kamera>
      <Baslik t={t} bas={K(0, "reheat") - 0.1} metin="REHEAT TO" x={1320} y={190} boyut={100} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t165 - 0.1} vurgu="165°F" x={1530} y={280} genislik={420} renk={RENK.mercan} />
      <Not t={t} bas={tHepsi} metin="ALL THE WAY THROUGH" x={1530} y={500} hiza="orta" boyut={34} agirlik={800} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tAHA} />
      {KAY.map((k, i) => (
        <React.Fragment key={k.ad}>
          <Ikon t={t} bas={k.bas} ad="onay" x={1390 + i * 140} y={700} boyut={84} />
          <Not t={t} bas={k.bas + 0.1} metin={k.ad} x={1390 + i * 140} y={758} hiza="orta" boyut={24} agirlik={800} />
        </React.Fragment>
      ))}
    </>
  );
};
export default S37;
