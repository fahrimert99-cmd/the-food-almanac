// Sahne 26 — Ma 2022: 10.709 yetişkin, 24 saatlik idrar, en üst çeyrek −%31.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAlti = K(0, "six studies"), tSayi = K(0, "10,709"), tYas = K(0, "average age");
  const tIdrar = K(0, "24-hour"), tCeyrek = K(1, "top quarter"), tPot = K(1, "potassium"), tYuzde = K(1, "31 percent");
  const tOlay = K(1, "cardiovascular");
  const bit1 = s.cumleler[1].bas - 0.1; // ilk grubun çıkışı
  const [sc, al] = pop(t, tAlti, 0.5);
  const ilk = sol(t, bit1);
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1850])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      {/* 1. cümle: çalışma, kişi sayısı, yaş, idrar örneği */}
      <div style={{ position: "absolute", left: 1000, top: 150, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al * ilk }}>
        <Hap metin="6 STUDIES POOLED" renk={RENK.altin} boyut={34} />
      </div>
      <BaslikBlok t={t} bas={tSayi} satirlar={["10,709", "ADULTS"]} x={1000} y={300} boyut={130} bitis={bit1} />
      <Not t={t} bas={tYas} metin="AVERAGE AGE ABOUT 51" x={1006} y={540} boyut={36} agirlik={800} bitis={bit1} />
      <Etiket t={t} bas={tIdrar} bitis={bit1} capa={[650, 600]} konum={[1180, 660]} metin="24-HOUR URINE SAMPLES" renk={RENK.altin} boyut={30} />
      {/* 2. cümle: dört çeyrek, en üst çeyrek vurgulu */}
      <Baslik t={t} bas={tCeyrek - 0.3} metin="POTASSIUM EXCRETION" x={1000} y={210} boyut={64} renk={RENK.koyuYesil} />
      {[0, 1, 2, 3].map((i) => {
        const bas = tCeyrek - 0.3 + i * 0.12;
        const [sk, ak] = pop(t, bas, 0.5);
        const vurgu = i === 3 ? eout(ilerle(t, tCeyrek, 0.6)) : 0;
        return (
          <div key={i} style={{ position: "absolute", left: 1000 + i * 190, top: 300, width: 150, height: 150, opacity: ak,
            transform: `scale(${sk})`, background: vurgu > 0 ? RENK.yesil : "#FCF8EC", border: `4px solid ${vurgu > 0 ? RENK.koyuYesil : RENK.lacivert}`,
            borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: INTER, fontWeight: 800,
            fontSize: 26, letterSpacing: 2, color: vurgu > 0 ? "#fff" : RENK.lacivert }}>
            {i === 3 ? "TOP" : i === 0 ? "LOW" : ""}
          </div>
        );
      })}
      <Not t={t} bas={tCeyrek} metin="TOP QUARTER" x={1000 + 3 * 190 + 75} y={470} boyut={30} agirlik={800} hiza="orta" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tYuzde} vurgu="–31%" not="lower risk" x={1360} y={560} renk={RENK.koyuYesil} genislik={400} />
      <Not t={t} bas={tOlay} metin="cardiovascular events" x={1360} y={800} boyut={36} hiza="orta" agirlik={800} />
    </>
  );
};

export default S26;
