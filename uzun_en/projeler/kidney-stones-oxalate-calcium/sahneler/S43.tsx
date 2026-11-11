// Sahne 43 — Hayvansal protein: erkek çalışmasında ≈ %33 (sınırda), kanıt sınırlı → doktora sor.
import React from "react";
import { Etiket, Panel, Hap, IkonYol, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hapcik: React.FC<{ t: number; bas: number; metin: string; y: number; renk: string; bitis?: number }> = ({ t, bas, metin, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1400, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tBord = K(1, "borderline");
  const rozetSon = c[2].bas - 0.2;
  const aRozet = 1 - eout(ilerle(t, rozetSon, 0.4));
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [330, 0, 1920], [350, 20, 1820])} sinirla={false}>
        <Etiket t={t} bas={K(0, "animal protein")} bitis={c[1].bas} capa={[840, 420]} konum={[760, 95]} metin="ANIMAL PROTEIN" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "animal protein")} capa={[720, 640]} konum={[680, 905]} metin="ANIMAL PROTEIN" renk={RENK.mercan} />
      </Kamera>
      {/* görsel kenarındaki ton farkını kâğıt rengiyle örter */}
      <Panel a={1} taraf="sag" genislik={560} opak={1} />
      <div style={{ opacity: aRozet }}>
        <VurguRozet t={t} bas={K(1, "33 percent")} bitis={rozetSon} vurgu="+33%" not="MEN'S STUDY, HIGHEST INTAKE" x={1650} y={280} genislik={420} renk={RENK.mercan} />
        <Hapcik t={t} bas={tBord} metin="BORDERLINE" y={560} renk={RENK.altin} />
      </div>
      <Hapcik t={t} bas={K(2, "limited")} metin="LIMITED EVIDENCE" y={330} renk={RENK.altin} />
      <Hapcik t={t} bas={K(2, "ask your doctor")} metin="ASK YOUR DOCTOR" y={430} renk={RENK.koyuYesil} />
    </>
  );
};

export default S43;
