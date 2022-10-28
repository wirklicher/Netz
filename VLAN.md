# Úvod do problematiky

Bohouš je Network Engineer a má za úkol zapojit firmu UwU.
Jeho šéf požaduje: 
- použití max 1 switche a max 1 routeru
- rozdělení komunikace dle jednotlivých oddělení bez nutnosti mít daná zařízení v 1 fyzické lokaci
- efektivní a bezpečné zapojení       

Bohouš si zjednodušené schéma sítě nakreslil a prošel si jednotlivé požadavky a vyšlo mu, že nejlepší řešení bude použít VLANy.

Proč nebylo lepší segmentovat síť pomoci techniky VLSM?
-> Kdybychom sit rozdelili pomoci techniky VLSM do ruznych podsiti, zapojeni by pak uz nebylo tak efektivni a bezpecne, jak je pozadovano.
Rozdelili bychom jej totiz na L3, ale broadcasty by dostavala vsechna zarizeni na siti (switch pracuje na L2 vyjm. L3 Switch).

## VLAN

VLAN, také Virtual LAN, Virtual Local Area Network je velmi zjednošeně řečeno virtuální rozdělení sítě na L2
Pro celkovou definici je třeba si vysvětlit dva pojmy:
- LAN - Local Area Network = skupina zařízení, které jsou na jednom místě (Třeba v jedné třídě, v kanceláři) a jsou spolu propojené.
- Broadcast Domain - Všechna zařízení v sítí, která dostanou broadcastový rámec (dest. MAC FFFF.FFFF.FFFF)

VLAN tedy umožňuje vytvořit virtuální skupinu zařízení s tím, že se ta zařízení budou chovat stejně jako kdyby spolu byly v LAN

Defaultně switch dava všechny své interfacy do jedné a té samé broadcastové domény.
Pokud tedy bez žádných dalších extra nastavení budeme chtít mít více broadcastových domén budeme muset koupit další switch.
Pokud jsme ale skrblíci a nechceme utrácet můžeme síť rozdělit do dvou VLAN a tím v podstatě docílit toho samého jako kdybychom koupili další switch.

Na zjednodušeném schématu sítě od Bohouše najdeme právě jednu broadcastovou doménu

Je dulezite take zminit ze switch bezne neposila data z jedne VLANy do druhe.

## Výhody VLAN

- Sníženi vytíženosti CPU na všech zařízení v síti (Sníží se počet zařízení, které dostanou broadcast)
- Lepší zabezpečení sítě (Omezíme kdo má přístup a k čemu, VLAN nám umožňuje použít dalsi bezpecnostni nastaveni)
- Dokáže síť rozdělit například podle různých oddělení bez nutnosti jedné fyzické lokace

## Jak VLAN funguje?

VLAN funguje tak, že na switchi přidělíme určitému interfacu typ portu (ACCESS/TRUNK)

ACCESS - switchport, který většinou používají koncová zařízení např PC.
TRUNK - switchport, přes nějž jde vícero VLAN

Pokud je switchport nastavený na ACCESS tak k němu můžeme přiradit právě jednu VLANu.
Do zařízení pak budou moci proudit jen ty rámce, ktere jsou ve stejne VLANE.

# Zakladni VLAN konfigurace (PT)

## Tvorba VLANy

Chceme-li vytvorit VLANu tak se presuneme do global config modu
                Switch#conf t
Tam zadame prikaz
                Switch(config)#vlan {cislo}
A v podstate mame hotovo, dobrou praxi je pak jeste prideleni jmena k VLANe
                Switch(config-vlan)#name {jmeno}

## Prideleni Access portu

Chceme-li nastavit Access portu, budeme se muset dostat do konfigurace interfacu
                switch(config)#interface fa0/1
Dale nastavime typ switchportu (v tomhle pripade ACCESS)
                switch(config-if)#switchport mode access
Pote uz staci Access portu pridelit VLANu
                switch(config-if)#sw access vlan {cislo}
                // pokud VLANa s danym cislem neexistuje switch ji automaticky vytvori

