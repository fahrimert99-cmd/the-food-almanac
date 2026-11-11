// Sahne 38 — sonuç: diyet işe yaramaz demek değil; fark bulunmaması etkisizlik kanıtı değil.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; bitis: number; metin: string; y: number; renk: string }> = ({ t, bas, bitis, metin, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={28} />
    </div>
  );
};

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(2, "No");
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])} />
      <Baslik t={t} bas={K(0, "useless.")} bitis={tSon - 0.2} metin="NOT USELESS" x={1860} y={200} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
      <Pil t={t} bas={K(1, "three")} bitis={tSon - 0.2} metin="3 YEARS" y={290} renk={RENK.altin} />
      <Pil t={t} bas={K(1, "these")} bitis={tSon - 0.2} metin="THESE PEOPLE" y={365} renk={RENK.altin} />
      <Pil t={t} bas={K(1, "healthy")} bitis={tSon - 0.2} metin="HEALTHY CONTROL DIET" y={440} renk={RENK.yesil} />
      <Baslik t={t} bas={tSon} metin="NO DIFFERENCE FOUND" x={1860} y={190} boyut={80} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(2, "proof")} metin="NOT PROOF OF NO EFFECT" x={1860} y={285} boyut={60} renk={RENK.mercan} hiza="sag" />
    </>
  );
};

export default S38;
