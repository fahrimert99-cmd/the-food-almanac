// Tam video ve sahne önizlemesinde ortak üst katmanlar: filigran, otomatik bölüm rozeti, altyazı.
import React from "react";
import { Altyazi, Filigran } from "../ortak";
import { kis } from "../zaman";
import { BolumRozeti } from "./kutuphane";
import { SahneAyar, SahneTam, TAM } from "./veri";

/** Bölüm rozeti: bölüm açan, kart olmayan ve hemen ardından gelmediği bir kartın duyurmadığı sahnelerde. */
const rozetli = (s: SahneTam, ayar?: SahneAyar) => {
  if (!s.meta.bolumNo || !s.meta.bolum || s.meta.tip === "kart" || ayar?.rozet === false) return false;
  const i = TAM.sahneler.findIndex((x) => x.id === s.id);
  return !(i > 0 && TAM.sahneler[i - 1].meta.tip === "kart");
};

export const UstKatman: React.FC<{ tAbs: number; sahneler: SahneTam[]; ayar: (id: number) => SahneAyar | undefined }> = ({
  tAbs, sahneler, ayar,
}) => {
  const gizle = (s: SahneTam) => kis((tAbs - s.bas + 0.3) / 0.4) - kis((tAbs - s.bas - s.sure) / 0.4);
  const fil = 1 - sahneler.filter((s) => s.meta.tip === "kart" || ayar(s.id)?.filigran === false).reduce((a, s) => a + gizle(s), 0);
  const rozet = sahneler.find((s) => tAbs >= s.bas - 0.1 && tAbs < s.bas + 4 && rozetli(s, ayar(s.id)));
  return (
    <>
      <Filigran a={kis(fil)} />
      {rozet && <BolumRozeti t={tAbs - rozet.bas} no={rozet.meta.bolumNo!} ad={rozet.meta.bolum!} />}
      <Altyazi t={tAbs} parcalar={TAM.altyazi} />
    </>
  );
};
