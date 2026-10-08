// Sahne 16 — çalışmanın neyi gösterdiği / göstermediği
import React from "react";
import { BaslikBlok, Etiket, Ikon, INTER, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Satir: React.FC<{ t: number; bas: number; metin: string; ad: "onay" | "carpi" | "saat"; renk: string; y: number }> = ({ t, bas, metin, ad, renk, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <>
      <Ikon t={t} bas={bas} ad={ad} x={1090} y={y} boyut={84} zemin={renk} />
      <div style={{ position: "absolute", left: 1160, top: y - 40, opacity: al, transform: `translateX(${(1 - eout(ilerle(t, bas, 0.5))) * 40}px)`,
        fontFamily: INTER, fontWeight: 800, fontSize: 44, letterSpacing: 1, lineHeight: "80px", color: RENK.lacivert, whiteSpace: "nowrap" }}>{metin}</div>
    </>
  );
};

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tWhen = K(1, "when to walk"), tNot = K(1, "not walking"), tRight = K(2, "right after");
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 40, 1700], [30, 60, 1600])} />
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={1000} />
      <BaslikBlok t={t} bas={0.1} satirlar={["WHAT THIS", "SHOWS"]} x={1020} y={200} boyut={100} />
      <Satir t={t} bas={tWhen} metin="WHEN TO WALK" ad="onay" renk={RENK.yesil} y={520} />
      <Satir t={t} bas={tNot} metin="WALK VS. NOTHING" ad="carpi" renk={RENK.mercan} y={640} />
      <Satir t={t} bas={tRight + 0.1} metin="RIGHT AFTER EATING" ad="saat" renk={RENK.altin} y={760} />
      <Etiket t={t} bas={tRight} capa={[420, 540]} konum={[470, 880]} metin="AFTER A MEAL" renk={RENK.altin} />
    </>
  );
};

export default S16;
