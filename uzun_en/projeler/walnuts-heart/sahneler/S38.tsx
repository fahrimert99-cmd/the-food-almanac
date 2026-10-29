// Sahne 38 — iddia ile çalışmanın ölçtüğü şey: üstte başlık ve iki hap.
import React from "react";
import { Etiket, Hap, Kamera, BaslikBlok, RENK, SP, IkonYol, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Satir: React.FC<{ t: number; bas: number; y: number; metin: string; renk: string; ok: boolean }> = ({ t, bas, y, metin, renk, ok }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 960, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={34} />
    </div>
  );
};

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBey = K(0, "beyond"), tS1 = K(1, "test");
  const a = sol(t, tS1 - 0.2);
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "walnuts")} bitis={tS1 - 0.2} capa={[780, 430]} konum={[780, 880]} metin="WALNUTS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "dementia")} bitis={tS1 - 0.2} capa={[1380, 760]} konum={[1560, 880]} metin="DEMENTIA CLAIM" renk={RENK.mercan} />
      </Kamera>
      {a > 0 && <div style={{ opacity: a }}><BaslikBlok t={t} bas={tBey} satirlar={["BEYOND THIS TRIAL"]} x={960} y={130} boyut={100} hiza="orta" renkler={[RENK.koyuYesil]} /></div>}
      <Satir t={t} bas={tS1} y={105} metin="MEASURED: TEST SCORES, 2 YEARS" renk={RENK.yesil} ok />
      <Satir t={t} bas={K(1, "not")} y={190} metin="NOT MEASURED: DEMENTIA DIAGNOSES" renk={RENK.mercan} ok={false} />
    </>
  );
};

export default S38;
