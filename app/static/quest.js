if (name_of_page == 'vlan'){
    MCQS = [{
        question: "Co se stane pakliže přiřadíme k Access portu vlan-id, které neexistuje?",
        choice1: "Vznikne chyba",
        choice2: "Interface se zablokuje",
        choice3: "Switch danou VLAN vytvoří",
        choice4: "Switch nebude fungovat normálně",
        answer: 2,
    },
    {
        question: "Lze smazat VLAN 1?",
        choice1: "Ano",
        choice2: "Ne",
        choice3: "Žádná VLAN nejde smazat",
        choice4: "Ano, ale jen pouze když změním Native VLAN",
        answer: 1, 
    },
    {
        question: "Můžu vytvořit VLAN s ID 52824?",
        choice1: "Ne, ID je příliš nízké",
        choice2: "Ano",
        choice3: "Nemůžu tvořit VLAN",
        choice4: "Ne, ID je příliš vysoké",
        answer: 3, 
    },
    {
        question: "K čemu slouží ROAS?",
        choice1: "K průchodu rámců s různými VLANy po médiu",
        choice2: "Ke zprovoznění komunikace mezi VLANy",
        choice3: "K zobrazení všech VLAN na switchi",
        choice4: "K průchodu VLAN po trunku bez označení",
        answer: 1, 
    },
    {
        question: "Je rámec pocházejicí z Native VLAN označen při příchodu na trunk?",
        choice1: "Ne",
        choice2: "Jen pokud je Native VLAN 1",
        choice3: "Ovšem",
        choice4: "Rámce se nikdy neoznačují při příchodu na trunk",
        answer: 0, 
    }
]
}
if (name_of_page == 'sshTelnet'){
    MCQS = [{
        question: "Je tohle pog?",
        choice1: "Ano",
        choice2: "Jasnacka",
        choice3: "Ovšem",
        choice4: "Velmi",
        answer: 1,
    },
    {
        question: "Mas rad UwU?",
        choice1: "Ano",
        choice2: "Jasnacka",
        choice3: "Ovšem",
        choice4: "UwU!!!",
        answer: 3, 
    }]
}
if (name_of_page == 'stp'){
    MCQS = [{
        question: "K čemu má stp zabránit?",
        choice1: "K vytvoření broadcast storm.",
        choice2: "K vytvoření etherchannelu.",
        choice3: "K nastavení IP adres na switchi.",
        choice4: "K zániku MAC adres.",
        answer: 0,
    },
    {
        question: "Které z těchto tvrzení nejlépe charakterizuje broadcast storm?",
        choice1: "Broadcast storm vzniká v síti, kde není router a způsobuje problémy s MAC tabulkou.",
        choice2: "Broadcast storm vzniká, když 2 switche s stp si pošlou rámec.",
        choice3: "Broadcast storm vzniká v redundantní síti, zahlcuje síť.",
        choice4: "Broadcast storm vzniká v síti, která není redundantní, zahlcuje síť.",
        answer: 2, 
    },
    {
        question: "Jak STP řeší broadcast storm?",
        choice1: "Vypnutím celého switche.",
        choice2: "Zablokováním specifických portů.",
        choice3: "Vymazáním MAC tabulky.",
        choice4: "Zablokováním všech fa portů.",
        answer: 1, 
    },
    {
        question: "Podle čeho se stane z jednoho ze switchů root bridge?",
        choice1: "Nejdřív podle větší MAC adresy a pak dle menší priority.",
        choice2: "Podle menší priority a jestliže jsou stejné tak podle větší MAC adresy.",
        choice3: "Podle MAC adresy.",
        choice4: "Podle menší priority a jestliže jsou stejné tak podle menší MAC adresy.",
        answer: 3, 
    },
    {
        question: "Jaký je hlavní rozdíl mezi RSTP a IEEE 802.1d?",
        choice1: "RSTP se snaží co nejvíce zkrátit proces přepnutí z discarding stavu do forwarding stavu.",
        choice2: "RSTP umožňuje každé VLAN udělat svoji STP topologii.",
        choice3: "IEE 802.1d nazývá věci jinak než RSTP.",
        choice4: "RSTP neobsahuje portfast.",
        answer: 0, 
    },
    {
        question: "Co dělá Etherchannel?",
        choice1: "Nastavuje duplex a bandwidth na linku.",
        choice2: "Řeší broadcast storm.",
        choice3: "dělá z nekonečně mnoho fyzických linků 1 virtuální.",
        choice4: "dělá až z 8 fyzických linků 1 virtuální.",
        answer: 3, 
    },
    {
        question: "Jaký etherchannel protokol nenajdete na Juniper switchi?",
        choice1: "ARP",
        choice2: "PAgP",
        choice3: "LACP",
        choice4: "static",
        answer: 1, 
    },
]
}