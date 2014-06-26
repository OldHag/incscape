miningXp = 0;
mininglevel = 1;
Tin = 0;
Copper = 0;
Bronze = 0;
function xpgain(a) {
    miningXp+=a;
    xp();
}
function xp(){
    switch(mininglevel){
        case 1: if(miningXp>=83){mininglevel++;};break;case 2: if(miningXp>=174){mininglevel++;};break;case 3: if(miningXp>=276){mininglevel++;};break;case 4: if(miningXp>=388){mininglevel++;};break;case 5: if(miningXp>=512){mininglevel++;};break;case 6: if(miningXp>=650){mininglevel++;};break;case 7: if(miningXp>=801){mininglevel++;};break;case 8: if(miningXp>=969){mininglevel++;};break;case 9: if(miningXp>=1154){mininglevel++;};break;case 10: if(miningXp>=1358){mininglevel++;};break;case 11: if(miningXp>=1584){mininglevel++;};break;case 12: if(miningXp>=1833){mininglevel++;};break;case 13: if(miningXp>=2107){mininglevel++;};break;case 14: if(miningXp>=2411){mininglevel++;};break;case 15: if(miningXp>=2746){mininglevel++;};break;case 16: if(miningXp>=3115){mininglevel++;};break;case 17: if(miningXp>=3523){mininglevel++;};break;case 18: if(miningXp>=3973){mininglevel++;};break;case 19: if(miningXp>=4470){mininglevel++;};break;case 20: if(miningXp>=5018){mininglevel++;};break;case 21: if(miningXp>=5624){mininglevel++;};break;case 22: if(miningXp>=6291){mininglevel++;};break;case 23: if(miningXp>=7028){mininglevel++;};break;case 24: if(miningXp>=7842){mininglevel++;};break;case 25: if(miningXp>=8740){mininglevel++;};break;case 26: if(miningXp>=9730){mininglevel++;};break;case 27: if(miningXp>=10824){mininglevel++;};break;case 28: if(miningXp>=12031){mininglevel++;};break;case 29: if(miningXp>=13363){mininglevel++;};break;case 30: if(miningXp>=14833){mininglevel++;};break;case 31: if(miningXp>=16456){mininglevel++;};break;case 32: if(miningXp>=18247){mininglevel++;};break;case 33: if(miningXp>=20224){mininglevel++;};break;case 34: if(miningXp>=22406){mininglevel++;};break;case 35: if(miningXp>=24815){mininglevel++;};break;case 36: if(miningXp>=27473){mininglevel++;};break;case 37: if(miningXp>=30408){mininglevel++;};break;case 38: if(miningXp>=33648){mininglevel++;};break;case 39: if(miningXp>=37224){mininglevel++;};break;case 40: if(miningXp>=41171){mininglevel++;};break;case 41: if(miningXp>=45529){mininglevel++;};break;case 42: if(miningXp>=50339){mininglevel++;};break;case 43: if(miningXp>=55649){mininglevel++;};break;case 44: if(miningXp>=61512){mininglevel++;};break;case 45: if(miningXp>=67983){mininglevel++;};break;case 46: if(miningXp>=75127){mininglevel++;};break;case 47: if(miningXp>=83014){mininglevel++;};break;case 48: if(miningXp>=91721){mininglevel++;};break;case 49: if(miningXp>=101333){mininglevel++;};break;case 50: if(miningXp>=111945){mininglevel++;};break;case 51: if(miningXp>=123660){mininglevel++;};break;case 52: if(miningXp>=136594){mininglevel++;};break;case 53: if(miningXp>=150872){mininglevel++;};break;case 54: if(miningXp>=166636){mininglevel++;};break;case 55: if(miningXp>=184040){mininglevel++;};break;case 56: if(miningXp>=203254){mininglevel++;};break;case 57: if(miningXp>=224466){mininglevel++;};break;case 58: if(miningXp>=247886){mininglevel++;};break;case 59: if(miningXp>=273742){mininglevel++;};break;case 60: if(miningXp>=302288){mininglevel++;};break;case 61: if(miningXp>=333804){mininglevel++;};break;case 62: if(miningXp>=368599){mininglevel++;};break;case 63: if(miningXp>=407015){mininglevel++;};break;case 64: if(miningXp>=449428){mininglevel++;};break;case 65: if(miningXp>=496254){mininglevel++;};break;case 66: if(miningXp>=547953){mininglevel++;};break;case 67: if(miningXp>=605032){mininglevel++;};break;case 68: if(miningXp>=668051){mininglevel++;};break;case 69: if(miningXp>=737627){mininglevel++;};break;case 70: if(miningXp>=814445){mininglevel++;};break;case 71: if(miningXp>=899257){mininglevel++;};break;case 72: if(miningXp>=992895){mininglevel++;};break;case 73: if(miningXp>=1096278){mininglevel++;};break;case 74: if(miningXp>=1210421){mininglevel++;};break;case 75: if(miningXp>=1336443){mininglevel++;};break;case 76: if(miningXp>=1475581){mininglevel++;};break;case 77: if(miningXp>=1629200){mininglevel++;};break;case 78: if(miningXp>=1798808){mininglevel++;};break;case 79: if(miningXp>=1986068){mininglevel++;};break;case 80: if(miningXp>=2192818){mininglevel++;};break;case 81: if(miningXp>=2421087){mininglevel++;};break;case 82: if(miningXp>=2673144){mininglevel++;};break;case 83: if(miningXp>=2951373){mininglevel++;};break;case 84: if(miningXp>=325594){mininglevel++;};break;case 85: if(miningXp>=3597792){mininglevel++;};break;case 86: if(miningXp>=3972294){mininglevel++;};break;case 87: if(miningXp>=4385776){mininglevel++;};break;case 88: if(miningXp>=4842295){mininglevel++;};break;case 89: if(miningXp>=5346332){mininglevel++;};break;case 90: if(miningXp>=5902831){mininglevel++;};break;case 91: if(miningXp>=6517253){mininglevel++;};break;case 92: if(miningXp>=7195629){mininglevel++;};break;case 93: if(miningXp>=7944614){mininglevel++;};break;case 94: if(miningXp>=8771558){mininglevel++;};break;case 95: if(miningXp>=9684557){mininglevel++;};break;case 96: if(miningXp>=10692629){mininglevel++;};break;case 97: if(miningXp>=11805606){mininglevel++;};break;case 98: if(miningXp>=13034431){mininglevel++;};break;
    }
}
function rMiningLevel(){
    //if(document.getElementById("xp").checked){document.getElementById("mininglvl").innerHTML = "xp: "+String(miningXp)+" Mining Level: "+ String(mininglevel}
    //else {document.getElementById("mininglvl").innerHTML = "Mining Level: "+ String(mininglevel);}
    document.getElementById("mininglvl").innerHTML = "Mining Level: "+ String(mininglevel);
}
function rTin() {
    document.getElementById("Tinamm").innerHTML = String(Tin)+" Tin";
}
function rCopper() {
    document.getElementById("Copperamm").innerHTML = String(Copper)+" Copper";
}
function rBronze() {
    document.getElementById("Bronzeamm").innerHTML = String(Bronze)+" Bronze";
}
function mineTin() {
    Tin++;
    rTin();
    xpgain(30);
    rMiningLevel();
}
function mineCopper() {
    Copper++;
    rCopper();
}
function smeltBronze() {
    if(Tin>=1 && Copper>=1){Tin--;Copper--;Bronze++;}
        rBronze();
        rTin();
        rCopper();
}
