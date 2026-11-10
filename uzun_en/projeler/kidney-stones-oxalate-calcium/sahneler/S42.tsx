// Sahne 42 — Tuz: kadın çalışmasında en yüksek sodyum ≈ %30 daha yüksek risk; 2026 kılavuzu.
import React from "react";
import { Baslik, Etiket, Panel, Hap, IkonYol, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hapcik: React.FC<{ t: number; bas: number; metin: string; y: number; renk: string; ok?: boolean }> = ({ t, bas, metin, y, renk, ok }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1290, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%", display: "flex", alignItems: "center", gap: 12 }}>
      <Hap metin={metin} renk={renk} boyut={30} />
      {ok && <IkonYol ad="ok" boyut={44} renk={RENK.mercan} kalinlik={7} />}
    </div>
  );
};

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [100, 0, 1920], [130, 25, 1820])} sinirla={false}>
        <Etiket t={t} bas={K(1, "sodium")} capa={[520, 730]} konum={[360, 905]} metin="SODIUM" renk={RENK.altin} />
      </Kamera>
      <Panel a={1} taraf="sag" genislik={260} opak={1} />
      <Baslik t={t} bas={K(0, "salt")} metin={b.satirlar[0]} x={1290} y={185} boyut={150} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "30 percent")} vurgu={b.vurgu!} not={b.not!.toUpperCase()} x={1590} y={290} genislik={430} renk={RENK.mercan} />
      <Hapcik t={t} bas={K(2, "2026")} metin="2026 GUIDELINE" y={690} renk={RENK.lacivert} />
      <Hapcik t={t} bas={K(2, "cut back")} metin="CUT BACK" y={790} renk={RENK.mercan} ok />
    </>
  );
};

export default S42;
