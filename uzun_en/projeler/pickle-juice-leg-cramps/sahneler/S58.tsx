// Sahne 58 — 5. adım: doktora söyle. Kitabın karalaması boş sayfa yamasıyla örtülür.
import React from "react";
import { ANTON, BaslikBlok, Etiket, INTER, Kamera, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// kitap sayfaları (görsel koordinatı) — anlamsız el yazısını örter
const SAYFA = "70,540 340,400 430,398 650,318 975,535 975,590 720,680 410,845 330,812";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800]);
  const aSayfa = eout(ilerle(t, 0.05, 0.5));
  const tKrmz = 7.1;
  const t12 = K(2, "medicines"), t13 = K(2, "supplements");
  const yaz = (m: string, x: number, y: number, bas: number, r: number) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) rotate(${r}deg) scale(${sc})`, opacity: al,
        fontFamily: INTER, fontWeight: 800, fontSize: 46, letterSpacing: 3, color: RENK.lacivert, whiteSpace: "nowrap",
        borderBottom: `5px solid ${RENK.altin}`, paddingBottom: 4 }}>{m}</div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kam}>
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aSayfa }}>
          <polygon points={SAYFA} fill="#F1E8D2" stroke="#8A6E4B" strokeWidth={4} strokeLinejoin="round" />
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1={150 + i * 28} y1={700 - i * 70 + 0} x2={560 + i * 28} y2={560 - i * 70 + 0} stroke="#B9A98A" strokeWidth={3} opacity={0.7} />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1={560 + i * 22} y1={600 - i * 52} x2={880 + i * 12} y2={500 - i * 52 + 24} stroke="#B9A98A" strokeWidth={3} opacity={0.7} />
          ))}
        </svg>
        {yaz("MEDICINES", 330, 640, t12 - 0.05, -14)}
        {yaz("SUPPLEMENTS", 700, 520, t13 - 0.05, -14)}
        <Etiket t={t} bas={K(1, "doctor")} bitis={tKrmz} capa={[1090, 470]} konum={[1120, 180]} metin="YOUR DOCTOR" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.05} satirlar={["5. SPEAK", "UP"]} x={1320} y={200} boyut={112} />
      <Not t={t} bas={K(1, "Tell")} bitis={tKrmz} metin="TELL YOUR DOCTOR IF…" x={1320} y={450} boyut={30} agirlik={800} renk={RENK.altin} />
      <Liste t={t} x={1320} y={510} aralik={74} boyut={30} isaret="nokta" genislik={560} ogeler={[
        { bas: K(1, "frequent"), metin: "FREQUENT", renk: RENK.altin, bitis: tKrmz },
        { bas: K(1, "severe"), metin: "SEVERE", renk: RENK.altin, bitis: tKrmz },
        { bas: K(1, "numbness"), metin: "NUMBNESS", renk: RENK.mercan, bitis: tKrmz },
        { bas: K(1, "swelling"), metin: "SWELLING", renk: RENK.mercan, bitis: tKrmz },
        { bas: K(1, "weakness"), metin: "WEAKNESS", renk: RENK.mercan, bitis: tKrmz },
      ]} />
      <Not t={t} bas={K(1, "cramps can")} metin="CRAMPS CAN ACCOMPANY…" x={1320} y={450} boyut={30} agirlik={800} renk={RENK.altin} />
      <Liste t={t} x={1320} y={510} aralik={84} boyut={34} isaret="nokta" genislik={560} ogeler={[
        { bas: K(1, "circulation"), metin: "CIRCULATION", renk: RENK.koyuYesil },
        { bas: K(1, "vein"), metin: "VEIN", renk: RENK.koyuYesil },
        { bas: K(1, "nerve"), metin: "NERVE PROBLEMS", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};

export default S58;