## Zobrazeni jiz vytvorenych VLAN

Chceme-li si zobrazit jiz vytvorene VLANy na switchi staci zadat prikaz
                switch# show vlan brief

# VLAN Ranges

- VLAN 0, 4095 - Reserved, nelze vytvorit
- VLAN 1 - Běžně Nativní VLANa, ke které jsou přidělenéza normalních okolností všechny ostatní interfaci, nejde smazat.
- VLAN 2-1001 - VLANy ktere jdou vytvorit, upravit a smazat a jsou dostupne na vsech CISCO switchich
- VLAN 1002-1005 - VLANy, které jsou tak trochu připomínkou již zastaralých technologii (FDDI a Token ring)
- VLAN 1006-4094 - Tzv. Extended VLANs jsou VLANy které jdou též vytvořit, upravit a smazat, ale nejsou podporovany na starsich Cisco switchich a VTP je nepropaguje.


# Trunking

Paklize se dostaneme do situace, kdy mame vice switchu nebo situaci switch-router, na kterych jsou nastavene VLANy a chceme aby mezi dvema stejnyma VLANama probihala komunikace (viz ukazka)

Mohli bychom mezi switchema nastavit tez Access port a pridelit mu VLANu, ale toto reseni neni vubec efektivni, protoze co VLANa to medium a tudiz kdyby tam tech VLAN bylo vic financne by to nemuselo byti vubec pohodlne
Efektivni reseni je vytvoreni tzv. Trunk portu, ktery umoznuje prenaset data ruznych vlan po jednom mediu.

## Trunking Concept

Pakliže tedy posíláme rámce přes trunk, tak se rámec na switchi označí VLAN ID (to číslo, které zadáváme při vytváření VLANy).
Když poté za pomocí trunku dorazí rámec na další switch, tak ten switch pak už bude vědět z jaké VLANy rámec pochází a podle toho ho bude moci poslat dál.

Na Cisco switchích se můžeme setka s dvěma Trunking protocoly:

- ISL - starší Cisco-propietary protocol, dnes se již nepoužívá
- 802.1Q - IEEE protocol, momentálně nejpoužívanější trunking protocol

802.1Q přidává do Ethernetové hlavičky 4bytový VLAN Header (tag), to pak pomáhá switchi určit z které VLANy daný rámec pochází.
Ten obsahuje 4 další pole:

- Typ
- Priorita
- Flag
- VLAN ID (12 bitů) --> tohle číslo nám udává jaký maximální VLAN ID může být (2**12 = 4096, v praxi kvůli 2 reservovaným hodnotám 4094 viz. VLAN Ranges)

## Native VLAN

Je typ VLANy, která se při průchodem přes trunk neoznačuje. Když pak switch dostane neoznačený rámec, tak předpokládá, že patří Native VLAN, proto je nutné aby Native VLAN byla na obou koncích trunku stejná.
Za normálních okolností je Nativní VLANou VLAN 1, to lze ale změnit.

<Ukazka změny Nativ VLAN>

## Konfigurace trunku


## ROAS - Inter-VLAN routing

Chceme-li posílat rámce mezi VLANy, tak jednou z možností je použití ROAS - Router on a stick.

ROAS funguje tak, že mezi switchem a routrem se nastaví na interfacu switche trunk.
Na interfacu routeru se nakonfigurují subinterfaci.
Na těchto subinterfacech je nutné zadat číslo VLANy a IP adresu.

Př.

<Ukázka konfigurace s ROAS>

Pakliže PC1 (VLAN 10) bude chtít poslat data PC4 (VLAN 30), tak při odchodu ze switche bude rámec označen.
Router ví, že rámec s označením 10 je na jeho subinterfacu g0/0.10.
Router si dále všimne, že jeho dest IP adresa leží na subinterfacu g0/0.30.
Tudíž router nasměruje daný paket na subinterface g0/0.30 a switch bude daný rámec brát tak, že patří do VLAN 30 a dále ho nasměruje do PC4.




