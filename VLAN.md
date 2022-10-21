# Úvod do problematiky

Bohouš je Network Engineer a má za úkol zapojit firmu UwU.
Jeho šéf požaduje: - použití max 1 switche a max 1 routeru
                   - rozdělení komunikace dle jednotlivých oddělení bez nutnosti mít daná zařízení v 1 fyzické lokaci
                   - efektivní a bezpečné zapojení       

Bohouš si zjednodušené schéma sítě nakreslil a prošel si jednotlivé požadavky a vyšlo mu, že nejlepší řešení bude použít VLANy.

Proč nebylo lepší segmentovat síť?
Co to je VLAN?

# VLAN

VLAN, také Virtual LAN, Virtual Local Area Network je velmi zjednošeně řečeno virtuální rozdělení sítě na L2
Pro celkovou definici je třeba si vysvětlit dva pojmy:
- LAN - Local Area Network = broadcast domain
- Broadcast Domain - Všechna zařízení v sítí, která dostanou broadcastový rámec (dest. MAC FFFF.FFFF.FFFF)

Defaultně switch považuje všechny své interfacy do jedné a té samé broadcastové domény.
Pokud tedy bez žádných dalších extra nastavení budeme chtít mít více broadcastových domén budeme muset koupit další switch.
Pokud jsme ale skrblíci a nechceme utrácet můžeme síť rozdělit do dvou VLAN a tím v podstatě docílit toho samého jako kdybychom koupili další switch.

Na zjednodušeném schématu sítě od Bohouše najdeme právě jednu broadcastovou doménu

## Výhody VLAN

- Snížení vytížení CPU na všech zařízení v síti (Sníží se počet zařízení, které dostanou broadcast)
- Lepší zabezpečení sítě (Omezíme kdo má přístup a k čemu, VLAN nám umožňuje použít )
- Dokáže síť rozdělit například podle různých oddělení bez nutnosti jedné fyzické lokace

## Jak VLAN funguje?

VLAN funguje tak, že na switchi přidělíme určitému interfacu typ portu (ACCESS/TRUNK)

ACCESS - switchport, který většinou používají koncová zařízení např PC.
TRUNK - switchport, přes nějž jde vícero VLAN

Pokud je switchport nastavený na ACCESS tak k němu můžeme přiradit právě jednu VLANu.
Do zařízení pak budou moci proudit jen ty rámce, které přišly z interfacu pod tou VLANou


