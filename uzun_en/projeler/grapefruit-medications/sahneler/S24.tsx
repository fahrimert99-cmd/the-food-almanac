// Sahne 24 — listenin devamı: her ilaç kendi şişesine etiketlenir.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Hap biçimli küçük etiket (pop ile gelir). x,y = sol-orta (hiza sol) ya da orta.
const Chip: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string; boyut?: number; orta?: boolean; bitis?: number }> = ({
  t, bas, metin, x, y, renk, boyut = 30, orta, bitis = 1e9,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(${orta ? "-50%" : "0"}, -50%) scale(${sc})`, transformOrigin: orta ? "50% 50%" : "0% 50%",
      opacity: a, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "9px 24px 9px 16px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5,
      color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: boyut * 0.65, height: boyut * 0.65, borderRadius: "50%", background: renk, flex: "none" }} />
      {metin}
    </div>
  );
};


const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(1, "transplant")} capa={[400, 330]} konum={[400, 250]} metin="TRANSPLANT DRUG" renk={RENK.lacivert} />
        <Baslik t={t} bas={K(1, "cyclosporine.")} metin="CYCLOSPORINE" x={400} y={165} boyut={58} renk={RENK.koyuYesil} hiza="orta" />
        <Etiket t={t} bas={K(2, "anti-anxiety")} capa={[760, 260]} konum={[800, 175]} metin="ANTI-ANXIETY" renk={RENK.altin} />
        <Baslik t={t} bas={K(2, "buspirone.")} metin="BUSPIRONE" x={800} y={90} boyut={58} renk={RENK.koyuYesil} hiza="orta" />
        <Etiket t={t} bas={K(3, "steroid")} capa={[1030, 350]} konum={[1180, 290]} metin="STEROID" renk={RENK.mercan} />
        <Baslik t={t} bas={K(3, "budesonide,")} metin="BUDESONIDE" x={1180} y={205} boyut={58} renk={RENK.koyuYesil} hiza="orta" />
      </Kamera>
      <Chip t={t} bas={K(0, "list")} metin="THE FDA LIST GOES ON" x={56} y={60} renk={RENK.altin} boyut={26} />
      <Chip t={t} bas={K(3, "Crohn's")} metin="CROHN'S DISEASE" x={1480} y={190} renk={RENK.lacivert} boyut={28} />
      <Chip t={t} bas={K(3, "ulcerative")} metin="ULCERATIVE COLITIS" x={1480} y={260} renk={RENK.lacivert} boyut={28} />
    </>
  );
};

export default S24;
