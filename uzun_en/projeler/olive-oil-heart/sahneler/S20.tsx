// Sahne 20 — bütün Akdeniz diyeti, karşılaştırma grubu "daha az yağ" dedi
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; y: number; metin: string; renk: string }> = ({ t, bas, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", right: 60, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "100% 50%" }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTam = K(1, "whole"), tKars = K(1, "comparison");
  const pCerceve = eout(ilerle(t, tTam, 0.8)) * sol(t, tKars + 2.2, 0.6);
  const [sd, ad] = pop(t, tTam, 0.5);
  const ad2 = ad * sol(t, tKars - 0.2, 0.4);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={K(1, "olive") - 0.1} bitis={tKars - 0.2} capa={[573, 440]} konum={[280, 170]} metin="OLIVE OIL" renk={RENK.altin} />
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: pCerceve }}>
          <rect x={100} y={330} width={1740} height={650} rx={26} fill="none" stroke={RENK.koyuYesil} strokeWidth={5} strokeDasharray="22 14" />
        </svg>
        <Etiket t={t} bas={tKars} capa={[1330, 790]} konum={[1530, 905]} metin="COMPARISON GROUP" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "reassuring")} bitis={3.5} metin="REASSURING," x={1860} y={165} boyut={76} renk={RENK.koyuYesil} hiza="sag" />
      <Baslik t={t} bas={K(0, "but")} bitis={3.5} metin="BUT NOT PROOF" x={1860} y={243} boyut={76} renk={RENK.mercan} hiza="sag" />
      <div style={{ position: "absolute", left: 1180, top: 135, transform: `translate(-50%, 0) scale(${sd})`, opacity: ad2 }}>
        <Hap metin="WHOLE MEDITERRANEAN DIET" renk={RENK.koyuYesil} boyut={32} />
      </div>
      <Pil t={t} bas={K(1, "eat")} y={120} metin="TOLD: EAT LESS FAT" renk={RENK.yesil} />
      <Pil t={t} bas={K(1, "keep") - 0.2} y={205} metin="NOT: KEEP EATING AS BEFORE" renk={RENK.mercan} />
    </>
  );
};

export default S20;
