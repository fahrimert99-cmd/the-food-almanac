# -*- coding: utf-8 -*-
"""Cümle içi zaman hizalaması: noktalama işaretlerini (virgül, iki nokta) Piper'ın ölçülen
duraklamalarına bağlar -> (karakter, saniye) düğümleri. Altyazı ve K() senkronu bunu kullanır.

demo.harita 'en uzun N durak' seçiyordu; uzun cümlelerde virgül yanlış durağa bağlanıp altyazı ve
animasyonlar 1-3 sn kayabiliyordu. Burada eşleme 'konuşma zamanı' ekseninde (duraklamalar çıkarılmış)
sıralı DP ile yapılır; rakamlar ve kısaltmalar okundukları uzunlukta sayılır, karşılığı olmayan işaret atlanır.
"""
import re

def _eslestir(beklenen, konum, sure_d, tol=1.2, atla=1.0, w=1.0):
    """Sıralı eşleme (DP): işaret i -> durak j. Eşleşmeyen işaret 'atla' cezası alır, durak atlamak bedava."""
    n, m = len(beklenen), len(konum)
    INF = float("inf")
    dp = [[INF] * (m + 1) for _ in range(n + 1)]
    yol = [[None] * (m + 1) for _ in range(n + 1)]
    for j in range(m + 1):
        dp[0][j] = 0.0
    for i in range(1, n + 1):
        for j in range(m + 1):
            if dp[i - 1][j] + atla < dp[i][j]:
                dp[i][j], yol[i][j] = dp[i - 1][j] + atla, ("atla", j)
            if j >= 1:
                if dp[i][j - 1] < dp[i][j]:
                    dp[i][j], yol[i][j] = dp[i][j - 1], ("gec", j - 1)
                fark = abs(konum[j - 1] - beklenen[i - 1])
                if fark <= tol:
                    c = dp[i - 1][j - 1] + fark - w * sure_d[j - 1]
                    if c < dp[i][j]:
                        dp[i][j], yol[i][j] = c, ("es", j - 1)
    es, i, j = {}, n, m
    while i > 0:
        tur, k = yol[i][j]
        if tur == "atla":
            i -= 1
        elif tur == "gec":
            j = k
        else:
            es[i - 1] = k
            i, j = i - 1, k
    return es

_BIRLER = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split()
_ONLAR = "_ _ twenty thirty forty fifty sixty seventy eighty ninety".split()

def _sayi_oku(n):
    if n < 20:
        return _BIRLER[n]
    if n < 100:
        return _ONLAR[n // 10] + ("" if n % 10 == 0 else " " + _BIRLER[n % 10])
    if n < 1000:
        return _BIRLER[n // 100] + " hundred" + ("" if n % 100 == 0 else " " + _sayi_oku(n % 100))
    if 1900 <= n < 2100:                              # yıllar: "twenty fifteen"
        return _sayi_oku(n // 100) + " " + (_sayi_oku(n % 100) if n % 100 else "hundred")
    return _sayi_oku(n // 1000) + " thousand" + ("" if n % 1000 == 0 else " " + _sayi_oku(n % 1000))

def _agirlik(metin, duzelt=None):
    """Karakter başına 'söylenme uzunluğu' ağırlığı: rakamlar ve kısaltmalar okunduğu uzunlukta sayılır."""
    w = [1.0] * len(metin)
    desenler = [(re.escape(k), v) for k, v in (duzelt or {}).items()]
    for m in re.finditer(r"\d+(?:\.\d+)?", metin):
        t = m.group()
        oku = " point ".join(_sayi_oku(int(x)) for x in t.split(".")) if len(t) < 7 else t
        desenler.append((re.escape(t), oku))
    for d, oku in desenler:
        for m in re.finditer(d, metin):
            k = len(oku) / max(1, m.end() - m.start())
            for i in range(m.start(), m.end()):
                w[i] = k
    return w

def harita_dp(metin, sure, duraklar, duzelt=None):
    """Cümle içi (karakter, saniye) düğümleri. Virgül/iki nokta işaretleri ölçülen duraklamalarla
    'konuşma zamanı' ekseninde (duraklamalar çıkarılmış süre) sıralı eşlenir; konuşma hızı sabit
    varsayılır, karşılığı olmayan işaret atlanır. (demo.harita'nın 'en uzun N durak' yaklaşımı
    uzun cümlelerde yanlış duraklara bağlanabiliyordu.)"""
    isaret = [mm.start() for mm in re.finditer(r"[,;:](?=\s)", metin)]
    duraklar = sorted(duraklar or [])
    L = len(metin)
    if not isaret or not duraklar:
        return [[0, 0.0], [L, round(sure, 3)]]
    onceki, konum = 0.0, []
    for a, b in duraklar:                    # her durağın konuşma-zamanı konumu
        konum.append(a - onceki)
        onceki += b - a
    S = sure - onceki                        # toplam konuşma süresi
    sure_d = [b - a for a, b in duraklar]
    agirlik = _agirlik(metin, duzelt)
    birikim = [0.0]
    for x in agirlik:
        birikim.append(birikim[-1] + x)
    Wt = birikim[-1]
    beklenen = [birikim[ci] / Wt * S for ci in isaret]
    es = _eslestir(beklenen, konum, sure_d)
    if es:                                   # 2. tur: eşleşen bağlantılar arasında yeniden ölçekle
        dug = [(0.0, 0.0)] + [(birikim[isaret[i]], konum[es[i]]) for i in sorted(es)] + [(Wt, S)]
        def ara(ci):
            x = birikim[ci]
            for (c0, s0), (c1, s1) in zip(dug, dug[1:]):
                if c0 <= x <= c1:
                    return s0 + (s1 - s0) * ((x - c0) / max(1e-6, c1 - c0))
            return S
        es = _eslestir([ara(ci) for ci in isaret], konum, sure_d)
    nokta = [[0, 0.0]]
    for i in sorted(es):
        a, b = duraklar[es[i]]
        nokta += [[isaret[i] + 1, round(a, 3)], [isaret[i] + 2, round(b, 3)]]
    nokta.append([L, round(sure, 3)])
    return nokta
