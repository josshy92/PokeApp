// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Make function to happen after event listener
function generatePassword() {
  var charstotal = prompt("How many pokemon would your like to get?")
  if ((charstotal < 1) || (charstotal > 6) || (isNaN(charstotal) === true)) {
    alert("Number must be between 1 through 6")
    generatePassword()
  } else {

  

  // Add all confirming questions for people to answer
  var isNormal = confirm("Do you want to include the 380 normal pokemon? (Non Paradox or Legendary)")
  var isLegendary = confirm("Do you want to have legendary pokemon?")
  var isParadox = confirm("Do  you want to have paradox pokemon")
  var isFirstEvo = confirm("Do you want to include first evolutions?")
  var hasRaid = confirm("Do you want to include speical raid pokemon i.e. Charizard, Cinderace ?")
  }
// Add all the different variables/arrays for the choices
  var normal = ['Floragato','Meowscarada','Crocalor','Skeledirge','Quaxwell','Quaquaval','Oinkologne','Spidops','Lokix','Skiploom','Jumpluff','Fletchinder','Talonflame','Pawmo','Pawmot','Houndoom','Gumshoos','Greedent','Sunflora','Kricketune','Spewpa','Vivillon','Vespiquen','Corvisquire','Corviknight','Chansey','Blissey','Marill','Azumarill','Masquerain','Floatzel','Clodsire','Golduck','Drednaw','Jigglypuff','Wigglytuff','Kirlia','Gardevoir','Gallade','Hypno','Haunter','Gengar','Maushold','Pikachu','Raichu','Dachsbun','Vigoroth','Slaking','Steenee','Tsareena','Dolliv','Arboliva','Sudowoodo','Lycanroc','Carkol','Coalossal','Luxio','Luxray','Staravia','Staraptor','Oricorio','Flaaffy','Ampharos','Lilligant','Breloom','Flapple','Appletun','Grumpig','Squawkabilly','Mismagius','Hariyama','Crabominable','Salazzle','Donphan','Copperajah','Gabite','Garchomp','Naclstack','Garganacl','Pelipper','Gyarados','Barraskewda','Basculin','Swalot','Persian','Drifblim','Floette','Florges','Dugtrio','Numel','Camerupt','Bronzong','Fraxure','Haxorus','Primeape','Annihilape','Medicham','Lucario','Armarouge','Ceruledge','Whiscash','Bellibolt','Sliggoo','Goodra','Toxicroak','Kilowattrel','Vaporeon','Jolteon','Flareon','Espeon','Umbreon','Leafeon','Glaceon','Sylveon','Dudunsparce','Sawsbuck','Farigiraf','Muk','Mabosstiff','Toxtricity','Pachirisu','Grafaiai','Stantler','Amoonguss','Electrode','Magneton','Magnezone','Ditto','Arcanine','Ursaring','Zangoose','Seviper','Altaria','Gogoat','Tauros','Pyroar','Skuntank','Zoroark','Weavile','Honchkrow','Gothorita','Gothitelle','Polteageist','Mimikyu','Klefki','Indeedee','Brambleghast','Toedscruel','Tropius','Lurantis','Klawf','Scovillain','Cacturne','Rabsca','Venomoth','Forretress','Scizor','Heracross','Espathra','Hippowdon','Krokorok','Krookodile','Sandaconda','Mudsdale','Volcarona','Shelgon','Salamence','Tinkatuff','Tinkaton','Hattrem','Hatterene','Morgrem','Grimmsnarl','Wugtrio','Bombirdier','Palafin','Revavroom','Cyclizar','Orthworm','Sableye','Banette','Falinks','Hawlucha','Spiritomb','Noivern','Drakloak','Dragapult','Glimmora','Rotom','Houndstone','Oranguru','Passimian','Komala','Pupitar','Tyranitar','Stonjourner','Eiscue','Pincurchin','Palossand','Slowbro','Slowking','Gastrodon','Cloyster','Qwilfish','Luvdisc','Lumineon','Bruxish','Alomomola','Dragalge','Clawitzer','Eelektrik','Eelektross','Toxapex','Flamigo','Dragonair','Dragonite','Frosmoth','Abomasnow','Delibird','Beartic','Glalie','Froslass','Cryogonal','Cetitan','Avalugg','Braviary','Bisharp','Kingambit','Zweilous','Hydreigon','Veluza','Dondozo','Tatsugiri','Arctibax','Baxcalibur','Gholdengo']
  var legendary = ["Miraidon", "Koraidon",'Wo-Chien','Chien-Pao','Ting-Lu','Chi-Yu'];

  var paradox = ['Great Tusk','Scream Tail','Brute Bonnet','Flutter Mane','Slither Wing','Sandy Shocks','Iron Treads','Iron Bundle','Iron Hands','Iron Jugulis','Iron Moth','Iron Thorns' ,'Roaring Moon','Iron Valiant'];

  var raid = ["Charizard","Cinderace"];

  var firstEvolution = ['Sprigatito','Fuecoco','Quaxly','Lechonk','Tarountula','Nymble', 'Hoppip','Fletchling','Pawmi','Houndour','Yungoos','Skwovet','Sunkern','Kricketot','Scatterbug','Combee','Rookidee','Happiny','Azurill','Surskit','Buizel','Wooper','Psyduck','Chewtle','Igglybuff','Ralts','Drowzee','Gastly','Tandemaus','Pichu','Fidough','Slakoth','Bounsweet','Smoliv','Bonsly','Rockruff','Rolycoly','Shinx','Starly','Mareep','Petilil','Shroomish','Applin','Spoink','Misdreavus','Makuhita','Crabrawler','Salandit','Phanpy','Cufant','Gible','Nacli','Wingull','Magikarp','Arrokuda','Gulpin','Meowth','Drifloon','Flabébé','Diglett','Torkoal','Bronzor','Axew','Mankey','Meditite','Riolu','Charcadet','Barboach','Tadbulb','Goomy','Croagunk','Wattrel','Eevee','Dunsparce','Deerling','Girafarig','Grimer','Maschiff','Toxel','Dedenne','Shroodle','Foongus','Voltorb','Magnemite','Growlithe','Teddiursa','Swablu','Litleo','Stunky','Zorua','Sneasel','Murkrow','Gothita',
  'Sinistea','Bramblin','Toedscool','Fomantis','Capsakid','Cacnea','Rellor','Venonat','Scyther','Flittle','Hippopotas','Skiddo',
  'Pineco','Sandile','Silicobra','Mudbray','Larvesta','Bagon','Tinkatink','Hatenna','Impidimp','Wiglett','Finizen','Varoom','Shuppet',
  'Noibat','Dreepy','Glimmet','Greavard','Larvitar','Sandygast','Slowpoke','Shellos','Shellder','Finneon','Skrelp','Clauncher','Tynamo','Mareanie','Dratini','Snom','Snover','Cubchoo','Snorunt','Cetoddle','Bergmite','Rufflet','Pawniard','Deino','Frigibax','Gimmighoul',]
  var characterbank = []
  var newpw = []
// Add if statements and add to the bank holding the responses if true
  if (isNormal === true){
    characterbank = characterbank.concat(normal)
    console.log('my normies',normal)
  }  

  if (isLegendary === true) {
    characterbank = characterbank.concat(legendary)
  }
  if (isParadox === true) {
    characterbank = characterbank.concat(paradox)
  }
  if (isFirstEvo === true) {
    characterbank = characterbank.concat(firstEvolution)
  }
  if (hasRaid === true) {
    characterbank = characterbank.concat(raid)
  }
  // Add a function that will randomize the bank holding all of the different choices
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
//  Add the new variable that will take place of the password that will reflect on user screen
shuffle(characterbank)
console.log("random",characterbank)

  for (var i = 0; i < charstotal; i++){
    //can randomize again if you'd like
    // shuffle(characterbank)

    newpw += characterbank[i] + " "
  }

// Make new pw returnn
  return newpw
}
