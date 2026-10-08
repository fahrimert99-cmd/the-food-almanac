// Sahne 42 — Sıra karbonhidratı/kaloriyi silmez; büyük tabak yine büyük tabaktır; ilaç, egzersiz ve tıbbi bakımın yerini tutmaz.
import React from "react";
import { Baslik, einout, eout, Etiket, GorselKart, Hap, ilerle, INTER, Kamera, kagit, kelimeZamani, kis, pop, RENK, sol, SP } from "../kutuphane";

// yerini tutmadığı üç şey: küçük görsel kartları (sonraki sahnelerin görsellerinden kırpım)
const YERINE = [
  { ifade: "medication", ad: "MEDICATION", gorsel: "tam/52", kirp: [1400, 690, 1760, 960] as [number, number, number, number] },
  { ifade: "exercise", ad: "EXERCISE", gorsel: "tam/51", kirp: [220, 330, 980, 900] as [number, number, number, number] },
  { ifade: "medical care", ad: "MEDICAL CARE", gorsel: "tam/52", kirp: [100, 740, 500, 1040] as [number, number, number, number] },
];

// zamanında yaylanarak beliren hap
const PopHap: React.FC<{ t: number; bas: number; bitis: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis, metin, renk, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const z = ilerle(t, 0, s.sure + 1);
  const tPan = c[2].bas - 0.35;
  const pPan = einout(ilerle(t, tPan, 1.1));
  const bit0 = c[1].bas - 0.3, bit1 = tPan;
  // yavaş yakınlaşma; son cümlede görüntü sağa kayar, solda panel açılır
  const pencere: [number, number, number] = [40 + 40 * z - 170 * pPan, 30 + 40 * z, 1840 - 100 * z];
  const tSon = K(1, "eaten last");
  const [sl, al] = pop(t, tSon, 0.5);
  const aSon = al * sol(t, bit1);
  return (
    <>
      <Kamera gorsel="tam/42" pencere={pencere} sinirla={false}>
        <Etiket t={t} bas={K(1, "huge plate")} bitis={bit1} capa={[1700, 760]} konum={[1610, 400]} metin="HUGE PLATE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "refined carbs")} bitis={bit1} capa={[1210, 340]} konum={[1330, 150]} metin="REFINED CARBS" renk={RENK.mercan} />
      </Kamera>
      {/* 1. cümle: sol üstte ifade + iki hap */}
      <Baslik t={t} bas={0.05} bitis={bit0} metin="FOOD ORDER" x={70} y={118} boyut={30} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={K(0, "doesn't remove")} bitis={bit0} metin="DOESN'T REMOVE" x={64} y={205} boyut={96} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 70, top: 288, display: "flex", gap: 18 }}>
        <PopHap t={t} bas={K(0, "carbohydrates")} bitis={bit0} metin="CARBOHYDRATES" renk={RENK.mercan} />
        <PopHap t={t} bas={K(0, "calories")} bitis={bit0} metin="CALORIES" renk={RENK.altin} />
      </div>
      {/* 2. cümle: sonda yense de aynı tabak */}
      {aSon > 0 && (
        <div style={{ position: "absolute", left: 70, top: 86, transform: `scale(${sl})`, transformOrigin: "0% 50%", opacity: aSon,
          display: "flex", alignItems: "center", gap: 12, background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "8px 24px 8px 14px",
          fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 3, whiteSpace: "nowrap" }}>
          <span style={{ width: 16, height: 16, borderRadius: "50%", background: RENK.mercan }} />
          EATEN LAST
        </div>
      )}
      <Baslik t={t} bas={K(1, "still a huge plate")} bitis={bit1} metin="STILL A HUGE PLATE" x={64} y={212} boyut={88} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "of refined carbs.")} bitis={bit1} metin="OF REFINED CARBS" x={64} y={312} boyut={88} renk={RENK.mercan} />
      {/* 3. cümle: sol panel + yerini tutmadığı üç şey */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 940, opacity: kis(pPan * 1.8),
        background: `linear-gradient(to right, ${kagit(1)} 0%, ${kagit(0.99)} 66%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={K(2, "not a substitute")} metin="NOT A SUBSTITUTE FOR" x={64} y={168} boyut={80} renk={RENK.lacivert} />
      {YERINE.map((o, i) => {
        const bas = K(2, o.ifade);
        const y = 362 + i * 190;
        return (
          <React.Fragment key={o.ad}>
            <GorselKart t={t} bas={bas} gorsel={o.gorsel} kirp={o.kirp} x={172} y={y} w={196} h={147} aci={i % 2 ? 2 : -2} />
            <Baslik t={t} bas={bas + 0.1} metin={o.ad} x={318} y={y + 4} boyut={70} renk={RENK.lacivert} />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default S42;
