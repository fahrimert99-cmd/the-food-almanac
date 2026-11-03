// Sahne 30 — STRENGTH: ürün + katılımcılar (sağ sütun; görselin sağ kenarı örtülür)
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, INTER, Kamera, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani, pop, sol, KaynakEtiketi } from "../kutuphane";

const HapPop: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; ikon?: "uyari" }> = ({ t, bas, bitis = 1e9, x, y, metin, renk, ikon }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,0) scale(${sc})`, opacity: al * sol(t, bitis) }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {ikon && <IkonYol ad={ikon} boyut={36} renk={renk} />}
        <Hap metin={metin} renk={renk} boyut={32} />
      </div>
    </div>
  );
};

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tA = c[1].bas - 0.1;
  const CX = 1590;
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        {/* sağ kenardaki görsel sınırını kâğıtla kapat */}
        <div style={{ position: "absolute", left: 1190, top: 0, width: 800, height: 1080,
          background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 60px, ${kagit(1)} 100%)` }} />
        <Etiket t={t} bas={K(0, "prescription")} bitis={tA} capa={[840, 590]} konum={[1010, 400]} metin="PRESCRIPTION" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "enrolled")} />
      <Baslik t={t} bas={K(0, "STRENGTH")} bitis={tA} metin="STRENGTH" x={CX} y={190} boyut={120} hiza="orta" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "different")} bitis={tA} metin="A DIFFERENT PRODUCT" x={CX} y={270} boyut={32} agirlik={800} hiza="orta" />
      <HapPop t={t} bas={K(0, "EPA")} bitis={tA} x={CX} y={380} metin="EPA + DHA" renk={RENK.yesil} />
      <HapPop t={t} bas={K(0, "four")} bitis={tA} x={CX} y={480} metin="4 G A DAY" renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "13,078")} vurgu="13,078" not="STATIN-TREATED ADULTS" x={CX} y={230} genislik={520} />
      <Not t={t} bas={K(1, "average")} metin="AVERAGE AGE 63" x={CX} y={520} boyut={44} agirlik={800} hiza="orta" />
      <HapPop t={t} bas={K(1, "stopped")} x={CX} y={650} metin="STOPPED EARLY" renk={RENK.mercan} ikon="uyari" />
      <Not t={t} bas={K(1, "benefit")} metin="BENEFIT LOOKED UNLIKELY" x={CX} y={750} boyut={30} agirlik={700} hiza="orta" />
    </>
  );
};

export default S30;
