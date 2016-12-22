//-------------------------------
//========= PokeBlock ===========
//-------------------------------
///####### Dev Version #######///
/*_________________________________________________/*
Creditos:
Este mod fue creado por:
XScripter0 - Fundador [Funciones, Modelos, Manejador de Publicidad]
Wartave - Fundador [Funciones, Modelos, Interfaz]

Agradecimientos especiales:

Advertencias:
Este mod es solo para su uso en el BlockLancher.
Se prohibe copiar su contenido o sus funciones.
Se prohibe editar de alguna forma este mod.
Se prohibe vender este mod o sacar probecho de ninguna manera monetaria.
Este mod no es de codigo abierto.
--------------------------------------------------
Este mod no esta afiliado a Nintendo, todos los nombres usados pertenecen a Nintendo.
Este mod no esta afiliado a Mojang.
CopyRight© 2016 - 2018
/*_________________________________________________*/
var VenusaurRenderType = Renderer.createHumanoidRenderer();
var CharmeleonRenderType = Renderer.createHumanoidRenderer();
var CharizardRenderType = Renderer.createHumanoidRenderer();
var CharmanderRenderType = Renderer.createHumanoidRenderer();
var VaporeonRenderType = Renderer.createHumanoidRenderer();
var EmberonRenderType = Renderer.createHumanoidRenderer();
var JolteonRenderType = Renderer.createHumanoidRenderer();
var BulbasaurRenderType = Renderer.createHumanoidRenderer();
var IvysaurRenderType = Renderer.createHumanoidRenderer();
var OddishRenderType = Renderer.createHumanoidRenderer();
var GeodudeRenderType = Renderer.createHumanoidRenderer();
var GravelerRenderType = Renderer.createHumanoidRenderer();
var GolemRenderType = Renderer.createHumanoidRenderer();
var DratiniRenderType = Renderer.createHumanoidRenderer();
var DragonairRenderType = Renderer.createHumanoidRenderer();
var CaterpieRenderType = Renderer.createHumanoidRenderer();
var MagnemiteRenderType = Renderer.createHumanoidRenderer();
var SnorlaxRenderType = Renderer.createHumanoidRenderer();
var BellsproutRenderType = Renderer.createHumanoidRenderer();
var GyaradosRenderType = Renderer.createHumanoidRenderer();
var PikachuRenderType = Renderer.createHumanoidRenderer();
//var VenonatRenderType = Renderer.createHumanoidRenderer();
var VenomothRenderType = Renderer.createHumanoidRenderer();
var DiglettRenderType = Renderer.createHumanoidRenderer();
var DugtrioRenderType = Renderer.createHumanoidRenderer();
var LaprasRenderType = Renderer.createHumanoidRenderer();
var EeveeRenderType = Renderer.createHumanoidRenderer();
var RattataRenderType = Renderer.createHumanoidRenderer();
var SandshrewRenderType = Renderer.createHumanoidRenderer();
var TangelaRenderType = Renderer.createHumanoidRenderer();
var RaichuRenderType = Renderer.createHumanoidRenderer();
var VoltorbRenderType = Renderer.createHumanoidRenderer();
var ElectrodeRenderType = Renderer.createHumanoidRenderer();

var SquirtleRenderType=Renderer.createHumanoidRenderer();
var WartortleRenderType=Renderer.createHumanoidRenderer();
var BlastoiseRenderType = Renderer.createHumanoidRenderer();
var WeepinbellRenderType=Renderer.createHumanoidRenderer();
var ButterfreeRenderType= Renderer.createHumanoidRenderer();
var GastlyRenderType = Renderer.createHumanoidRenderer();
var HitmonleeRenderType = Renderer.createHumanoidRenderer();
var WeedleRenderType = Renderer.createHumanoidRenderer();
var RaticateRenderType = Renderer.createHumanoidRenderer();
var ZubatRenderType = Renderer.createHumanoidRenderer();
var VileplumeRenderType = Renderer.createHumanoidRenderer();

//===============================
// Legendarios
//===============================
var MoltresRenderType = Renderer.createHumanoidRenderer();
var ArticunoRenderType = Renderer.createHumanoidRenderer();

addBlastoiseRenderType(BlastoiseRenderType);
addCharmanderRenderType(CharmanderRenderType);
addBulbasaurRenderType(BulbasaurRenderType);
addIvysaurRenderType(IvysaurRenderType);
addVenusaurRenderType(VenusaurRenderType);
addCharmeleonRenderType(CharmeleonRenderType);
addCharizardRenderType(CharizardRenderType);


addVaporeonRenderType(VaporeonRenderType);
addJolteonRenderType(JolteonRenderType);
addEmberonRenderType(EmberonRenderType);

addButterfreeRenderType(ButterfreeRenderType)
addWeepinbellRenderType(WeepinbellRenderType);
addSquirtleRenderType(SquirtleRenderType);
addWartortleRenderType(WartortleRenderType);
addElectrodeRenderType(ElectrodeRenderType);
addVoltorbRenderType(VoltorbRenderType);
addRaichuToRenderType(RaichuRenderType);
addTangelaToRenderType(TangelaRenderType);
addSandshrewToRenderType(SandshrewRenderType);

addRattataRenderType(RattataRenderType);
addEeveeRenderType(EeveeRenderType);
addLaprasRenderType(LaprasRenderType);
addPikachuToRenderType(PikachuRenderType);
addGyaradosRenderType(GyaradosRenderType); 
addMoltresRenderType(MoltresRenderType);
addArticunoRenderType(ArticunoRenderType);
addDugtrioRenderType(DugtrioRenderType);
addDiglettRenderType(DiglettRenderType);
addVenomothRenderType(VenomothRenderType);
//addVenonatRenderType(VenonatRenderType);
addBellsproutRenderType(BellsproutRenderType);
addSnorlaxRenderType(SnorlaxRenderType);
addMagnemiteRenderType(MagnemiteRenderType);
addCaterpieRenderType(CaterpieRenderType);
addDragonairRenderType(DragonairRenderType);
addDratiniRenderType(DratiniRenderType);
addGravelerRenderType(GravelerRenderType);
addGolemRenderType(GolemRenderType);
addGeodudeRenderType(GeodudeRenderType);
addOddishRenderType(OddishRenderType);
addGastlyRenderType(GastlyRenderType);
addHitmonleeRenderType(HitmonleeRenderType);
addRaticateRenderType(RaticateRenderType);
addWeedleRenderType(WeedleRenderType);
addZubatRenderType(ZubatRenderType);
addVileplumeRenderType(VileplumeRenderType);

///==============================
// --------- Variables ----------
///==============================
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	var plive = new android.widget.TextView(ctx); 
	var pbar = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
	var wlive = new android.widget.TextView(ctx); 
	var wbar = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);

var PokemonType = {
		normal:{
				Name:"pokemon.type.normal",
				Icon:"sprites/types/normal.png",
				Effectivity:{"pokemon.type.normal":100,"pokemon.type.fire":100,"pokemon.type.water":100,"pokemon.type.electric":100,"pokemon.type.grass":100,"pokemon.type.ice":100,"pokemon.type.fighting":100,"pokemon.type.poison":100,"pokemon.type.ground":100,"pokemon.type.flying":100,"pokemon.type.psychic":100,"pokemon.type.bug":100,"pokemon.type.rock":50,"pokemon.type.ghost":0,"pokemon.type.dragon":100,"pokemon.type.dark":100,"pokemon.type.steel":50,"pokemon.type.fairy":100}
		},
		fire:{
				Name:"pokemon.type.fire",
				Icon:"sprites/types/fire.png",
				Effectivity:{"pokemon.type.normal":100,"pokemon.type.fire":50,"pokemon.type.water":50,"pokemon.type.electric":100,"pokemon.type.grass":200,"pokemon.type.ice":200,"pokemon.type.fighting":100,"pokemon.type.poison":100,"pokemon.type.ground":100,"pokemon.type.flying":100,"pokemon.type.psychic":100,"pokemon.type.bug":200,"pokemon.type.rock":50,"pokemon.type.ghost":100,"pokemon.type.dragon":50,"pokemon.type.dark":100,"pokemon.type.steel":200,"pokemon.type.fairy":100}
		},
		water:{
				Name:"pokemon.type.water",
				Icon:"sprites/types/water.png",
				Effectivity:{"pokemon.type.normal":100,"pokemon.type.fire":200,"pokemon.type.water":50,"pokemon.type.electric":100,"pokemon.type.grass":500,"pokemon.type.ice":100,"pokemon.type.fighting":100,"pokemon.type.poison":100,"pokemon.type.ground":200,"pokemon.type.flying":100,"pokemon.type.psychic":100,"pokemon.type.bug":100,"pokemon.type.rock":200,"pokemon.type.ghost":0,"pokemon.type.dragon":50,"pokemon.type.dark":100,"pokemon.type.steel":100,"pokemon.type.fairy":100}
		},
		electric:{
				Name:"pokemon.type.electric",
				Icon:"sprites/types/electric.png",
				Effectivity:{"pokemon.type.normal":100,"pokemon.type.fire":100,"pokemon.type.water":200,"pokemon.type.electric":50,"pokemon.type.grass":50,"pokemon.type.ice":100,"pokemon.type.fighting":100,"pokemon.type.poison":100,"pokemon.type.ground":0,"pokemon.type.flying":200,"pokemon.type.psychic":100,"pokemon.type.bug":100,"pokemon.type.rock":100,"pokemon.type.ghost":100,"pokemon.type.dragon":50,"pokemon.type.dark":100,"pokemon.type.steel":100,"pokemon.type.fairy":100}
		},
		grass:{
				Name:"pokemon.type.grass",
				Icon:"sprites/types/grass.png",
				Effectivity:{"pokemon.type.normal":100,"pokemon.type.fire":50,"pokemon.type.water":200,"pokemon.type.electric":100,"pokemon.type.grass":50,"pokemon.type.ice":100,"pokemon.type.fighting":100,"pokemon.type.poison":50,"pokemon.type.ground":200,"pokemon.type.flying":50,"pokemon.type.psychic":100,"pokemon.type.bug":50,"pokemon.type.rock":200,"pokemon.type.ghost":100,"pokemon.type.dragon":50,"pokemon.type.dark":100,"pokemon.type.steel":50,"pokemon.type.fairy":100}
		},
		ice:{
				Name:"pokemon.type.ice",
				Icon:"sprites/types/ice.png",
				Effectivity:{"pokemon.type.normal":100,"pokemon.type.fire":50,"pokemon.type.water":50,"pokemon.type.electric":100,"pokemon.type.grass":200,"pokemon.type.ice":50,"pokemon.type.fighting":100,"pokemon.type.poison":100,"pokemon.type.ground":200,"pokemon.type.flying":200,"pokemon.type.psychic":100,"pokemon.type.bug":100,"pokemon.type.rock":100,"pokemon.type.ghost":100,"pokemon.type.dragon":200,"pokemon.type.dark":100,"pokemon.type.steel":50,"pokemon.type.fairy":100}
		},
		fighting:{
				Name:"pokemon.type.fighting",
				Icon:"sprites/types/fighting.png",
				Effectivity:{"pokemon.type.normal":200,"pokemon.type.fire":100,"pokemon.type.water":100,"pokemon.type.electric":100,"pokemon.type.grass":100,"pokemon.type.ice":200,"pokemon.type.fighting":100,"pokemon.type.poison":50,"pokemon.type.ground":100,"pokemon.type.flying":50,"pokemon.type.psychic":50,"pokemon.type.bug":50,"pokemon.type.rock":200,"pokemon.type.ghost":0,"pokemon.type.dragon":100,"pokemon.type.dark":200,"pokemon.type.steel":200,"pokemon.type.fairy":50}
		},
		poison:{
				Name:"pokemon.type.poison",
				Icon:"sprites/types/poision.png",
				Effectivity:{"pokemon.type.normal":100,"pokemon.type.fire":100,"pokemon.type.water":100,"pokemon.type.electric":100,"pokemon.type.grass":200,"pokemon.type.ice":100,"pokemon.type.fighting":100,"pokemon.type.poison":50,"pokemon.type.ground":50,"pokemon.type.flying":100,"pokemon.type.psychic":100,"pokemon.type.bug":100,"pokemon.type.rock":50,"pokemon.type.ghost":50,"pokemon.type.dragon":100,"pokemon.type.dark":100,"pokemon.type.steel":0,"pokemon.type.fairy":200}
		},
		ground:{
				Name:"pokemon.type.ground",
				Icon:"sprites/types/ground.png",
				Effectivity:{"pokemon.type.normal":100,"pokemon.type.fire":200,"pokemon.type.water":100,"pokemon.type.electric":200,"pokemon.type.grass":50,"pokemon.type.ice":100,"pokemon.type.fighting":100,"pokemon.type.poison":200,"pokemon.type.ground":100,"pokemon.type.flying":0,"pokemon.type.psychic":100,"pokemon.type.bug":50,"pokemon.type.rock":200,"pokemon.type.ghost":100,"pokemon.type.dragon":100,"pokemon.type.dark":100,"pokemon.type.steel":200,"pokemon.type.fairy":100}
		},
		flying:{
				Name:"pokemon.type.flying",
				Icon:"sprites/types/flying.png",
				Effectivity:{"pokemon.type.normal":100,"pokemon.type.fire":100,"pokemon.type.water":100,"pokemon.type.electric":50,"pokemon.type.grass":200,"pokemon.type.ice":100,"pokemon.type.fighting":200,"pokemon.type.poison":100,"pokemon.type.ground":100,"pokemon.type.flying":100,"pokemon.type.psychic":100,"pokemon.type.bug":200,"pokemon.type.rock":50,"pokemon.type.ghost":100,"pokemon.type.dragon":100,"pokemon.type.dark":100,"pokemon.type.steel":50,"pokemon.type.fairy":100}
		},
		psychic:{
				Name:"pokemon.type.psychic",
				Icon:"sprites/types/psychic.png",
				Effectivity:{"pokemon.type.normal":100,"pokemon.type.fire":100,"pokemon.type.water":100,"pokemon.type.electric":100,"pokemon.type.grass":100,"pokemon.type.ice":100,"pokemon.type.fighting":200,"pokemon.type.poison":200,"pokemon.type.ground":100,"pokemon.type.flying":100,"pokemon.type.psychic":50,"pokemon.type.bug":100,"pokemon.type.rock":100,"pokemon.type.ghost":100,"pokemon.type.dragon":100,"pokemon.type.dark":0,"pokemon.type.steel":50,"pokemon.type.fairy":100}
		},
		bug:{
				Name:"pokemon.type.bug",
				Icon:"sprites/types/bug.png",
				Effectivity:{"pokemon.type.normal":100,"pokemon.type.fire":50,"pokemon.type.water":100,"pokemon.type.electric":100,"pokemon.type.grass":200,"pokemon.type.ice":100,"pokemon.type.fighting":50,"pokemon.type.poison":50,"pokemon.type.ground":100,"pokemon.type.flying":50,"pokemon.type.psychic":200,"pokemon.type.bug":100,"pokemon.type.rock":100,"pokemon.type.ghost":50,"pokemon.type.dragon":100,"pokemon.type.dark":2000,"pokemon.type.steel":50,"pokemon.type.fairy":50}
		},
		rock:{
				Name:"pokemon.type.rock",
				Icon:"sprites/types/rock.png",
				Effectivity:{"pokemon.type.normal":100,"pokemon.type.fire":200,"pokemon.type.water":100,"pokemon.type.electric":100,"pokemon.type.grass":100,"pokemon.type.ice":200,"pokemon.type.fighting":50,"pokemon.type.poison":100,"pokemon.type.ground":50,"pokemon.type.flying":200,"pokemon.type.psychic":100,"pokemon.type.bug":200,"pokemon.type.rock":100,"pokemon.type.ghost":100,"pokemon.type.dragon":100,"pokemon.type.dark":100,"pokemon.type.steel":50,"pokemon.type.fairy":100}
		},
		ghost:{
				Name:"pokemon.type.ghost",
				Icon:"sprites/types/ghost.png",
				Effectivity:{"pokemon.type.normal":0,"pokemon.type.fire":100,"pokemon.type.water":100,"pokemon.type.electric":100,"pokemon.type.grass":100,"pokemon.type.ice":100,"pokemon.type.fighting":100,"pokemon.type.poison":100,"pokemon.type.ground":100,"pokemon.type.flying":100,"pokemon.type.psychic":200,"pokemon.type.bug":100,"pokemon.type.rock":100,"pokemon.type.ghost":200,"pokemon.type.dragon":100,"pokemon.type.dark":50,"pokemon.type.steel":100,"pokemon.type.fairy":100}
		},
		dragon:{
				Name:"pokemon.type.dragon",
				Icon:"sprites/types/dragon.png",
				Effectivity:{"pokemon.type.normal":100,"pokemon.type.fire":100,"pokemon.type.water":100,"pokemon.type.electric":100,"pokemon.type.grass":100,"pokemon.type.ice":100,"pokemon.type.fighting":100,"pokemon.type.poison":100,"pokemon.type.ground":100,"pokemon.type.flying":100,"pokemon.type.psychic":100,"pokemon.type.bug":100,"pokemon.type.rock":100,"pokemon.type.ghost":100,"pokemon.type.dragon":200,"pokemon.type.dark":100,"pokemon.type.steel":50,"pokemon.type.fairy":0}
		},
		dark:{
				Name:"pokemon.type.dark",
				Icon:"sprites/types/dark.png",
				Effectivity:{"pokemon.type.normal":100,"pokemon.type.fire":100,"pokemon.type.water":100,"pokemon.type.electric":100,"pokemon.type.grass":100,"pokemon.type.ice":100,"pokemon.type.fighting":50,"pokemon.type.poison":100,"pokemon.type.ground":100,"pokemon.type.flying":100,"pokemon.type.psychic":20,"pokemon.type.bug":100,"pokemon.type.rock":100,"pokemon.type.ghost":200,"pokemon.type.dragon":100,"pokemon.type.dark":50,"pokemon.type.steel":100,"pokemon.type.fairy":50}
		},
		steel:{
				Name:"pokemon.type.steel",
				Icon:"sprites/types/steel.png",
				Effectivity:{"pokemon.type.normal":100,"pokemon.type.fire":50,"pokemon.type.water":50,"pokemon.type.electric":50,"pokemon.type.grass":100,"pokemon.type.ice":200,"pokemon.type.fighting":100,"pokemon.type.poison":100,"pokemon.type.ground":100,"pokemon.type.flying":100,"pokemon.type.psychic":100,"pokemon.type.bug":100,"pokemon.type.rock":200,"pokemon.type.ghost":10,"pokemon.type.dragon":100,"pokemon.type.dark":100,"pokemon.type.steel":50,"pokemon.type.fairy":200}
		},
		fairy:{
				Name:"pokemon.type.fairy",
				Icon:"sprites/types/fairy.png",
				Effectivity:{"pokemon.type.normal":100,"pokemon.type.fire":50,"pokemon.type.water":100,"pokemon.type.electric":100,"pokemon.type.grass":100,"pokemon.type.ice":100,"pokemon.type.fighting":200,"pokemon.type.poison":50,"pokemon.type.ground":100,"pokemon.type.flying":100,"pokemon.type.psychic":100,"pokemon.type.bug":100,"pokemon.type.rock":100,"pokemon.type.ghost":100,"pokemon.type.dragon":200,"pokemon.type.dark":200,"pokemon.type.steel":50,"pokemon.type.fairy":100}
		}
};


var PokemonAttack = {
    vineWhip:{
        name:"attack.lovergrow.name",
        description:"attack.overgrow.description",
        damage:3,
        type:"PokemonType.grass",
        range:[5,10],
        effect:function(attacker,victim){
			Level.setTile(Entity.getX(victim),Entity.getY(victim)+1,Entity.getZ(victim),20);
        //Entity.setHealth(victim,Entity.getHealth(victim)-Math.floor((this.damage*attacker.level)-victim.level));    
		}        
    },
    overGrow:{
        name:"at.overgrow.name ",
        description:"attack.overgrow.description",
        damage:5,
        range:[5,10],
        type:"PokemonType.grass",
        effect:function(attacker,victim){
        Entity.setHealth(victim,Entity.getHealth(victim)-Math.floor((this.damage*attacker.level)-victim.level));    
		}        
    },
    fireBall:{
        name:"Fire Ball",
        description:"attack.overgrow.description",
        damage:6,
        range:[5,10],
        type:"PokemonType.grass",
        effect:function(attacker,victim){
        Entity.setHealth(victim,Entity.getHealth(victim)-Math.floor((this.damage*attacker.level)-victim.level));    
		}        
    },
    GUAbt:{
        name:"at.CG...CB.name ",
        description:"attack.overgrow.description",
        damage:5,
        range:[5,10],
        type:"PokemonType.grass",
        effect:function(attacker,victim){
        Entity.setHealth(victim,Entity.getHealth(victim)-Math.floor((this.damage*attacker.level)-victim.level));    
		}        
    },	
    GUAu:{
        name:"agugu ",
        description:"attack.overgrow.description",
        damage:5,
        range:[10,20],
        type:"PokemonType.grass",
        effect:function(attacker,victim){
        Entity.setHealth(victim,Entity.getHealth(victim)-Math.floor((this.damage*attacker.level)-victim.level));    
		}        
    }	
};




var Pokemon={
	Bulbasaur:{
		name:"Bulbasaur",
        description:"pokemon.bulbasaur.description",
        type:["PokemonType.grass","PokemonType.poison"],
        attacks:[PokemonAttack.vineWhip,null,null,null],
        evolution:"Pokemon.Ivysaur",
        skin:"mob/1bulbasaur1.png",
        render:BulbasaurRenderType.renderType,
        sprite:"sprites/Bulbasaur.png"		
	},
	Ivysaur:{
		name:"Ivysaur",
        description:"pokemon.bulbasaur.description",
        type:["PokemonType.grass","PokemonType.poison"],
        attacks:[PokemonAttack.vineWhip,null,null,null],
        evolution:"Pokemon.Venusaur",
        skin:"mob/1Ivysaur1.png",
        render:IvysaurRenderType.renderType,
        sprite:"sprites/Ivysaur.png"		
	},
	Venusaur:{
		name:"Venusaur",
        description:"pokemon.bulbasaur.description",
        type:["PokemonType.grass","PokemonType.poison"],
        attacks:[PokemonAttack.vineWhip,null,null,null],
        evolution:null,
        skin:"mob/1Venusaur1.png",
        render:VenusaurRenderType.renderType,
        sprite:"sprites/Venusaur.png"		
	},
	Charmander:{
		name:"Charmander",
        description:"pokemon.charmander.description",
        type:["PokemonType.fire",null],
        attacks:[PokemonAttack.fireBall,null,null,null],
        evolution:"Pokemon.Charmeleon",
        skin:"mob/1Charmander1.png",
        render:CharmanderRenderType.renderType,
        sprite:"sprites/Charmander.png"		
	},
	Charmeleon:{
		name:"Charmeleon",
        description:"pokemon.charmeleon.description",
        type:["PokemonType.fire",null],
        attacks:[PokemonAttack.fireBall,null,null,null],
        evolution:"Pokemon.Charizard",
        skin:"mob/1Charmeleon1.png",
        render:CharmeleonRenderType.renderType,
        sprite:"sprites/Charmeleon.png"		
	},
	Charizard:{
		name:"Charizard",
        description:"pokemon.charizard.description",
        type:["PokemonType.fire","PokemonType.flying"],
        attacks:[PokemonAttack.fireBall,null,null,null],
        evolution:null,
        skin:"mob/1Charizard1.png",
        render:CharizardRenderType.renderType,
        sprite:"sprites/Charizard.png"		
	},
	Squirtle:{
		name:"Squirtle",
        description:"pokemon.squirtle.description",
        type:["PokemonType.water",null],
        attacks:[PokemonAttack.vineWhip,null,null,null],
        evolution:"Pokemon.Wartortle",
        skin:"mob/1Squirtle1.png",
        render:SquirtleRenderType.renderType,
        sprite:"sprites/Squirtle.png"		
	},
	Wartortle:{
		name:"Wartortle",
        description:"pokemon.wartortle.description",
        type:["PokemonType.vineWhip",null],
        attacks:[PokemonAttack.vineWhip,null,null,null],
        evolution:"Pokemon.Blastoise",
        skin:"mob/1Wartortle1.png",
        render:WartortleRenderType.renderType,
        sprite:"sprites/Wartortle.png"		
	},
	Blastoise:{
		name:"Blastoise",
        description:"pokemon.blastoise.description",
        type:["PokemonType.water",null],
        attacks:[PokemonAttack.vineWhip,null,null,null],
        evolution:null,
        skin:"mob/1Blastoise1.png",
        render:BlastoiseRenderType.renderType,
        sprite:"sprites/Blastoise.png"		
	}
};

var spawnTime = 5*20;
function spawnRandomPokemon(){
	var rndNumber = Math.floor(Math.random()*Pokemon.length);
	var rndPokemon = Pokemon[rndNumber];
	clientMessage("Random Pokemon Is #"+rndNumber+"\n");
	//PokeBlock.Pokemon.spawn(Player.getX(),Player.getY()+1,Player.getZ(),Math.floor(Math.random()*10+5),rndPokemon);
}


///==============================
// --------- Funciones ----------
///==============================

function pokemonsFollowPlayer(){
for(i=0; i<5; i++){
if(PokeBlock.PokemonInventory[i].spawned==true){
if(Entity.getY( PokeBlock.PokemonInventory[i]) > Entity.getY(Player.getEntity())){
Entity.setPosition(PokeBlock.PokemonInventory[i], Entity.getX(Player.getEntity()) , Entity.getY(Player.getEntity())-0.10, Entity.getZ(Player.getEntity()));
}
if(checkProximity(PokeBlock.PokemonInventory[i] , Player.getEntity() , 5, 50)){
Entity.setVelY( PokeBlock.PokemonInventory[i] ,-0.1);
Entity.setVelZ( PokeBlock.PokemonInventory[i] ,0);
Entity.setVelX( PokeBlock.PokemonInventory[i] ,0);
}else{
var angulo = Math.atan2((Entity.getZ(Player.getEntity()) - Entity.getZ(PokeBlock.PokemonInventory[i])),(Entity.getX(Player.getEntity()) - Entity.getX(PokeBlock.PokemonInventory[i])));
Entity.setVelX(PokeBlock.PokemonInventory[i],(Math.cos(angulo) * 0.30));
Entity.setVelZ(PokeBlock.PokemonInventory[i],(Math.sin(angulo) * 0.30));
Entity.setVelY(PokeBlock.PokemonInventory[i],0.01);
Entity.setRot(PokeBlock.PokemonInventory[i], (((angulo * 180) / Math.PI) - 90), Entity.getPitch(PokeBlock.PokemonInventory[i]));	

}
}
}
}

function checkProximity(entity1, entity2, distanceXZ, distanceY)
{
	if(!(Math.abs(Entity.getX(entity1) - Entity.getX(entity2)) <= distanceXZ))
		return false;
	if(!(Math.abs(Entity.getY(entity1) - Entity.getY(entity2)) <= distanceY))
		return false;
	if(!(Math.abs(Entity.getZ(entity1) - Entity.getZ(entity2)) <= distanceXZ))
		return false;
	return true;
}

var Pokeball = {
	base:{
		name:"pokeball.base.name",
		icon:"items-opaque/pokeball_0.png",
		image:"gui/pokemon_selector/base.png",
		catchRate:1.0
	},
	great:{
		name:"pokeball.great.name",
		icon:"items-opaque/pokeball_1.png",
		image:"gui/pokemon_selector/great.png",
		catchRate:1.5
	},
	ultra:{
		name:"pokeball.ultra.name",
		icon:"items-opaque/pokeball_1.png",
		image:"gui/pokemon_selector/ultra.png",
		catchRate:1.5
	},
	master:{
		name:"pokeball.master.name",
		icon:"items-opaque/pokeball_1.png",
		image:"gui/pokemon_selector/master.png",
		catchRate:1.5
	}
};


var PokeBlock={
	Utensils:{
bonguries:{red:190,yellow:191,blue:192,black:193},
apricorn:{
red:{normal:3009, cooked:3015},
yellow:{normal:3010, cooked:3016},
blue:{normal:3011, cooked:3017},
purple:{normal:3012, cooked:3018},
pink:{normal:3013, cooked:3019},
black:{normal:3014, cooked:3020}
},
//Blocks
 healer:23,
//Items
 pokedex:3000,
//CraftItems
 pokeball_up: 504,
 ultraball_up: 505,
 masterball_up: 506,
 downball: 507,
	evolve:[
	{id:2000,texture:"rarecandy",name:"Rare Candy"},
	{id:2001,texture:"thunderstone",name:"Thunder Stone"},
	{id:2002,texture:"waterstone",name:"Water Stone"},
 	{id:2003,texture:"moonstone",name:"Moon Stone"},
	{id:2004,texture:"leafstone",name:"Leaft Stone"},
	{id:2005,texture:"firestone",name:"Fire Stone"},
	{id:2006,texture:"duskstone",name:"Dusk Stone"},
	{id:2007,texture:"dawstone",name:"Daw Stone"}
	],
	ball:[
	{id:2008,texture:"pokeball",name:"Poke Ball"},
	{id:2009,texture:"ub",name:"Ultra Ball"}, 
	{id:2010,texture:"greatball",name:"Great Ball"},
	{id:2011,texture:"mb",name:"Master Ball"}
	]
},
PokemonInventory:{
captured1:{entity:0,name:"",level:0,hp:0,exp:0,attacks:["","","",""],type:["",""],render:0,skin:"",enabled:false,spawned:false,evolution:0,sprite:null,pokeball:""},
captured2:{entity:0,name:"",level:0,hp:0,exp:0,attacks:["","","",""],type:["",""],render:0,skin:"",enabled:false,spawned:false,evolution:0,sprite:0,pokeball:""},
captured3:{entity:0,name:"",level:0,hp:0,exp:0,attacks:["","","",""],type:["",""],render:0,skin:"",enabled:false,spawned:false,evolution:0,sprite:0,pokeball:""},
captured4:{entity:0,name:"",level:0,hp:0,exp:0,attacks:["","","",""],type:["",""],render:0,skin:"",enabled:false,spawned:false,evolution:0,sprite:0,pokeball:""},
captured5:{entity:0,name:"",level:0,hp:0,exp:0,attacks:["","","",""],type:["",""],render:0,skin:"",enabled:false,spawned:false,evolution:0,sprite:0,pokeball:""},
captured6:{entity:0,name:"",level:0,hp:0,exp:0,attacks:["","","",""],type:["",""],render:0,skin:"",enabled:false,spawned:false,evolution:0,sprite:0,pokeball:""}
},
	System:{
		save:function(JsonFile,Data){
			File = new java.io.File("/sdcard/games/com.mojang/minecraftWorlds/"+ Level.getWorldDir()+"/"+JsonFile);
			File.getParentFile().mkdirs();
			FileBR = new java.io.BufferedWriter(new java.io.FileWriter(File));
			FileBR.write(JSON.stringify(Data));
			FileBR.close();
		},
		
		load:function(pokedata){
			File = new java.io.File("/sdcard/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/"+pokedata);
			if(!File.exists()){
				this.save(pokedata,PokeBlock.PokemonInventory.captured1);
			}
			FileBR=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(File)));
			switch(pokedata){
				case "pkm_captured1.json":PokeBlock.PokemonInventory.captured1=JSON.parse(FileBR.readLine());break;
				case "pkm_captured2.json":PokeBlock.PokemonInventory.captured2=JSON.parse(FileBR.readLine());break;
				case "pkm_captured3.json":PokeBlock.PokemonInventory.captured3=JSON.parse(FileBR.readLine());break;
				case "pkm_captured4.json":PokeBlock.PokemonInventory.captured4=JSON.parse(FileBR.readLine());break;
				case "pkm_captured5.json":PokeBlock.PokemonInventory.captured5=JSON.parse(FileBR.readLine());break;
				case "pkm_captured6.json":PokeBlock.PokemonInventory.captured6=JSON.parse(FileBR.readLine());break;
			}
			FileBR.close();
		},
		
		saveFile:function(path,Data){
			File = new java.io.File(path);
			File.getParentFile().mkdirs();
			FileBR = new java.io.BufferedWriter(new java.io.FileWriter(File));
			FileBR.write(JSON.stringify(Data));
			FileBR.close();
		},
		
		loadFile:function(filepath){
			File = new java.io.File(filepath);
			if(!File.exists()){
				return false;
			}
			FileBR=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(File)));
			return FileBR.readLine();
			FileBR.close();
		},
		ReplaceText:function(string,find,replaced){
			while(string.indexOf(find) != -1){
				string = string.replace(find, replaced);
			}
			return string;
		},
		
		loadFolderFiles: function(DirPath){
			try{
				var dir = new java.io.File(DirPath);
				var files = dir.list();
				if(files==null){
					return false;
				}else{
					return files;
				}
			}catch(err){
			print("Error en loadFolderFiles(): \n"+err);
			PokeBlock.System.saveFile("/sdcard/games/com.mojang/PokeBlock/data/ModPE["+err.lineNumber+"]_error.txt",err);

			}
		},
		
		loadPokemonData: function(){
			var MineCraftPath= android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/";
			var fileCount = 0;
			if(!PokeBlock.System.loadFolderFiles(MineCraftPath+"/PokeBlock/data/")==false){
				var Files = PokeBlock.System.loadFolderFiles(MineCraftPath+"PokeBlock/data/");
				for(var i = 0; i<Files.length; i++){
					ModPE.showTipMessage("Cargando datos!... \n "+i+" / "+Files.length);
					var pkmData = JSON.parse(PokeBlock.System.loadFile(MineCraftPath+"PokeBlock/data/"+Files[i]));
					if(pkmData!=null){
					Pokemon.push(pkmData);
					fileCount++;						
					}
					continue;
				}
				clientMessage("Se han cargado un total de "+fileCount+" archivos.");
			}
		}
	},
	Pokemon:{
		getName:function(name){
			var patron1 = ["[","NVL",":","▬","§l","§8","§4","§f","§c","§6","§a","§2",0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,"]","|","null","-","_","\n"," ","Â§c","♥"," "];
			for (var i = 0; i < patron1.length; i++) {
				name = PokeBlock.System.ReplaceText(name,patron1[i],"");
			}
			return name;
		},
		spawn:function(x,y,z,level,DatJson){
			var Ent = Level.spawnMob(x,y+1,z,15,DatJson.skin);
			Entlevel = Math.floor(Math.random()*level); 
			EntHP = Math.floor(level*2.3);
			Entity.setHealth(Ent,EntHP);
			Entity.setRenderType(Ent,DatJson.render);
			Entity.setNameTag(Ent,"["+DatJson.name+" | NVL:" +level+"]");
			DatJson.level = level;
			DatJson.hp = EntHP;
			Entity.setExtraData(Ent, "PixelmonPE.Pokemon",JSON.stringify(DatJson));
			PokeBlock.pokemonWild.learnNewAttack(Ent,level);
			PokeBlock.pokemonWild.learnNewAttack(Ent,level);

		},
		Catch:function(entity,HP,level,pokeball){
			var DatPokemon=JSON.parse(Entity.getExtraData(entity,"PixelmonPE.Pokemon"));
			try{
				for(var p in PokeBlock.PokemonInventory){
					if(PokeBlock.PokemonInventory[p].enabled==false){			
						PokeBlock.PokemonInventory[p].name=DatPokemon.name;
						PokeBlock.PokemonInventory[p].level=level;
						PokeBlock.PokemonInventory[p].hp=HP;					
						PokeBlock.PokemonInventory[p].attacks[0]=DatPokemon.attacks[0];
						PokeBlock.PokemonInventory[p].attacks[1]=DatPokemon.attacks[1];
						PokeBlock.PokemonInventory[p].attacks[2]=DatPokemon.attacks[2];
						PokeBlock.PokemonInventory[p].attacks[3]=DatPokemon.attacks[3];				
						PokeBlock.PokemonInventory[p].type[0]=DatPokemon.type[0];
						PokeBlock.PokemonInventory[p].type[1]=DatPokemon.type[1];					
						PokeBlock.PokemonInventory[p].render=DatPokemon.render;					
						PokeBlock.PokemonInventory[p].skin=DatPokemon.skin;
						PokeBlock.PokemonInventory[p].enabled=true;				
						PokeBlock.PokemonInventory[p].spawned=false;
						PokeBlock.PokemonInventory[p].evolution=DatPokemon.evolution;;			
						PokeBlock.PokemonInventory[p].sprite=DatPokemon.sprite;
						PokeBlock.System.save("pkm_"+p+".json",PokeBlock.PokemonInventory[p]);						
						break;
					}
				}	
			}catch(e){
			}
		},
		EvolutionData:{
			Anim:[false,false,false,false,false,false],
			ItemType:[0,0,0,0,0,0],
			Pkm:[null,null,null,null,null,null],
			check:function(Name,PokemonData,nvl){
				if(PokemonData.Evl!=null){
						PokeBlock.Pokemon.EvolutionData.Pkm[0]=PokemonData;
						PokeBlock.Pokemon.EvolutionData.Anim[0]=true;
						clientMessage("caca");
				}
			}
		},
		Experience:{
			
	//Los rangos abarcan la experiencia necesaria por cada 10 niveles
	range1: 75,  //Rango de los levels 5 a 14 = 50exp
	range2: 100, //Rango de los levels 15 a 24 = 100exp
	range3: 200, //Rango de los levels 25 a 34 = 200exp
	range4: 400, //Rango de los levels 35 a 44 = 400exp
	range5: 800, //Rango de los levels 45 a 54 = 800exp
	range6: 1600, //Rango de los levels 55 a 64 = 1600exp
	range7: 3200, //Rango de los levels 65 a 74 = 3,200exp
	range8: 6600, //Rango de los levels 75 a 84 = 6,600exp
	range9: 13400, //Rango de los levels 85 a 94 = 13,200exp
	range10: 26400, //Rango de los levels 94 a 100 = 26,400exp
	increment: function(pokemon,EXP){
		 
		 var Max = PokeBlock.Pokemon.Experience.Max(pokemon.level);
		 var Up = pokemon.exp + EXP;
		  if(Up<=Max){  
			  pokemon.level = pokemon.level + 1;
			  var Total = Up-Max;
			  pokemon.exp = Total;
	
			  if(pokemon.spawned==true){
				  Entity.setNameTag(pokemon.entity,"[§4♥§f]["+pokemon.name+" | NVL: "+pokemon.level+"]");
				  Entity.setExtraData(pokemon.entity, "PixelmonPE.Pokemon",JSON.stringify(pokemon));  
				  PokeBlock.PokemonInventory[id] = pokemon;
				  var at = Math.floor(Math.random()*2);
				  
				  if(at==0){
					clientMessage(ChatColor.DARK_GREEN+pokemon.name+ChatColor.GOLD+" intenta aprender un nuevo ataque!");
					PokeBlock.Pokemon.learnNewAttack(pokemon);
				 }
			  }
				clientMessage(pokemon.name+ " a subido al nivel " +ChatColor.GOLD+pokemon.level);
				var extract = pokemon;
				PokeBlock.Pokemon.EvolutionData.check(extract.name,{
						X:Entity.getX(pokemon.entity),
						Y:Entity.getY(pokemon.entity),
						Z:Entity.getZ(pokemon.entity),
						Entity:pokemon.entity,
						Render:Entity.getRenderType(pokemon.entity),
						Datattack:extract,
						Evl:getEvolve,
						Tick:200
					},16);			  
		}else{
			pokemon.exp = pokemon.exp + EXP;
			clientMessage(pokemon.name+" a ganado +"+ChatColor.YELLOW+EXP);
		}

  },
  Max: function(level){
	   if(level<=5||level>=14){
		  return PokeBlock.Pokemon.Experience.range1 + Math.floor(level*1.5);
	   }
	   if(level<=15||level>=24){
		  return PokeBlock.Pokemon.Experience.range2 + Math.floor(level*1.5);
	   }		 
	   if(level<=25||level>=34){
		  return PokeBlock.Pokemon.Experience.range3 + Math.floor(level*1.5);
	   }		  
	   if(level<=35||level>=44){
		  return PokeBlock.Pokemon.Experience.range4 + Math.floor(level*1.5);
	   }		  
	   if(level<=45||level>=54){
		  return PokeBlock.Pokemon.Experience.range5 + Math.floor(level*1.5);
	   }		  
	   if(level<=55||level>=64){
		  return PokeBlock.Pokemon.Experience.range6 + Math.floor(level*1.5);
	   }		 
	   if(level<=65||level>=74){
		  return PokeBlock.Pokemon.Experience.range7 + Math.floor(level*1.5);
	   }
	   if(level<=75||level>=84){
		  return PokeBlock.Pokemon.Experience.range8 + Math.floor(level*1.5);
	   }		  
	   if(level<=85||level>=94){
		  return PokeBlock.Pokemon.Experience.range9 + Math.floor(level*1.5);
	   }		 
	   if(level<=95||level>=100){
		  return PokeBlock.Pokemon.Experience.range1 + Math.floor(level*1.5);
	   }  
	   }},
		learnNewAttack:function(pokemon){
			var pokemonData=JSON.parse(pokemon); 
			for(var T in PokemonAttack){ 
//COMPRUEBA SI LOS TIPOS SON IGUALES
				if(pokemonData.type[0]==PokemonAttack[T].type){ 
//COMPRUEBA SI EL NIVEL DEL POKEMON ESTA DENTRO DEL RANGO MINIMO Y MAXIMO
					if(pokemonData.level<=PokemonAttack[T].range[0]&&pokemonData.level<=PokemonAttack[T].range[1]){ 
//RECORRE LOS 4 ATAQUES Y COMPRUEBA QUE NO SEAN IGUALES
						if(pokemonData.attacks[0]!=PokemonAttack[T]&&pokemonData.attacks[1]!=PokemonAttack[T]&&pokemonData.attacks[2]!=PokemonAttack[T]&&pokemonData.attacks[3]!=PokemonAttack[T]){
//COMPRUEBA CUAL DE LOS SLOT ESTA VACIO 
							if(pokemonData.attacks[0]==null){
								pokemonData.attacks[0]=PokemonAttack[T]; 
							}else if(pokemonData.attacks[1]==null){
								pokemonData.attacks[1]=PokemonAttack[T]; 
							}else if(pokemonData.attacks[2]==null){
 pokemonData.attacks[2]=PokemonAttack[T]; 
							}else if(pokemonData.attacks[3]==null){
								pokemonData.attacks[3]=PokemonAttack[T]; 
							}else{
//MUESTRA LA GUI PARA REEMPLAZAR LOS ATAQUES    
       clientMessage(PokemonAttack[T].name+" ya sabe 4 ataques, deseeas reemplazar uno de estos?"); 
							}
						}else{
							continue;
						}
					}
				Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(pokemonData)); 
				}
				if(pokemonData.type[1]==PokemonAttack[T].type){ 
//COMPRUEBA SI EL NIVEL DEL POKEMON ESTA DENTRO DEL RANGO MINIMO Y MAXIMO
					if(pokemonData.level<=PokemonAttack[T].range[0]&&pokemonData.level<=PokemonAttack[T].range[1]){ 
//RECORRE LOS 4 ATAQUES Y COMPRUEBA QUE NO SEAN IGUALES
						if(pokemonData.attacks[0]!=PokemonAttack[T]&&pokemonData.attacks[1]!=PokemonAttack[T]&&pokemonData.attacks[2]!=PokemonAttack[T]&&pokemonData.attacks[3]!=PokemonAttack[T]){
//COMPRUEBA CUAL DE LOS SLOT ESTA VACIO 
							if(pokemonData.attacks[0]==null){
								pokemonData.attacks[0]=PokemonAttack[T]; 
							}else if(pokemonData.attacks[1]==null){
								pokemonData.attacks[1]=PokemonAttack[T]; 
							}else if(pokemonData.attacks[2]==null){
								pokemonData.attacks[2]=PokemonAttack[T]; 
							}else if(pokemonData.attacks[3]==null){
								pokemonData.attacks[3]=PokemonAttack[T]; 
							}else{
							//MUESTRA LA GUI PARA REEMPLAZAR LOS ATAQUES    
							clientMessage(PokemonAttack[T].name);
							}
						}else{
							continue;
						}
					}
				Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(pokemonData)); 
				}
//<------FOR-------->
			}
		}   

	},
	pokemonWild:{
		learnNewAttack:function(entity,entitylevel){
			var compare=JSON.parse(Entity.getExtraData(entity,"PixelmonPE.Pokemon")); 
			for(var T in PokemonAttack){ 
//COMPRUEBA SI LOS TIPOS SON IGUALES
				if(compare.type[0]==PokemonAttack[T].type){ 
//COMPRUEBA SI EL NIVEL DEL POKEMON ESTA DENTRO DEL RANGO MINIMO Y MAXIMO
					if(entitylevel<=PokemonAttack[T].range[0]&&entitylevel<=PokemonAttack[T].range[1]){ 
//RECORRE LOS 4 ATAQUES Y COMPRUEBA QUE NO SEAN IGUALES
						if(compare.attacks[0]!=PokemonAttack[T]&&compare.attacks[1]!=PokemonAttack[T]&&compare.attacks[2]!=PokemonAttack[T]&&compare.attacks[3]!=PokemonAttack[T]){
//COMPRUEBA CUAL DE LOS SLOT ESTA VACIO 
							if(compare.attacks[0]==null){
								compare.attacks[0]=PokemonAttack[T]; 
								Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(compare));  
							}else if(compare.attacks[1]==null){
								compare.attacks[1]=PokemonAttack[T]; 
								Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(compare)); 
							}else if(compare.attacks[2]==null){
								compare.attacks[2]=PokemonAttack[T]; 
								Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(compare)); 
							}else if(compare.attacks[3]==null){
								compare.attacks[3]=PokemonAttack[T]; 
								Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(compare)); 
							}else{
//MUESTRA LA GUI PARA REEMPLAZAR LOS ATAQUES    
       clientMessage(PokemonAttack[T].name); 
							}
						}else{
							continue;
						}
					} 
				}
				if(compare.type[1]==PokemonAttack[T].type){ 
//COMPRUEBA SI EL NIVEL DEL POKEMON ESTA DENTRO DEL RANGO MINIMO Y MAXIMO
					if(entitylevel<=PokemonAttack[T].range[0]&&entitylevel<=PokemonAttack[T].range[1]){ 
//RECORRE LOS 4 ATAQUES Y COMPRUEBA QUE NO SEAN IGUALES
						if(compare.attacks[0]!=PokemonAttack[T]&&compare.attacks[1]!=PokemonAttack[T]&&compare.attacks[2]!=PokemonAttack[T]&&compare.attacks[3]!=PokemonAttack[T]){
//COMPRUEBA CUAL DE LOS SLOT ESTA VACIO 
							if(compare.attacks[0]==null){
								compare.attacks[0]=PokemonAttack[T]; 
								Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(compare));  
							}else if(compare.attacks[1]==null){
								compare.attacks[1]=PokemonAttack[T]; 
								Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(compare)); 
							}else if(compare.attacks[2]==null){
								compare.attacks[2]=PokemonAttack[T]; 
								Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(compare)); 
							}else if(compare.attacks[3]==null){
								compare.attacks[3]=PokemonAttack[T]; 
								Entity.setExtraData(entity, "PixelmonPE.Pokemon",JSON.stringify(compare)); 
							}else{
//MUESTRA LA GUI PARA REEMPLAZAR LOS ATAQUES    
    clientMessage(PokemonAttack[T].name);
							}
						}else{
							continue;
						}
					} 
				}
//<------FOR-------->
			}
		}    
	},
	
}

//PokeBlock.System.save(JsonFile,Data);
//PokeBlock.System.load(load);
//PokeBlock.System.ReplaceText(string,find,replaced)
//PokeBlock.Pokemon.spawn(x,y,z,(max-min+1)+min,datosjson);
//PokeBlock.Pokemon.getName(string);
//PokeBlock.Pokemon.Catch(entity,HP,level,pokeball);
////PokeBlock.Pokemon.EvolutionData//////
//PokeBlock.pokemonWild.learnNewAttack(entity,entitylevel);

function newLevel(){//TEST LOAD
try{
	if(!java.io.File("/sdcard/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/pkm_captured1.json").exists()){
		PokeBlockButton.init();
		PokemonSelector.init();
		//StarterScreen.init();
		//StarterScreen.show();
		PokeBlockButton.show();
	return;
	}else{
		PokeBlock.System.load("pkm_captured6.json");
		PokeBlock.System.load("pkm_captured5.json");
		PokeBlock.System.load("pkm_captured4.json");
		PokeBlock.System.load("pkm_captured3.json");
		PokeBlock.System.load("pkm_captured2.json");
		PokeBlock.System.load("pkm_captured1.json");
		PokeBlockButton.init();
		PokemonSelector.init();
		PokeBlockButton.show();
	}
}catch(err){
	print(err);
	PokeBlock.System.saveFile("/sdcard/games/com.mojang/PokeBlock/data/ModPE["+err.lineNumber+"]_error.txt",err);
}

}


function useItem(x,y,z,i,b,s){//test aparecer pokemon capturado
try{
	if(i==260&&PokeBlock.PokemonInventory.captured1.spawned==false){
		var Ent = Level.spawnMob(x,y+1,z,15,PokeBlock.PokemonInventory.captured1.skin);
		//Entity.setHealth(Ent,PokeBlock.PokemonInventory.captured1.hp);
		Entity.setRenderType(Ent,PokeBlock.PokemonInventory.captured1.render);
		//var pb = getPokemonBarLive(Ent);
		Entity.setNameTag(Ent,"[§4♥§f]["+PokeBlock.PokemonInventory.captured1.name+" | NVL:" +PokeBlock.PokemonInventory.captured1.level+"]");
		Entity.setExtraData(Ent, "PixelmonPE.Pokemon",JSON.stringify(PokeBlock.PokemonInventory.captured1));
		PokeBlock.PokemonInventory.captured1.spawned = true;
		PokeBlock.PokemonInventory.captured1.entity = Ent;
	}
	if(i==280){
		//PokeBlock.System.saveFile("/sdcard/games/com.mojang/PokeBlock/data/bulbasaur.json",Pokemon.Bulbasaur);
		//PokeBlock.System.saveFile("/sdcard/games/com.mojang/PokeBlock/data/ivysaur.json",Pokemon.Ivysaur);
		//PokeBlock.System.saveFile("/sdcard/games/com.mojang/PokeBlock/data/venusaur.json",Pokemon.Venusaur);
		//PokeBlock.System.loadPokemonData();
	}
	if(i==281){
	PokeBlock.Pokemon.spawn(x,y+1,z,(10)+1,Pokemon.Bulbasaur);
	}
	}catch(err){
		clientMessage(err);
		PokeBlock.System.saveFile("/sdcard/games/com.mojang/PokeBlock/data/ModPE["+err.lineNumber+"]_error.txt",err);

	}
}


function deathHook(m,v){
	clientMessage("Murio la entidad: "+v+" que mala suerte tiene!");
	if(PokeBlock_Wild_Battle.enabled==true){
	if(PokeBlock_Wild_Battle.pokemonPlayer.entity==v){
	clientMessage(PokeBlock_Wild_Battle.pokemonPlayer.name+" ya no puede luchar");
	PokeBlock_Wild_Battle.winner(1);
	}else if(PokeBlock_Wild_Battle.pokemonWild.entity==v){
	clientMessage(PokeBlock_Wild_Battle.pokemonWild.name+" ya no puede luchar");
	PokeBlock_Wild_Battle.winner(0);
	}
	}
}

function attackHook(a,v){
	try{
	var item=Player.getCarriedItem();
	if(Entity.getNameTag(v)>""){
	var Sym = Entity.getNameTag(v);
	Sym = Sym.substring(0,7);
	if(item==0){
		Entity.setHealth(v,0);
	}
		
	//BATLLE SYSTEM
if(item==281&&PokeBlock_Wild_Battle.enabled==false){
preventDefault();
if(Sym!="[§4♥§f]"){
//AQUI EL CODE OBTIENE LOS DATOS DEL POKEMON SELECCIONADO
if(PokeBlock.PokemonInventory.captured1.spawned==false){
if(PokeBlock.PokemonInventory.captured1.hp!=0){
PokeBlock.PokemonInventory.captured1.spawned=true;
poke = Level.spawnMob(Entity.getX(v), Entity.getY(v),Entity.getZ(v)-2,15,PokeBlock.PokemonInventory.captured1.skin);
Entity.setNameTag(poke,"[§4♥§f]["+PokeBlock.PokemonInventory.captured1.name+" | NVL: "+PokeBlock.PokemonInventory.captured1.level+"]");
Entity.setHealth(poke,PokeBlock.PokemonInventory.captured1.hp);
Entity.setRenderType(poke,PokeBlock.PokemonInventory.captured1.render);
PokeBlock.PokemonInventory.captured1.entity = poke;
}else{
	clientMessage(ChatColor.BLUE+PokeBlock.PokemonInventory.captured1.name+ChatColor.RED+" esta muy herido para luchar.");
	return;
}
}else{
	Entity.setPosition(PokeBlock.PokemonInventory.captured1.entity,Entity.getX(v), Entity.getY(v),Entity.getZ(v)-2);
}
var extractWildData = JSON.parse(Entity.getExtraData(v,"PixelmonPE.Pokemon")); 
extractWildData.entity = v;
PokeBlock_Wild_Battle.startFight(PokeBlock.PokemonInventory.captured1,extractWildData);
}
}
		
		if(Sym=="[§4♥§f]"){
		if(item==260){
			PokeBlock.PokemonInventory.captured1.spawned = false;
			PokeBlock.PokemonInventory.captured1.hp = Entity.getHealth(v);
			Entity.remove(v);
		}
		if(item==280){//EVOLUCION
			var extract=JSON.parse(Entity.getExtraData(v,"PixelmonPE.Pokemon")); 
			eval("var getEvolve="+extract.evolution);
			preventDefault();
			PokeBlock.Pokemon.EvolutionData.check(extract.name,{
					X:Entity.getX(v),
					Y:Entity.getY(v),
					Z:Entity.getZ(v),
					Entity:v,
					Render:Entity.getRenderType(v),
					Datattack:extract,
					Evl:getEvolve,
					Tick:200
				},16);				 
		}
		}
		if(Sym==""&&item==260){//CAPTURA
			PokeBlock.Pokemon.Catch(v,20,100,0);
			Entity.remove(v);
		}
				
	}	
	}catch(err){
		clientMessage(err);
		PokeBlock.System.saveFile("/sdcard/games/com.mojang/PokeBlock/data/ModPE["+err.lineNumber+"]_error.txt",err);

	}
}
var GUI;
var HUDGUI;


function leaveGame(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        if(GUI != null){
            GUI.dismiss();
            GUI = null;
        }
        if(HUDGUI != null){
            HUDGUI.dismiss();
            HUDGUI = null;
        }
    }}));
}

function modTick(){
	///======================
	//---- Follow System ----
	///======================
	//pokemonsFollowPlayer();

	///======================
	//---- Battle System ----
	///======================
	if(PokeBlock_Wild_Battle.enabled==true){
		if(PokeBlock_Wild_Battle.state.changePokemon==false){
		if(PokeBlock_Wild_Battle.turn==0){
			if(PokeBlock_Wild_Battle.state.selectAttack==false){
			var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
			ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
			if(GUI == null){
			PokeBlock_Wild_Battle.showAttacks();
			}
			if(HUDGUI == null){
			PokeBlock_Wild_Battle.showHUD();
			}
			}}));
			PokeBlock_Wild_Battle.state.selectAttack=true;
			}
		}
	}
	
	if(PokeBlock_Wild_Battle.state.changeTurn==true){
		PokeBlock_Wild_Battle.ticks--;
		if(PokeBlock_Wild_Battle.ticks<=0){
			PokeBlock_Wild_Battle.changeTurn();
		}
	}
	
	if(Entity.getHealth(PokeBlock_Wild_Battle.pokemonPlayer.entity)<=0){
	clientMessage(PokeBlock_Wild_Battle.pokemonPlayer.name+" ya no puede luchar");
	PokeBlock_Wild_Battle.winner(1);
	
	}else if(Entity.getHealth(PokeBlock_Wild_Battle.pokemonWild.entity)<=0){
	clientMessage(PokeBlock_Wild_Battle.pokemonWild.name+" ya no puede luchar");
	PokeBlock_Wild_Battle.winner(0);
	}
	}
	
	
	///=========================
	//---- Evolution System ----
	///=========================
	
	for(var i in PokeBlock.Pokemon.EvolutionData.Anim){
		if(PokeBlock.Pokemon.EvolutionData.Anim[i]==true){
			Level.addParticle(4,PokeBlock.Pokemon.EvolutionData.Pkm[i].X+Math.random()* 2-1,PokeBlock.Pokemon.EvolutionData.Pkm[i].Y+Math.random()* 2-1, PokeBlock.Pokemon.EvolutionData.Pkm[i].Z +Math.random() * 2-1,0,0,0,1);
			Level.addParticle(4,PokeBlock.Pokemon.EvolutionData.Pkm[i].X+Math.random()* 2-1,PokeBlock.Pokemon.EvolutionData.Pkm[i].Y+Math.random()* 2-1, PokeBlock.Pokemon.EvolutionData.Pkm[i].Z +Math.random() * 2-1,0,0,0,1);
			Level.addParticle(4,PokeBlock.Pokemon.EvolutionData.Pkm[i].X+Math.random()* 2-1,PokeBlock.Pokemon.EvolutionData.Pkm[i].Y+Math.random()* 2-1, PokeBlock.Pokemon.EvolutionData.Pkm[i].Z +Math.random() * 2-1,0,0,0,1);
			Level.addParticle(4,PokeBlock.Pokemon.EvolutionData.Pkm[i].X+Math.random()* 2-1,PokeBlock.Pokemon.EvolutionData.Pkm[i].Y+Math.random()* 2-1, PokeBlock.Pokemon.EvolutionData.Pkm[i].Z +Math.random() * 2-1,0,0,0,1);
			Level.addParticle(4,PokeBlock.Pokemon.EvolutionData.Pkm[i].X+Math.random()* 2-1,PokeBlock.Pokemon.EvolutionData.Pkm[i].Y+Math.random()* 2-1, PokeBlock.Pokemon.EvolutionData.Pkm[i].Z +Math.random() * 2-1,0,0,0,1);
			Level.addParticle(4,PokeBlock.Pokemon.EvolutionData.Pkm[i].X+Math.random()* 2-1,PokeBlock.Pokemon.EvolutionData.Pkm[i].Y+Math.random()* 2-1, PokeBlock.Pokemon.EvolutionData.Pkm[i].Z +Math.random() * 2-1,0,0,0,1);		
			Entity.setPosition(PokeBlock.Pokemon.EvolutionData.Pkm[i].Entity,PokeBlock.Pokemon.EvolutionData.Pkm[i].X,PokeBlock.Pokemon.EvolutionData.Pkm[i].Y,PokeBlock.Pokemon.EvolutionData.Pkm[i].Z);
			var skin=Math.floor((Math.random()*4)+1);
				switch(skin){
					case 1:
						Entity.setRenderType(PokeBlock.Pokemon.EvolutionData.Pkm[i].Entity,PokeBlock.Pokemon.EvolutionData.Pkm[i].Render);
						Entity.setMobSkin(PokeBlock.Pokemon.EvolutionData.Pkm[i].Entity,"mob/evolve.png");
					break;
					case 2:
						Entity.setRenderType(PokeBlock.Pokemon.EvolutionData.Pkm[i].Entity,PokeBlock.Pokemon.EvolutionData.Pkm[i].Evl.render);  
						Entity.setMobSkin(PokeBlock.Pokemon.EvolutionData.Pkm[i].Entity,"mob/evolve.png");
					break;
					case 3:
						Entity.setRenderType(PokeBlock.Pokemon.EvolutionData.Pkm[i].Entity,PokeBlock.Pokemon.EvolutionData.Pkm[i].Evl.render);
						Entity.setMobSkin(PokeBlock.Pokemon.EvolutionData.Pkm[i].Entity,"mob/evolve.png");
					break;
					case 4:
						Entity.setRenderType(PokeBlock.Pokemon.EvolutionData.Pkm[i].Entity,PokeBlock.Pokemon.EvolutionData.Pkm[i].Render);
						Entity.setMobSkin(PokeBlock.Pokemon.EvolutionData.Pkm[i].Entity,"mob/evolve.png");
					break;
				}
			Entity.setVelX(PokeBlock.Pokemon.EvolutionData.Pkm[i].Entity,0);
			Entity.setVelZ(PokeBlock.Pokemon.EvolutionData.Pkm[i].Entity,0);
			
			PokeBlock.Pokemon.EvolutionData.Pkm[i].Tick--;
			if(PokeBlock.Pokemon.EvolutionData.Pkm[i].Tick<=0){								
				PokeBlock.Pokemon.EvolutionData.Pkm[i].Evl.attacks[0]=PokeBlock.Pokemon.EvolutionData.Pkm[i].Datattack.attacks[0];
				PokeBlock.Pokemon.EvolutionData.Pkm[i].Evl.attacks[1]=PokeBlock.Pokemon.EvolutionData.Pkm[i].Datattack.attacks[1];
				PokeBlock.Pokemon.EvolutionData.Pkm[i].Evl.attacks[2]=PokeBlock.Pokemon.EvolutionData.Pkm[i].Datattack.attacks[2];
				PokeBlock.Pokemon.EvolutionData.Pkm[i].Evl.attacks[3]=PokeBlock.Pokemon.EvolutionData.Pkm[i].Datattack.attacks[3];
				var Ent = Level.spawnMob(PokeBlock.Pokemon.EvolutionData.Pkm[i].X,PokeBlock.Pokemon.EvolutionData.Pkm[i].Y,PokeBlock.Pokemon.EvolutionData.Pkm[i].Z,15,PokeBlock.Pokemon.EvolutionData.Pkm[i].Evl.skin);
				Entlevel =16; 
				EntHP = Math.floor(Entlevel*2.3);
				Entity.setHealth(Ent,EntHP);
				Entity.setRenderType(Ent,PokeBlock.Pokemon.EvolutionData.Pkm[i].Evl.render);
				Entity.setNameTag(Ent,"[§4♥§f]["+PokeBlock.Pokemon.EvolutionData.Pkm[i].Evl.name+" | NVL:" +Entlevel+"]");
				Entity.setExtraData(Ent, "PixelmonPE.Pokemon",JSON.stringify(PokeBlock.Pokemon.EvolutionData.Pkm[i].Evl));				
				PokeBlock.pokemonWild.learnNewAttack(Ent,Entlevel);
				Entity.remove(PokeBlock.Pokemon.EvolutionData.Pkm[i].Entity);
				PokeBlock.Pokemon.EvolutionData.Pkm[i]=null;
				PokeBlock.Pokemon.EvolutionData.Anim[i]=false;
			}
		}			
	}
}

///==============================
// ---------  Batalla  ----------
///==============================

var PokeBlock_Wild_Battle = {
	pokemonPlayer:{},
	pokemonWild:{},
	enabled:false,ticks:this.defaultTicks,defaultTicks:Math.floor((Math.random()*3)*20), state:{pause:false, changeTurn:false, changePokemon:false, selectAttack:false},turn:0,
	battleMove: function(entity,enabled){
	switch(enabled){
		case false:
		Entity.setImmobile(entity, true);
		break;
		case true:
		Entity.setImmobile(entity, false);
		break;
	}
	},
	makeAttack: function(attacker, victim, damage){
		try{
		var dmg = Math.round(((attacker.level)*damage)-(victim.level/2)/2);
		ModPE.showTipMessage(ChatColor.RED+"-"+dmg);
		//print("Attacker Level: "+attacker.level+"\nVictim Level: "+victim.level+"\nDamage: "+dmg);
		Entity.setHealth(victim.entity,Entity.getHealth(victim.entity)-dmg);
		}catch(err){
			print("Linea: "+err.lineNumber+"\n"+err);
				PokeBlock.System.saveFile("/sdcard/games/com.mojang/PokeBlock/data/ModPE["+err.lineNumber+"]_error.txt",err);

		}
	},
	winner: function(pokemon){
		PokeBlock_Wild_Battle.endFight();
		switch(pokemon){
			case 0:
			var Total = Math.floor(Math.random()*(25-10+1)+10)+Math.floor(PokeBlock_Wild_Battle.pokemonWild.level *2 / 1.5);
			PokeBlock.Pokemon.Experience.increment(PokeBlock_Wild_Battle.pokemonPlayer,Total);	
			clientMessage(PokeBlock_Wild_Battle.pokemonPlayer.name+" a ganado la batalla!");
			break;
			case 1:
  			clientMessage(PokeBlock_Wild_Battle.pokemonWild.name+" a ganado la batalla!");	
			break;
		}
	},
	changeTurn: function(){
		try{
			ModPE.showTipMessage("Espere...");
		switch(PokeBlock_Wild_Battle.turn){
			case 0:
				PokeBlock_Wild_Battle.turn = 1;
				PokeBlock_Wild_Battle.state.changeTurn = false;
				PokeBlock_Wild_Battle.ticks = PokeBlock_Wild_Battle.defaultTicks;
			break;
			
			case 1:

				var rnd = Math.floor(Math.random()*PokeBlock_Wild_Battle.pokemonWild.attacks.length);
				if(PokeBlock_Wild_Battle.pokemonWild.attacks[rnd]!=null){
					clientMessage(PokeBlock_Wild_Battle.pokemonWild.name+" a usado "+PokeBlock_Wild_Battle.pokemonWild.attacks[rnd].name);
					PokeBlock_Wild_Battle.makeAttack(PokeBlock_Wild_Battle.pokemonWild,PokeBlock_Wild_Battle.pokemonPlayer,PokeBlock_Wild_Battle.pokemonWild.attacks[rnd].damage);
					PokeBlock_Wild_Battle.turn = 0;
					PokeBlock_Wild_Battle.ticks = PokeBlock_Wild_Battle.defaultTicks;
				}		
			break;
		}
			PokeBlock_Wild_Battle.showHP();
		}catch(err){
			clientMessage(err.lineNumber+"\n"+err);
			PokeBlock.System.saveFile("/sdcard/games/com.mojang/PokeBlock/data/ModPE["+err.lineNumber+"]_error.txt",err);

		}
	},
	startFight:function(player,wild){
		PokeBlock_Wild_Battle.pokemonPlayer = player;
		PokeBlock_Wild_Battle.pokemonWild = wild;
		PokeBlock_Wild_Battle.battleMove(player.entity,false);
		PokeBlock_Wild_Battle.battleMove(wild.entity,false);
		clientMessage("A luchar!\nHas iniciado una batalla con "+wild.name);
		PokeBlock_Wild_Battle.enabled = true;
	},
	endFight:function(){
		PokeBlock_Wild_Battle.hideGUI();
		PokeBlock_Wild_Battle.battleMove(PokeBlock_Wild_Battle.pokemonPlayer.entity,true);
		PokeBlock_Wild_Battle.battleMove(PokeBlock_Wild_Battle.pokemonWild.entity,true);
		PokeBlock_Wild_Battle.ticks = PokeBlock_Wild_Battle.defaultTicks;
		PokeBlock_Wild_Battle.ticks=PokeBlock_Wild_Battle.defaultTicks;
		PokeBlock_Wild_Battle.state={pause:false, changeTurn:false, changePokemon:false, selectAttack:false};
		PokeBlock_Wild_Battle.turn=0;
		PokeBlock_Wild_Battle.enabled = false;
	},
	
	showHP: function(){
	//pbar.setProgress(PokeBlock_Wild_Battle.pokemonPlayer.hp);
	//wbar.setProgress(PokeBlock_Wild_Battle.pokemonWild.hp);
	//plive.setText(PokeBlock_Wild_Battle.pokemonPlayer.name+" level: "+PokeBlock_Wild_Battle.pokemonPlayer.level); 
	//wlive.setText(PokeBlock_Wild_Battle.pokemonWild.name+" level: "+PokeBlock_Wild_Battle.pokemonWild.level); 
	
	//	var playerHP = getPokemonBarLive(PokeBlock_Wild_Battle.pokemonPlayer.entity);
	//	var wildHP = getPokemonBarLive(PokeBlock_Wild_Battle.pokemonWild.entity);
	//	clientMessage(PokeBlock_Wild_Battle.pokemonPlayer.name+" HP "+playerHP);
	//	clientMessage(PokeBlock_Wild_Battle.pokemonWild.name+" HP "+wildHP);

	},
	showAttacks: function(){

    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
			
			var layout = new android.widget.LinearLayout(ctx); 
			layout.setOrientation(0);

			if(PokeBlock_Wild_Battle.pokemonPlayer.attacks[0]!=null){
				var atk1 = new android.widget.Button(ctx);
				atk1.setText(PokeBlock_Wild_Battle.pokemonPlayer.attacks[0].name);
				atk1.setTextSize(10);
				atk1.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
				if(PokeBlock_Wild_Battle.turn==0){
				clientMessage(PokeBlock_Wild_Battle.pokemonPlayer.name+" a usado "+PokeBlock_Wild_Battle.pokemonPlayer.attacks[0].name);
				PokeBlock_Wild_Battle.makeAttack(PokeBlock_Wild_Battle.pokemonPlayer, PokeBlock_Wild_Battle.pokemonWild, PokeBlock_Wild_Battle.pokemonPlayer.attacks[0].damage);
				PokeBlock_Wild_Battle.state.changeTurn=true;
				PokeBlock_Wild_Battle.state.selectAttack=false;
				//GUI.dismiss();
				}
				}
				}));
				layout.addView(atk1);
			}
			if(PokeBlock_Wild_Battle.pokemonPlayer.attacks[1]!=null){
				var atk2 = new android.widget.Button(ctx);
				atk2.setText(PokeBlock_Wild_Battle.pokemonPlayer.attacks[1].name);
				atk2.setTextSize(10);
				atk2.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
				if(PokeBlock_Wild_Battle.turn==0){
				clientMessage(PokeBlock_Wild_Battle.pokemonPlayer.name+" a usado "+PokeBlock_Wild_Battle.pokemonPlayer.attacks[1].name);
				PokeBlock_Wild_Battle.makeAttack(PokeBlock_Wild_Battle.pokemonPlayer, PokeBlock_Wild_Battle.pokemonWild, PokeBlock_Wild_Battle.pokemonPlayer.attacks[1].damage);
				PokeBlock_Wild_Battle.state.changeTurn=true;
				PokeBlock_Wild_Battle.state.selectAttack=false;
				//GUI.dismiss();
				}
				}
				}));
				layout.addView(atk2);
			}
			if(PokeBlock_Wild_Battle.pokemonPlayer.attacks[2]!=null){
				var atk3 = new android.widget.Button(ctx);
				atk3.setText(PokeBlock_Wild_Battle.pokemonPlayer.attacks[2].name);
				atk3.setTextSize(10);
				atk3.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
				if(PokeBlock_Wild_Battle.turn==0){
				clientMessage(PokeBlock_Wild_Battle.pokemonPlayer.name+" a usado "+PokeBlock_Wild_Battle.pokemonPlayer.attacks[2].name);
				PokeBlock_Wild_Battle.makeAttack(PokeBlock_Wild_Battle.pokemonPlayer, PokeBlock_Wild_Battle.pokemonWild, PokeBlock_Wild_Battle.pokemonPlayer.attacks[2].damage);
				PokeBlock_Wild_Battle.state.changeTurn=true;
				PokeBlock_Wild_Battle.state.selectAttack=false;
				//GUI.dismiss();
				}
				}
				}));
				layout.addView(atk3);
			}
			if(PokeBlock_Wild_Battle.pokemonPlayer.attacks[3]!=null){
				var atk4 = new android.widget.Button(ctx);
				atk4.setText(PokeBlock_Wild_Battle.pokemonPlayer.attacks[3].name);
				atk4.setTextSize(10);
				atk4.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
				if(PokeBlock_Wild_Battle.turn==0){
				clientMessage(PokeBlock_Wild_Battle.pokemonPlayer.name+" a usado "+PokeBlock_Wild_Battle.pokemonPlayer.attacks[3].name);
				PokeBlock_Wild_Battle.makeAttack(PokeBlock_Wild_Battle.pokemonPlayer, PokeBlock_Wild_Battle.pokemonWild, PokeBlock_Wild_Battle.pokemonPlayer.attacks[3].damage);
				PokeBlock_Wild_Battle.state.changeTurn=true;
				PokeBlock_Wild_Battle.state.selectAttack=false;
				GUI.dismiss();
				}
				}
				}));
				layout.addView(atk4);
			}
			layout.setGravity(android.view.Gravity.CENTER);

			var dp = (pixels) => android.util.TypedValue.applyDimension(android.util.TypedValue.COMPLEX_UNIT_DIP,2,ctx.getResources().getDisplayMetrics())*pixels;
			var size = 	Math.min(dp(22.5),ScreenHeight()/8);
			
			GUI = new android.widget.PopupWindow(layout, size*14,size);
			//GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.BOTTOM, -100, 0);
       
	   }catch(err){
            print("An error occured: " + err+"\nLine: "+err.lineNumber);
			PokeBlock.System.saveFile("/sdcard/games/com.mojang/PokeBlock/data/ModPE["+err.lineNumber+"]_error.txt",err);
			
		}
    }}));
	},
		showHUD: function(){

    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
			
			var layout = new android.widget.LinearLayout(ctx); 
			layout.setOrientation(0);
			
			var playout = new android.widget.LinearLayout(ctx); 
			playout.setOrientation(1);
			
			var wlayout = new android.widget.LinearLayout(ctx); 
			wlayout.setOrientation(1);
			
			//var plive = new android.widget.TextView(ctx); 
			plive.setText(PokeBlock_Wild_Battle.pokemonPlayer.name+" level: "+PokeBlock_Wild_Battle.pokemonPlayer.level); 
			plive.setTextColor(android.graphics.Color.WHITE);
			plive.setTextSize(15);
			playout.addView(plive);
			
			//var pbar = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
			pbar.setMax(PokeBlock_Wild_Battle.pokemonPlayer.level*2.3);
			pbar.setProgress(PokeBlock_Wild_Battle.pokemonPlayer.hp);
			playout.addView(pbar);

			//var wlive = new android.widget.TextView(ctx); 
			wlive.setText(PokeBlock_Wild_Battle.pokemonWild.name+" level: "+PokeBlock_Wild_Battle.pokemonWild.level); 
			wlive.setTextColor(android.graphics.Color.WHITE);
			wlive.setTextSize(15);
			wlayout.addView(wlive);
			
			//var wbar = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
			wbar.setMax(PokeBlock_Wild_Battle.pokemonWild.level*2.3);
			wbar.setProgress(PokeBlock_Wild_Battle.pokemonWild.hp);
			wlayout.addView(wbar);
			
			var space = new android.widget.TextView(ctx); 
			var s = "                                              ";
			s+=s;
			space.setText(s); 
			space.setTextColor(android.graphics.Color.WHITE);
			space.setTextSize(15);
			
			layout.setGravity(android.view.Gravity.CENTER);
			playout.setGravity(android.view.Gravity.LEFT);
			wlayout.setGravity(android.view.Gravity.RIGHT);

			layout.addView(playout);
			layout.addView(space);	
			layout.addView(wlayout);


			var dp = (pixels) => android.util.TypedValue.applyDimension(android.util.TypedValue.COMPLEX_UNIT_DIP,2,ctx.getResources().getDisplayMetrics())*pixels;
			var size = 	Math.min(dp(22.5),ScreenHeight()/8);
			
			HUDGUI = new android.widget.PopupWindow(layout, size*14,size);
			//GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            HUDGUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
            HUDGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, -100, 0);
       
	   }catch(err){
            print("An error occured: " + err+"\nLine: "+err.lineNumber);
			PokeBlock.System.saveFile("/sdcard/games/com.mojang/PokeBlock/data/ModPE["+err.lineNumber+"]_error.txt",err);

		}
    }}));
	},
	hideGUI: function(){
		    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
			if(GUI != null){
				GUI.dismiss();
				GUI = null;
			}
			if(HUDGUI != null){
				HUDGUI.dismiss();
				HUDGUI = null;
			}
		}}));
	},

};
	

function ScreenHeight(){
		var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		if(android.os.Build.VERSION.SDK_INT>=17){
				var uiFlags = ctx.getWindow().getDecorView().getSystemUiVisibility();
				if((uiFlags&android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION)!==0){
						var metrics = new android.util.DisplayMetrics();
						ctx.getWindowManager().getDefaultDisplay().getRealMetrics(metrics);
						var realWidth = metrics.widthPixels;
						var realHeight = metrics.heightPixels;
						if(realHeight>realWidth){
								var x = realHeight;
								realHeight = realWidth;
								realWidth = x;								
						}return realHeight;
				}else{
						return ctx.getScreenHeight();
				}
		}else{
				return ctx.getScreenHeight();
		}
}


function getPokemonBarLive(entity){
var hp = Entity.getHealth(entity);
var hpmax = Entity.getMaxHealth(entity);
var h = 0;
h = Math.floor((hp / hpmax) * 100);

var bar = "§l[§8▬▬▬▬▬§f]";

if(h<=1&&h<20){
bar = "§l[§4▬§8▬▬▬▬§f]";
}
if(h<=20&&h<50){
bar = "§l[§c▬▬§8▬▬▬§f]";
}
if(h<=50&&h<70){
bar = "§l[§6▬▬▬§8▬▬§f]";
}
if(h<=70&&h<90){
bar = "§l[§a▬▬▬▬§8▬§f]";
}
if(h<=90&&h<101){
bar = "§l[§2▬▬▬▬▬§f]";
}
return bar;
}

///==============================
// ---------  Modelos  ----------
///==============================

function addBulbasaurRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//cabeza
body.setTextureOffset(0,0, true);
body.addBox( -3.5, 14, -13 , 7, 7, 7);

//orejas
body.setTextureOffset(45,0, true);
body.addBox(2, 12, -10 ,1, 2, 2);
body.addBox(-3, 12, -10 ,1, 2, 2);

//cuerpo
body.setTextureOffset(28,8, true);
body.addBox( -4,16, -6 , 8, 6, 10);

//capullo
body.setTextureOffset(0,15, true);
body.addBox(-3,14,-4 ,6,2, 7);
body.setTextureOffset(3,18, true);
body.addBox(-2.5,13,-3,5,1, 5);


//piernas l
body.setTextureOffset(33,0, true);
body.addBox( 4,19, 2 ,2,5, 2);
body.addBox( 4,19, -5 ,2,5, 2);
body.addBox(-6,19,2,2,5,2);
body.addBox(-6,19,-4,2,5,2);
}

function addIvysaurRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128, 64);
var body = model.getPart("body").setTextureSize(128, 64);
var rArm = model.getPart("rightArm").setTextureSize(128, 64);
var lArm = model.getPart("leftArm").setTextureSize(128, 64);
var rLeg = model.getPart("rightLeg").setTextureSize(128, 64);
var lLeg = model.getPart("leftLeg").setTextureSize(128, 64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//cabeza
body.setTextureOffset(0,0, true);
body.addBox( -4,11, -13,8, 7, 8);

//orejas
body.setTextureOffset(26,0, true);
body.addBox( -4,9, -9,1,2,3);
body.addBox(3,9,-9,1,2,3);


//cuerpo
body.setTextureOffset(52,0, true);
body.addBox(-5,13,-5,10,7,8);
body.setTextureOffset(0,25, true);
body.addBox(-4,14,3,8,6,5);


//petalos
body.setTextureOffset(90,31, true);
body.addBox(-3,12.2,-6,5,0,8);

//petalos 2
body.setTextureOffset(90,7, true);
body.addBox(-9,12.2,0,8,0,5);

//petalos 3
body.setTextureOffset(91,16, true);
body.addBox(-3,12.2,2,5,0,8);

//petalos 4
body.setTextureOffset(89,0, true);
body.addBox(0,12.2,0,8,0,5);


//petalos arriba
body.setTextureOffset(36,0, true);
body.addBox(-3,6.2,-4.8,5,6,0);

//petalos 2
body.setTextureOffset(55,52, true);
body.addBox(-9,6.2,0,0,6,5);

//petalos 3
body.setTextureOffset(44,28, true);
body.addBox(-3,6.2,10,5,6,0);

//petalos 4
body.setTextureOffset(66,38, true);
body.addBox(8,6.2,0,0,6,5);

//capuyo
body.setTextureOffset(62,19, true);
body.addBox(-2,8,0,4,4,4);


//brazos
body.setTextureOffset(0,42, true);
body.addBox(-8,18,-8.1,4,6,4);
body.addBox(4,18,-6,4,6,4);

//piernas
body.setTextureOffset(18,53, true);
body.addBox(4,19,4,3,5,3);
body.addBox(-7,19,4,3,5,3);


}
 function addVenusaurRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(256,128);
var body = model.getPart("body").setTextureSize(256,128);
var rArm = model.getPart("rightArm").setTextureSize(256,128);
var lArm = model.getPart("leftArm").setTextureSize(256,128);
var rLeg = model.getPart("rightLeg").setTextureSize(256,128);
var lLeg = model.getPart("leftLeg").setTextureSize(256,128);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//cabeza --
body.setTextureOffset(144,0, true);
body.addBox( -13,4,-14,26,15,28);

//--
body.setTextureOffset(152, 46, true);
body.addBox(-12,3,-13,24, 1, 26);

//33
body.setTextureOffset(0,0, true);
body.addBox(-9.5, 5, -25,19, 12, 11);

//44
body.setTextureOffset(66,0, true);
body.addBox(-4.5, 1, -4,10, 2, 10);


//55
body.setTextureOffset(110,0, true);
body.addBox(-3.5, -11, -3,8, 12, 8);

//66
body.setTextureOffset(64, 15, true);
body.addBox(-5, -13, -4,11, 2, 10);


//77
body.setTextureOffset(78, 42, true);
body.addBox(-4, -11, -19,9, 1, 16);
//77
body.setTextureOffset(203, 109, true);
body.addBox(-4, -11, 5,9, 1, 16);
//88
body.setTextureOffset(79, 104, true);
body.addBox(-4.5, 2, -27,10, 1, 23);
//88
body.setTextureOffset(216, 76, true);
body.addBox(-4.5,2,6,10, 1, 9);
//9
body.setTextureOffset(0, 26, true);
body.addBox(12, 13, -16, 5, 11, 5);
body.addBox(-16, 13, -16, 5, 11, 5);
body.addBox(11, 13, 11, 5, 11, 5);
body.addBox(-16, 12, 11, 5, 11, 5);
//10
body.setTextureOffset(76,71, true);
body.addBox(5.5, 2, -4, 9,1,10)
//10
body.setTextureOffset(76,85, true);
body.addBox(-13.5, 2, -4, 9,1,10);
//11
body.setTextureOffset(115, 25, true);
body.addBox(-4.5, 2, 15,10, 11, 1);
//12
body.setTextureOffset(26, 27, true);
body.addBox(14.5, 2, -4,1, 11, 10);
//12
body.setTextureOffset(55, 30, true);
body.addBox(-14.5, 2, -4,1, 11, 10);
//13
body.setTextureOffset(0, 75, true);
body.addBox(4.5, -11, -3.5, 16, 1, 9);
//13
body.setTextureOffset(0, 113, true);
body.addBox(-19.5, -11, -3.5, 16, 1, 9);
//14
body.setTextureOffset(0, 57, true);
body.addBox(5, 2, -19, 4, 3, 1);
body.addBox(-9, 2, -19, 4, 3, 1);
}

function addCharmeleonRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 24, 22,true);
body.addBox(-2,5,-4, 3, 4, 5);
body.setTextureOffset( 43, 18,true);
body.addBox(-3.5,11,-2.5, 6, 9, 4);
body.setTextureOffset( 55, 8,true);
body.addBox(-5,12,-2, 2, 6, 2);
body.setTextureOffset( 55, 8,true);
body.addBox(2,12,-2, 2, 6, 2);
body.setTextureOffset( 43, 7,true);
body.addBox(-4,17,-2, 2, 7, 3);
body.setTextureOffset( 43, 7,true);
body.addBox(1,17,-2, 2, 7, 3);
body.setTextureOffset( 55, 2,true);
body.addBox(-1.5,9,-2, 2, 2, 2);
body.setTextureOffset( 35, 1,true);
body.addBox(-1,3,-1, 1, 3, 2);
body.setTextureOffset( 31, 8,true);
body.addBox(-1.5,17,1, 2, 2, 3);
body.setTextureOffset( 32, 16,true);
body.addBox(-1,17,4, 1, 1, 3);
body.setTextureOffset( 2, 17,true);
body.addBox(-0.5,12,5, 0, 6, 7);
body.setTextureOffset( 44, 1,true);
body.addBox(-1.5,7,-6, 2, 2, 2);
body.setTextureOffset( 0, 0,true);
body.addBox(-3,12,-3, 5, 7, 1);
}


function addEeveeRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
head.clear();
head.setTextureOffset(28, 6);
head.addBox(-2, 10, -2, 5, 5, 4);
head.setTextureOffset(28, 15);
head.addBox(-1.5, 13, -3, 4, 2, 2);
head.setTextureOffset(28, 0);
head.addBox(-3, 6, -1, 2, 4, 1);
head.setTextureOffset(28, 0);
head.addBox(2, 6, -1, 2, 4, 1);
body.clear();
body.setTextureOffset(0, 1);
body.addBox(-3, 15, -1, 7, 4, 4);
body.setTextureOffset(0, 20);
body.addBox(-2.5, 15, 3, 6, 4, 6);
body.setTextureOffset(28, 22);
body.addBox(0, 13, 7, 1, 4, 6);
rArm.clear();
rArm.setTextureOffset(48, 0);
rArm.addBox(3.5, 17, 0, 2, 5, 2);
lArm.clear();
lArm.setTextureOffset(56, 0);
lArm.addBox(-4.5, 17, 0, 2, 5, 2);
rLeg.clear();
rLeg.setTextureOffset(48, 0);
rLeg.addBox(-0.5, 7, 6, 2, 5, 2);

lLeg.clear();
lLeg.setTextureOffset(56, 0);
lLeg.addBox(-0.5, 7, 6, 2, 5, 2);

}




function addVaporeonRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(256, 128);
var body = model.getPart("body").setTextureSize(256, 128);
var rArm = model.getPart("rightArm").setTextureSize(256, 128);
var lArm = model.getPart("leftArm").setTextureSize(256, 128);
var rLeg = model.getPart("rightLeg").setTextureSize(256, 128);
var lLeg = model.getPart("leftLeg").setTextureSize(256, 128);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-4,1,-12,10,10,8);
//2
body.setTextureOffset(63,0, true);
body.addBox(-4,6, -4,10, 10, 16);
//3
body.setTextureOffset(0,35, true);
body.addBox(4, -9, -7,6, 11, 0);
//3
body.setTextureOffset(0,58, true);
body.addBox(-8,-9,-7,6, 11, 0);
//4
body.setTextureOffset(135,0, true);
body.addBox(6,12,-3,2, 8, 4);
body.addBox(-6,12,-3,2, 8, 4);
//5
body.setTextureOffset(60, 36, true);
body.addBox(-1, 6, 12,4, 5, 6);
//6
body.setTextureOffset(134, 22, true);
body.addBox(-6,11, 6,2, 6, 5);
body.addBox(6,11, 6,2, 6, 5);
//7
body.setTextureOffset(118, 0, true);
body.addBox(6,17,8,2,3,4);
body.addBox(-6,17,8,2,3,4);
//8
body.setTextureOffset(156, 0, true);
body.addBox(-6,20,-3,2, 4, 3);
body.addBox(6,20,-3,2, 4, 3);
body.addBox(6,20,9,2,4,3);
body.addBox(-6,20,9,2,4,3);
//9
body.setTextureOffset(44, 0, true);
body.addBox(-6, 22,-4,2, 2, 2);
body.addBox(6, 22, -4,2, 2, 2);

body.addBox(6, 22, 8,2, 2, 2);
body.addBox(-6, 22, 8,2, 2, 2);
//10
body.setTextureOffset(7,77, true);
body.addBox(-11,-4,-4,24, 23, 0);
//11
body.setTextureOffset(0, 25, true);
body.addBox(-1, 8, -13,4, 3, 1);
//12
body.setTextureOffset(175, 0, true);
body.addBox(0, 7, 18,2, 4, 8);
//13
body.setTextureOffset(163, 46, true);
body.addBox(0.5, 8, 26,1, 3, 10);
//14
body.setTextureOffset(69, 70, true);
body.addBox(-5, 8, 36,13, 0, 12);
//14
body.setTextureOffset(69, 70, true);
body.addBox(-5, 8, 36,13, 0, 12);
//15
body.setTextureOffset(205, 0, true);
body.addBox(0.5, 4, 0,1, 2, 2);
body.addBox(0.5, 4, 4,1, 2, 2);
body.addBox(0.5, 4, 9,1, 2, 2);
body.addBox(0.5, 4, 13,1, 2, 2);
body.addBox(0.5,5,18,1, 2, 2);
body.addBox(0.5, 5, 22,1, 2, 2);
body.addBox(0.5,6,27,1,2,2);
body.addBox(0.5,6,32,1,2,2);
}

function addEmberonRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(256, 128);
var body = model.getPart("body").setTextureSize(256, 128);
var rArm = model.getPart("rightArm").setTextureSize(256, 128);
var lArm = model.getPart("leftArm").setTextureSize(256, 128);
var rLeg = model.getPart("rightLeg").setTextureSize(256, 128);
var lLeg = model.getPart("leftLeg").setTextureSize(256, 128);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-4,1,-12,10,10,8);
//2
body.setTextureOffset(63,0, true);
body.addBox(-4,6, -4,10, 10, 16);
//3
body.setTextureOffset(0,35, true);
body.addBox(4, -9, -7,6, 11, 0);
//3
body.setTextureOffset(0,58, true);
body.addBox(-8,-9,-7,6, 11, 0);
//4
body.setTextureOffset(135,0, true);
body.addBox(6,12,-3,2, 8, 4);
body.addBox(-6,12,-3,2, 8, 4);
//6
body.setTextureOffset(134, 22, true);
body.addBox(-6,11, 6,2, 6, 5);
body.addBox(6,11, 6,2, 6, 5);
//7
body.setTextureOffset(118, 0, true);
body.addBox(6,17,8,2,3,4);
body.addBox(-6,17,8,2,3,4);
//8
body.setTextureOffset(156, 0, true);
body.addBox(-6,20,-3,2, 4, 3);
body.addBox(6,20,-3,2, 4, 3);
body.addBox(6,20,9,2,4,3);
body.addBox(-6,20,9,2,4,3);
//9
body.setTextureOffset(44, 0, true);
body.addBox(-6, 22,-4,2, 2, 2);
body.addBox(6, 22, -4,2, 2, 2);

body.addBox(6, 22, 8,2, 2, 2);
body.addBox(-6, 22, 8,2, 2, 2);

//11
body.setTextureOffset(0, 25, true);
body.addBox(-1, 8, -13,4, 3, 1);

//

//5
body.setTextureOffset(0, 83, true);
body.addBox(-7,5,-7,16, 9, 8);

//10
body.setTextureOffset(49, 45, true);
body.addBox(-1.5, -1, -14,5, 5, 5);

//12
body.setTextureOffset(83, 81, true);
body.addBox(-5, 1, 7,12, 12, 12);
}

function addCharmanderRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(64, 64);
var body = model.getPart("body").setTextureSize(64, 64);
var rArm = model.getPart("rightArm").setTextureSize(64, 64);
var lArm = model.getPart("leftArm").setTextureSize(64, 64);
var rLeg = model.getPart("rightLeg").setTextureSize(64, 64);
var lLeg = model.getPart("leftLeg").setTextureSize(64, 64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//cabeza
body.setTextureOffset(0,0, true);
body.addBox( -2,4, -5,6, 6, 7);

body.setTextureOffset(21,50, true);
body.addBox( -1.5,3.5, -4.5,5,1,6);

body.setTextureOffset(0,36, true);
body.addBox(3.5,5, -3,1,4,4);
body.addBox(-2.5,5, -3,1,4,4);

body.setTextureOffset(24,0, true);
body.addBox(-0.5,7, -6,3,3,1);

//cuerpo
body.setTextureOffset(40,0, true);
body.addBox(-2, 10, -3 ,6, 10, 6);

body.setTextureOffset(0,47, true);
body.addBox(-1,12, -4,4, 6, 1);


//brazos
body.setTextureOffset(17,24, true);
body.addBox(-4,11,-2,2,6,2);
body.addBox(4,11,-2,2,6,2);

//piernas
body.setTextureOffset(17,24, true);
body.addBox(3,18,-2,2,6,2);
body.addBox(-3,18,-2,2,6,2);


//cola
body.setTextureOffset(48,18, true);
body.addBox(-0.5,16,3,3,3, 5);

body.setTextureOffset(31,18, true);
body.addBox(0,15,6,2,2, 5);

body.setTextureOffset(29,10, true);
body.addBox(0,13,10,2,3,2);

body.setTextureOffset(33,29, true);
body.addBox(0.5,8,9,1,5,4);
}

function addJolteonRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(256, 128);
var body = model.getPart("body").setTextureSize(256, 128);
var rArm = model.getPart("rightArm").setTextureSize(256, 128);
var lArm = model.getPart("leftArm").setTextureSize(256, 128);
var rLeg = model.getPart("rightLeg").setTextureSize(256, 128);
var lLeg = model.getPart("leftLeg").setTextureSize(256, 128);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-4,1,-12,10,10,8);
//2
body.setTextureOffset(63,0, true);
body.addBox(-4,6, -4,10, 10, 16);
//3
body.setTextureOffset(0,35, true);
body.addBox(4, -9, -7,6, 11, 0);
//3
body.setTextureOffset(0,58, true);
body.addBox(-8,-9,-7,6, 11, 0);
//4
body.setTextureOffset(135,0, true);
body.addBox(6,12,-3,2, 8, 4);
body.addBox(-6,12,-3,2, 8, 4);
//6
body.setTextureOffset(134, 22, true);
body.addBox(-6,11, 6,2, 6, 5);
body.addBox(6,11, 6,2, 6, 5);
//7
body.setTextureOffset(118, 0, true);
body.addBox(6,17,8,2,3,4);
body.addBox(-6,17,8,2,3,4);
//8
body.setTextureOffset(156, 0, true);
body.addBox(-6,20,-3,2, 4, 3);
body.addBox(6,20,-3,2, 4, 3);
body.addBox(6,20,9,2,4,3);
body.addBox(-6,20,9,2,4,3);
//9
body.setTextureOffset(44, 0, true);
body.addBox(-6, 22,-4,2, 2, 2);
body.addBox(6, 22, -4,2, 2, 2);

body.addBox(6, 22, 8,2, 2, 2);
body.addBox(-6, 22, 8,2, 2, 2);
//11
body.setTextureOffset(0, 25, true);
body.addBox(-1, 8, -13,4, 3, 1);

//

//5
body.setTextureOffset(20, 64, true);
body.addBox(-5, 5, 7,12, 1, 11);
body.addBox(-5,4, 8,12, 1, 11);
//5
body.setTextureOffset(29, 92, true);
body.addBox(6, 6, 7,1, 7, 11);
body.addBox(-5,6,7,1, 7, 11);
body.addBox(7, 5, 8,12, 1, 11);
body.addBox(-6,5, 8,12, 1, 11);

//5
body.setTextureOffset(91, 71, true);
body.addBox(-5, 5, -4,11, 1, 6);
body.addBox(-5,4,-3,11,1,6);

//5
body.setTextureOffset(92, 110, true);
body.addBox(6, 6, -4,1, 7, 6);
body.addBox(7,6,-3,1,7,6);
body.addBox(-7, 6, -3,1,7,6);
}


function addOddishRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-2.5,16,-3,6, 6, 6);


//c111
body.setTextureOffset(30,0, true);
body.addBox(-3,22,-5,2,2,5);
body.addBox(2,22,-5,2,2,5);

//c111
body.setTextureOffset(-12, 13, true);
body.addBox(-2, 15.5, 0,5, 0, 12);


//c111
body.setTextureOffset(28, 13, true);
body.addBox(-2, 15.5, -12,5, 0, 12);

//c111
body.setTextureOffset(0, 26, true);
body.addBox(-14,15.5,-2,12, 0, 5);

//c111
body.setTextureOffset(0, 39, true);
body.addBox(3,15.5,-2,12, 0, 5);
}

function addCharizardRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 0, 0,true);
body.addBox(-9.5,-2,-6.5, 19, 19, 15);
body.setTextureOffset( 0, 38,true);
body.addBox(-8,-6,-6, 16, 4, 14);
body.setTextureOffset( 0, 61,true);
body.addBox(-7,-7,-5, 14, 1, 12);
body.setTextureOffset( 0, 78,true);
body.addBox(-5,-8,-4, 10, 1, 10);
body.setTextureOffset( 76, 0,true);
body.addBox(-3.5,-17,-3, 7, 9, 7);
body.setTextureOffset( 123, 0,true);
body.addBox(-4.5,-25,-3, 9, 8, 8);
body.setTextureOffset( 168, 0,true);
body.addBox(-3,-22,-13, 6, 5, 10);
body.setTextureOffset( 80, 29,true);
body.addBox(-12,-8,-2, 5, 5, 5);
body.setTextureOffset( 80, 29,true);
body.addBox(7,-8,-2, 5, 5, 5);
body.setTextureOffset( 110, 37,true);
body.addBox(-12,10,-2, 7, 14, 7);
body.setTextureOffset( 110, 37,true);
body.addBox(6,10,-2, 7, 14, 7);
body.setTextureOffset( 161, 38,true);
body.addBox(-4,12,6, 9, 8, 9);
body.setTextureOffset( 161, 38,true);
body.addBox(-3.5,13.5,15, 8, 7, 8);
body.setTextureOffset( 161, 38,true);
body.addBox(-3,15,23, 7, 6, 7);
body.setTextureOffset( 161, 38,true);
body.addBox(-2.5,17,30, 6, 5, 6);
body.setTextureOffset( 161, 38,true);
body.addBox(-2,19,36, 5, 4, 5);
body.setTextureOffset( 161, 38,true);
body.addBox(-1.5,19,41, 4, 4, 4);
body.setTextureOffset( 79, 54,true);
body.addBox(-13,-3,-1, 3, 8, 3);
body.setTextureOffset( 79, 54,true);
body.addBox(10,-3,-1, 3, 8, 3);
body.setTextureOffset( 160, 68,true);
body.addBox(-15,1,-11, 4, 4, 13);
body.setTextureOffset( 160, 68,true);
body.addBox(11,1,-11, 4, 4, 13);
body.setTextureOffset( 5, 97,true);
body.addBox(0,3,38, 1, 17, 13);
body.setTextureOffset( 0, 0,true);
body.addBox(-4,-25.5,5, 2, 2, 5);
body.setTextureOffset( 0, 0,true);
body.addBox(2,-25.5,5, 2, 2, 5);
body.setTextureOffset( 160, 90,true);
body.addBox(0,-25,9, 45, 34, 1);
body.setTextureOffset( 60, 90,true);
body.addBox(-45,-25,9, 45, 34, 1);
body.setTextureOffset( 53, 0,true);
body.addBox(-11,23,-5, 1, 1, 3);
body.setTextureOffset( 53, 0,true);
body.addBox(-9,23,-5, 1, 1, 3);
body.setTextureOffset( 53, 0,true);
body.addBox(-7,23,-5, 1, 1, 3);
body.setTextureOffset( 53, 0,true);
body.addBox(7,23,-5, 1, 1, 3);
body.setTextureOffset( 53, 0,true);
body.addBox(9,23,-5, 1, 1, 3);
body.setTextureOffset( 53, 0,true);
body.addBox(11,23,-5, 1, 1, 3);
}


function addGeodudeRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-4,0,-5,9, 9, 9);
//c111
body.setTextureOffset(0,28, true);
body.addBox(-12,3,-2,8, 2, 2);
//c111
body.setTextureOffset(0,28, true);
body.addBox(-12,3,-2,8, 2, 2);
body.addBox(5,3,-2,8, 2, 2);
//c111
body.setTextureOffset(45, 0, true);
body.addBox(-12,3,-7,3,3,5);
body.addBox(10,3,-7,3,3,5);
//c111
body.setTextureOffset(75,0, true);
body.addBox(-12.5,2,-13,4,4,6);
body.addBox(9.5,2,-13,4,4,6);

}

function addGravelerRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-8,6,-8,16, 16, 16);
//c111
body.setTextureOffset(0,39, true);
body.addBox(-7,22,-2,5, 2, 5);
body.addBox(2,22,-2,5, 2, 5);
//c111
body.setTextureOffset(0,51, true);
body.addBox(-16,9,0,8, 4, 4);
body.addBox(8,9,0,8, 4, 4);
//c111
body.setTextureOffset(75,0, true);
body.addBox(-20,9,-4,4, 4, 8);
body.addBox(16,9,-4,4, 4, 8);
//c111
body.setTextureOffset(71, 39, true);
body.addBox(3,17,-10,6, 4, 4);
body.addBox(-9,18,-10,6, 4, 4);
}

function addGolemRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(256,128);
var body = model.getPart("body").setTextureSize(256,128);
var rArm = model.getPart("rightArm").setTextureSize(256,128);
var lArm = model.getPart("leftArm").setTextureSize(256,128);
var rLeg = model.getPart("rightLeg").setTextureSize(256,128);
var lLeg = model.getPart("leftLeg").setTextureSize(256,128);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-9, -1, -9,18, 18, 18);
//c111
//c111
body.setTextureOffset(0,50, true);
body.addBox(-3.5,5,-15,7, 7, 6);

//c111
body.setTextureOffset(90, 0, true);
body.addBox(-14,7,-12,5, 5, 13);
body.addBox(9,7,-12,5, 5, 13);


//c111
body.setTextureOffset(35, 56, true);
body.addBox(-10,16,-4,5,8,5);
body.addBox(5,16,-4,5,8,5);

} 

function addDratiniRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-3,19,-17,5, 5, 5);
//c111
body.setTextureOffset(0,17, true);
body.addBox(-2.5,20,-12,4, 4, 22);
//c111
body.setTextureOffset(26, 0, true);
body.addBox(-2,22,-18,3, 2, 1);
//c111
body.setTextureOffset(43, 0, true);
body.addBox(1,17,-14,3, 3, 0);
body.addBox(-5,17,-14,3, 3, 0);
//c111
body.setTextureOffset(64, 0, true);
body.addBox(-1.5,21,10,2, 3, 6);
}



function addDragonairRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,29, true);
body.addBox(-2,6,-8,5, 18, 5);
//c111
body.setTextureOffset(0,0, true);
body.addBox(-2,19, -3,5, 5, 21);
//c111
body.setTextureOffset(44,0, true);
body.addBox(-3,0, -10,7, 6, 7);
//c111
body.setTextureOffset(0,0, true);
body.addBox(-1.5,2,-14,4, 4, 4);
//c111
body.setTextureOffset(0,13, true);
body.addBox(-0.5,7,-10,2, 2, 2);
//c11
body.setTextureOffset(79, 0, true);
body.addBox(-1.5,20, 18,4, 4, 7);
//c111
body.setTextureOffset(54, 28, true);
body.addBox(-0.5,21,24,2, 3, 7);
//c111
body.setTextureOffset(80, 34, true);
body.addBox(-0.5,14,29,2, 8, 2);
//c111
body.setTextureOffset(30, 50, true);
body.addBox(-1,11,28.5,3, 3, 3);
//c111
body.setTextureOffset(108, 0, true);
body.addBox(0,3,29.5,1, 8, 1);
//c111
body.setTextureOffset(31, 44, true);
body.addBox(-0.5,7,29,2, 2, 2);
//c111
body.setTextureOffset(54, 44, true);
body.addBox(-3.1, -4, -6,0, 8, 12);
//c111
body.setTextureOffset(87, 44, true);
body.addBox(4.1,-4,-6,0, 8, 12);
}

function addCaterpieRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,0, true);
body.addBox(-2.5,16,-6,5, 5, 5);

//c111
body.setTextureOffset(38,0, true);
body.addBox(-2,19,-2,4, 4, 4);
body.addBox(-2,19,2,4, 4, 4);

//c111
body.setTextureOffset(0, 24, true);
body.addBox(-0.5,15,-7,1, 4, 1);


//c111
body.setTextureOffset(0, 39, true);
body.addBox(-4,15,-6,8, 1, 1);

//c111
body.setTextureOffset(65, 0, true);
body.addBox(-1.5,18,4,3, 3, 6);

//c111
body.setTextureOffset(15, 16, true);
body.addBox(-3,22,-2,2, 2, 2);
body.addBox(-3,22,1,2, 2, 2);

body.addBox(1,22,-1,2, 2, 2);
body.addBox(1,22,1,2, 2, 2);


//c111
body.setTextureOffset(22, 0, true);
body.addBox(-1,17,9,2, 2, 3);
}

	


function addIvysaurRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128, 64);
var body = model.getPart("body").setTextureSize(128, 64);
var rArm = model.getPart("rightArm").setTextureSize(128, 64);
var lArm = model.getPart("leftArm").setTextureSize(128, 64);
var rLeg = model.getPart("rightLeg").setTextureSize(128, 64);
var lLeg = model.getPart("leftLeg").setTextureSize(128, 64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//cabeza
body.setTextureOffset(0,0, true);
body.addBox( -4,11, -13,8, 7, 8);

//orejas
body.setTextureOffset(26,0, true);
body.addBox( -4,9, -9,1,2,3);
body.addBox(3,9,-9,1,2,3);


//cuerpo
body.setTextureOffset(52,0, true);
body.addBox(-5,13,-5,10,7,8);
body.setTextureOffset(0,25, true);
body.addBox(-4,14,3,8,6,5);


//petalos
body.setTextureOffset(90,31, true);
body.addBox(-3,12.2,-6,5,0,8);

//petalos 2
body.setTextureOffset(90,7, true);
body.addBox(-9,12.2,0,8,0,5);

//petalos 3
body.setTextureOffset(91,16, true);
body.addBox(-3,12.2,2,5,0,8);

//petalos 4
body.setTextureOffset(89,0, true);
body.addBox(0,12.2,0,8,0,5);


//petalos arriba
body.setTextureOffset(36,0, true);
body.addBox(-3,6.2,-4.8,5,6,0);

//petalos 2
body.setTextureOffset(55,52, true);
body.addBox(-9,6.2,0,0,6,5);

//petalos 3
body.setTextureOffset(44,28, true);
body.addBox(-3,6.2,10,5,6,0);

//petalos 4
body.setTextureOffset(66,38, true);
body.addBox(8,6.2,0,0,6,5);

//capuyo
body.setTextureOffset(62,19, true);
body.addBox(-2,8,0,4,4,4);


//brazos
body.setTextureOffset(0,42, true);
body.addBox(-8,18,-8.1,4,6,4);
body.addBox(4,18,-6,4,6,4);

//piernas
body.setTextureOffset(18,53, true);
body.addBox(4,19,4,3,5,3);
body.addBox(-7,19,4,3,5,3);


}

function addMagnemiteRenderType(renderer)
{
var var2 = 0;
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
body.clear();
body.setTextureOffset(0, 0, true);
body.addBox(-3.5, -10, -3.5, 7, 7, 7, 0);
body.setTextureOffset(8, 14, true);
body.addBox(-1.5, -13, -1.5, 3, 1, 3, 0);
body.setTextureOffset(0, 14, true);
body.addBox(-1, -12, -1, 2, 2, 2, 0);
body.setTextureOffset(0, 18, true);
body.addBox(-3, -4.5, -5.5, 1, 1, 2, 0);
body.addBox(2, -4.5, -5.5, 1, 1, 2, 0);
body.setTextureOffset(0, 21, true);
body.addBox(-3.5, -5, -6, 2, 2, 1, 0);
body.addBox(1.5, -5, -6, 2, 2, 1, 0);
body.setTextureOffset(34, 0, true);
body.addBox(-10.5, -9, -0.5, 5, 2, 1, 0);
body.setTextureOffset(34, 3, true);
body.addBox(-10.5, -6, -0.5, 5, 2, 1, 0);
body.setTextureOffset(28, 0, true);
body.addBox(-5.5, -9, -0.5, 2, 5, 1, 0);

body.setTextureOffset(46, 0, true);
body.addBox(5.5, -9, -0.5, 5, 2, 1, 0);
body.setTextureOffset(46, 3, true);
body.addBox(5.5, -6, -0.5, 5, 2, 1, 0);
body.setTextureOffset(28, 0, true);
body.addBox(3.5, -9, -0.5, 2, 5, 1, 0);

rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
}


function addSnorlaxRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(256,128);
var body = model.getPart("body").setTextureSize(256,128);
var rArm = model.getPart("rightArm").setTextureSize(256,128);
var lArm = model.getPart("leftArm").setTextureSize(256,128);
var rLeg = model.getPart("rightLeg").setTextureSize(256,128);
var lLeg = model.getPart("leftLeg").setTextureSize(256,128);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(172,0, true);
body.addBox(-12.13333,-11,-9,24, 28, 18);
//c111
body.setTextureOffset(0,0, true);
body.addBox(-11,17,-5,8, 7, 9);
body.addBox(3,17,-5,8, 7, 9);
//c111
body.setTextureOffset(0,37, true);
body.addBox(-18,-10,-3,6, 21, 6);
body.addBox(12,-10,-3,6, 21, 6);
//c111
body.setTextureOffset(52,0, true);
body.addBox(-7,-21,-5,14, 10, 11);
//c111
body.setTextureOffset(0, 86, true);
body.addBox(-10,21,-7,6, 3, 2);
body.addBox(4,21,-7,6, 3, 2);
//c111
body.setTextureOffset(36, 47, true);
body.addBox(-7,-24,0,4, 3, 1);
body.addBox(3,-24,0,4, 3, 1);
}


function addBellsproutRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize (128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(23,0, true);
body.addBox(0,5,0,1, 17, 1);

//c111
body.setTextureOffset(33,0, true);
body.addBox(-2,0,-4,5, 5, 6);

//c111
body.setTextureOffset(33,0, true);
body.addBox(-2,0,-4,5, 5, 6);

//c111
body.setTextureOffset(0,0, true);
body.addBox(-1,2,-7,3, 3, 3);

//c111
body.setTextureOffset(0,21, true);
body.addBox(-1.5,1.5,-8,4, 4, 1);

//c111
body.setTextureOffset(68, 0, true);
body.addBox(1,7,0,12, 8, 1);

body.setTextureOffset(68,17, true);
body.addBox(-12,7,0,12, 8, 1);


//c111
body.setTextureOffset(0, 38, true);
body.addBox(-1,22,0,1, 2, 1);
body.addBox(1,22,1,1, 2, 1);

}


function addVenomothRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(256,128);
var body = model.getPart("body").setTextureSize(256,128);
var rArm = model.getPart("rightArm").setTextureSize(256,128);
var lArm = model.getPart("leftArm").setTextureSize(256,128);
var rLeg = model.getPart("rightLeg").setTextureSize(256,128);
var lLeg = model.getPart("leftLeg").setTextureSize(256,128);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//c111
body.setTextureOffset(0,49, true);
body.addBox(-2.5,0.5,0,8, 8, 12);

//c111
body.setTextureOffset(63, 0, true);
body.addBox(-2,1,-3,7, 7, 3);

//c111
body.setTextureOffset(0, 0, true);
body.addBox(-1,1,-10,5, 6, 7);

//c111
body.setTextureOffset(0,24, true);
body.addBox(-2, 0,-8,7, 7, 3);

//c111
body.setTextureOffset(97, 0, true);
body.addBox(-1.5,-1,-16,6, 6, 6);

//c111
body.setTextureOffset(31, 0, true);
body.addBox(2,-1,-17,4, 4, 1);
body.addBox(-3,-1,-17,4, 4, 1);

//c111
body.setTextureOffset(56, 24, true);
body.addBox(-2,-11,-15,2, 10, 2);
body.addBox(0.5,-11,-15,2, 10, 2);
body.addBox(3,-11,-15,2,10,2);


//c111
body.setTextureOffset(42, 77, true);
body.addBox(3,0,-6,29, 1, 20);


//c111
body.setTextureOffset(42, 102, true);
body.addBox(-29,0,-6,29, 1, 20);
}

function addDiglettRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//Shape1
body.setTextureOffset(0, 34, true);
body.addBox(-5,23,-5,10, 1, 10);


//Shape2
body.setTextureOffset(0,0, true);
body.addBox(-4,15,-4,8, 8, 8);

//Shape3
body.setTextureOffset(35,0, true);
body.addBox(-1.5,19,-4.666667,3, 2, 1);

//Shape4
body.setTextureOffset(48,0, true);
body.addBox(-7,21,0,3,3,3);

//Shape5
body.setTextureOffset(72, 0, true);
body.addBox(-3,14,-3,6, 1, 6);

}



function addDugtrioRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//Shape1
body.setTextureOffset(0, 34, true);
body.addBox(-5,23,-5,10, 1, 10);


//Shape2
body.setTextureOffset(0,0, true);
body.addBox(-4,15,-4,8, 8, 8);

//Shape3
body.setTextureOffset(35,0, true);
body.addBox(-1.5,19,-4.666667,3, 2, 1);
body.addBox(-5.5,13,5,3, 2, 1);
body.addBox(4.5,9,6,3, 2, 1);

//Shape4
body.setTextureOffset(48,0, true);
body.addBox(-7,21,0,3,3,3);
body.addBox(10,21,13,3,3,3);



//Shape5
body.setTextureOffset(72, 0, true);
body.addBox(-3,14,-3,6, 1, 6);
body.addBox(-7,7, 7,6, 1, 6);
body.addBox(3,3,8,6, 1, 6);

//digle_2
body.setTextureOffset(0, 47, true);
body.addBox(-9,23,5,20, 1, 11);

//digle_2
body.setTextureOffset(0, 0, true);
body.addBox(-8,8,6,8, 15, 8);
body.addBox(2,4,7,8, 19, 8);

}

function addMoltresRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear().setTextureSize(512,256);
var body = model.getPart("body").clear().setTextureSize(512,256);
var rArm = model.getPart("rightArm").clear().setTextureSize(512,256);
var lArm = model.getPart("leftArm").clear().setTextureSize(512,256);
var rLeg = model.getPart("rightLeg").clear().setTextureSize(512,256);
var lLeg = model.getPart("leftLeg").clear().setTextureSize(512,256);
body.setTextureOffset( 67, 0,true);
body.addBox(-6,-5,-9, 13, 10, 16);
body.setTextureOffset( 0, 0,true);
body.addBox(-5,5,4, 4, 7, 4);
body.setTextureOffset( 0, 0,true);
body.addBox(3,5,4, 4, 7, 4);
body.setTextureOffset( 0, 44,true);
body.addBox(-5,-4,-10, 11, 8, 1);
body.setTextureOffset( 0, 68,true);
body.addBox(-4,-4.5,-12, 9, 7, 2);
body.setTextureOffset( 0, 98,true);
body.addBox(-3.5,12,5.5, 1, 11, 1);
body.setTextureOffset( 0, 98,true);
body.addBox(4.5,12,5.5, 1, 11, 1);
body.setTextureOffset( 0, 129,true);
body.addBox(-2.5,-5,-14, 6, 6, 2);
body.setTextureOffset( 154, 0,true);
body.addBox(-1.5,-5,-30, 4, 4, 16);
body.setTextureOffset( 214, 0,true);
body.addBox(-2.5,-6.5,-38, 6, 6, 8);
body.setTextureOffset( 30, 0,true);
body.addBox(-2,-6,-44, 5, 5, 6);
body.setTextureOffset( 44, 52,true);
body.addBox(0,-11,-40, 1, 7, 19);
body.setTextureOffset( 166, 42,true);
body.addBox(0,-4,-55, 1, 2, 11);
body.setTextureOffset( 38, 100,true);
body.addBox(4,-3,-11, 19, 1, 4);
body.setTextureOffset( 38, 100,true);
body.addBox(-22,-3,-11, 19, 1, 4);
body.setTextureOffset( 44, 120,true);
body.addBox(20,-4,-10, 30, 1, 5);
body.setTextureOffset( 44, 120,true);
body.addBox(-49,-4,-10, 30, 1, 5);
body.setTextureOffset( 43, 151,true);
body.addBox(47,-3,-9, 25, 1, 3);
body.setTextureOffset( 43, 151,true);
body.addBox(-70,-3,-9, 25, 1, 3);
body.setTextureOffset( 264, 0,true);
body.addBox(-5,-4,7, 11, 8, 3);
body.setTextureOffset( 145, 87,true);
body.addBox(-0.5,-4,10, 2, 2, 12);
body.setTextureOffset( 325, 0,true);
body.addBox(-5,-5,8, 11, 1, 22);
body.setTextureOffset( 325, 0,true);
body.addBox(-5,4,8, 11, 1, 22);
body.setTextureOffset( 228, 54,true);
body.addBox(6,-5,8, 1, 10, 22);
body.setTextureOffset( 228, 54,true);
body.addBox(-6,-5,8, 1, 10, 22);
body.setTextureOffset( 0, 171,true);
body.addBox(7,-2,-7, 16, 1, 27);
body.setTextureOffset( 0, 206,true);
body.addBox(-22,-2,-7, 16, 1, 27);
body.setTextureOffset( 125, 118,true);
body.addBox(20,-3,-5, 30, 1, 27);
body.setTextureOffset( 125, 160,true);
body.addBox(-49,-3,-5, 30, 1, 27);
body.setTextureOffset( 312, 73,true);
body.addBox(47,-2,-6, 25, 1, 24);
body.setTextureOffset( 312, 120,true);
body.addBox(-70,-2,-6, 25, 1, 24);
body.setTextureOffset( 197, 39,true);
body.addBox(-5,23,4, 4, 1, 4);
body.setTextureOffset( 197, 39,true);
body.addBox(3,23,4, 4, 1, 4);
body.setTextureOffset( 0, 22,true);
body.addBox(-3,23,8, 1, 1, 6);
body.setTextureOffset( 0, 22,true);
body.addBox(4,23,8, 1, 1, 6);
body.setTextureOffset( 0, 22,true);
body.addBox(-5,23,1, 1, 1, 6);
body.setTextureOffset( 0, 22,true);
body.addBox(-2,23,1, 1, 1, 6);
body.setTextureOffset( 0, 22,true);
body.addBox(3,23,1, 1, 1, 6);
body.setTextureOffset( 0, 22,true);
body.addBox(6,23,1, 1, 1, 6);
}	  
	  
function addArticunoRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear().setTextureSize(512,256);
var body = model.getPart("body").clear().setTextureSize(512,256);
var rArm = model.getPart("rightArm").clear().setTextureSize(512,256);
var lArm = model.getPart("leftArm").clear().setTextureSize(512,256);
var rLeg = model.getPart("rightLeg").clear().setTextureSize(512,256);
var lLeg = model.getPart("leftLeg").clear().setTextureSize(512,256);
body.setTextureOffset( 67, 0,true);
body.addBox(-6,-5,-9, 13, 10, 16);
body.setTextureOffset( 0, 0,true);
body.addBox(-5,5,4, 4, 7, 4);
body.setTextureOffset( 0, 0,true);
body.addBox(3,5,4, 4, 7, 4);
body.setTextureOffset( 0, 44,true);
body.addBox(-5,-4,-10, 11, 8, 1);
body.setTextureOffset( 0, 68,true);
body.addBox(-4,-4.5,-12, 9, 7, 2);
body.setTextureOffset( 0, 98,true);
body.addBox(-3.5,12,5.5, 1, 11, 1);
body.setTextureOffset( 0, 98,true);
body.addBox(4.5,12,5.5, 1, 11, 1);
body.setTextureOffset( 0, 129,true);
body.addBox(-2.5,-5,-14, 6, 6, 2);
body.setTextureOffset( 160, 2,true);
body.addBox(-1.5,-5,-20, 4, 4, 6);
body.setTextureOffset( 214, 0,true);
body.addBox(-3,-6.5,-27, 7, 7, 7);
body.setTextureOffset( 30, 0,true);
body.addBox(-2.5,-6,-32, 6, 6, 5);
body.setTextureOffset( 166, 42,true);
body.addBox(-0.5,-4,-36, 2, 3, 4);
body.setTextureOffset( 38, 100,true);
body.addBox(4,-3,-11, 19, 1, 4);
body.setTextureOffset( 38, 100,true);
body.addBox(-22,-3,-11, 19, 1, 4);
body.setTextureOffset( 44, 120,true);
body.addBox(20,-4,-10, 30, 1, 5);
body.setTextureOffset( 44, 120,true);
body.addBox(-49,-4,-10, 30, 1, 5);
body.setTextureOffset( 43, 151,true);
body.addBox(47,-3,-9, 11, 1, 3);
body.setTextureOffset( 43, 151,true);
body.addBox(-57,-3,-9, 11, 1, 3);
body.setTextureOffset( 264, 0,true);
body.addBox(-5,-4,7, 11, 8, 3);
body.setTextureOffset( 145, 87,true);
body.addBox(-3.5,-4,10, 8, 2, 12);
body.setTextureOffset( 0, 171,true);
body.addBox(7,-2,-7, 16, 1, 26);
body.setTextureOffset( 0, 206,true);
body.addBox(-22,-2,-7, 16, 1, 26);
body.setTextureOffset( 125, 118,true);
body.addBox(20,-3,-5, 30, 1, 26);
body.setTextureOffset( 125, 160,true);
body.addBox(-49,-3,-5, 30, 1, 26);
body.setTextureOffset( 312, 73,true);
body.addBox(47,-2,-6, 37, 1, 23);
body.setTextureOffset( 312, 120,true);
body.addBox(-86,-2,-6, 37, 1, 23);
body.setTextureOffset( 197, 39,true);
body.addBox(-5,23,4, 4, 1, 4);
body.setTextureOffset( 197, 39,true);
body.addBox(3,23,4, 4, 1, 4);
body.setTextureOffset( 0, 22,true);
body.addBox(-3,23,8, 1, 1, 4);
body.setTextureOffset( 0, 22,true);
body.addBox(4,23,8, 1, 1, 4);
body.setTextureOffset( 0, 22,true);
body.addBox(-5,23,2, 1, 1, 4);
body.setTextureOffset( 0, 22,true);
body.addBox(-2,23,2, 1, 1, 4);
body.setTextureOffset( 0, 22,true);
body.addBox(3,23,2, 1, 1, 4);
body.setTextureOffset( 0, 22,true);
body.addBox(6,23,2, 1, 1, 4);
body.setTextureOffset( 50, 39,true);
body.addBox(-3.5,-8,-30, 8, 3, 8);
body.setTextureOffset( 264, 178,true);
body.addBox(-4.5,-5,18.53333, 10, 1, 45);
}

function addGyaradosRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear().setTextureSize(512,256);
var body = model.getPart("body").clear().setTextureSize(512,256);
var rArm = model.getPart("rightArm").clear().setTextureSize(512,256);
var lArm = model.getPart("leftArm").clear().setTextureSize(512,256);
var rLeg = model.getPart("rightLeg").clear().setTextureSize(512,256);
var lLeg = model.getPart("leftLeg").clear().setTextureSize(512,256);
body.setTextureOffset( 0, 56);
body.addBox(-5,15,-5, 10, 9, 11);
body.setTextureOffset( 0, 100);
body.addBox(-5,13,6, 10, 9, 10);
body.setTextureOffset( 0, 138);
body.addBox(-4.5,11,16, 9, 8, 9);
body.setTextureOffset( 0, 138);
body.addBox(-4.5,5,21, 9, 8, 9);
body.setTextureOffset( 0, 138);
body.addBox(-4.5,1,26, 9, 8, 9);
body.setTextureOffset( 0, 0);
body.addBox(-4,2,34, 8, 7, 8);
body.setTextureOffset( 0, 0);
body.addBox(-4,5,38, 8, 7, 8);
body.setTextureOffset( 61, 100);
body.addBox(-5,11,-15, 10, 10, 10);
body.setTextureOffset( 0, 100);
body.addBox(-5,4,-19, 10, 9, 10);
body.setTextureOffset( 0, 100);
body.addBox(-5,-3,-22, 10, 9, 10);
body.setTextureOffset( 86, 0);
body.addBox(-4.4,-10,-25, 9, 10, 10);
body.setTextureOffset( 75, 46);
body.addBox(-5,-15,-28, 10, 9, 11);
body.setTextureOffset( 149, 0);
body.addBox(-6,-19,-38, 12, 12, 11);
body.setTextureOffset( 69, 0);
body.addBox(6,-8,-37, 1, 16, 1);
body.setTextureOffset( 69, 0);
body.addBox(-7,-8,-37, 1, 16, 1);
body.setTextureOffset( 221, 0);
body.addBox(-1,-24,-21, 1, 9, 3);
body.setTextureOffset( 221, 0);
body.addBox(-1,-21,-24, 1, 6, 3);
body.setTextureOffset( 221, 0);
body.addBox(-1,-20,-19, 1, 7, 3);
body.setTextureOffset( 271, 0);
body.addBox(5,-9,-32, 6, 8, 1);
body.setTextureOffset( 271, 0);
body.addBox(-11,-9,-32, 6, 8, 1);
body.setTextureOffset( 167, 44);
body.addBox(-6,-7,-45, 12, 1, 8);
body.setTextureOffset( 0, 32);
body.addBox(-3.5,9,43, 7, 5, 9);
body.setTextureOffset( 139, 75,true);
body.addBox(-6,12,52, 14, 13, 1);
body.setTextureOffset( 233, 26);
body.addBox(-1,-1,-12, 1, 4, 10);
body.setTextureOffset( 221, 0);
body.addBox(-1,-8,30, 1, 9, 3);
body.setTextureOffset( 221, 0);
body.addBox(-1,-5,27, 1, 6, 3);
body.setTextureOffset( 221, 0);
body.addBox(-1,-4,33, 1, 6, 3);
body.setTextureOffset( 46, 0);
body.addBox(5,-14,-39, 1, 7, 1);
body.setTextureOffset( 46, 0);
body.addBox(-6,-14,-39, 1, 7, 1);
body.setTextureOffset( 0, 166);
body.addBox(-6,-14,-39, 12, 1, 1);
body.setTextureOffset( 81, 129);
body.addBox(-2,-20,-37, 4, 1, 13);
}


function addPikachuToRenderType(renderer) {

var var0 = 0;
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
body.setTextureSize(64,33);
head.setTextureSize(64,33);
rLeg.setTextureSize(64,33);
lLeg.setTextureSize(64,33);
rArm.setTextureSize(64,33);
lArm.setTextureSize(64,33);
head.clear();
head.setTextureOffset(0, 0);
head.addBox(-4, 13.5, -4.3, 8, 7, 6,-0.5);

head.setTextureOffset(0, 13);
head.addBox(-3,10,-1.3,1,4,2);

head.setTextureOffset(6, 13);
head.addBox(2,10,-1.3,1,4,2);

head.setTextureOffset(0, 0);
head.addBox(-1.5, 17, -4, 3, 2, 1,0.2);
head.setRotationPoint(0,0,-8);

body.clear();
body.setTextureOffset( 0, 22);
body.addBox(-3.5, 14.5, -7, 7, 6, 5,0.1);  
body.setTextureOffset( 24, 19);
body.addBox(-4, 14, -2, 8, 7, 7,0);  

body.setTextureOffset(22, 0);
body.addBox(-0.5, 14.5, 5, 1, 1, 2);  

body.setTextureOffset( 28, 0);
body.addBox(-0.5, 13.5, 6, 1, 1, 2);

body.setTextureOffset( 36, 0);
body.addBox(-0.5, 11.5, 7, 1, 2, 4);

body.setTextureOffset( 28, 0);
body.addBox(-0.5, 8.5, 9, 1, 3, 6);

rArm.clear();
rArm.setTextureOffset(11,0);
rArm.addBox(1, 3, -5, 2, 6, 2);

rArm.setTextureOffset(11,0);
rArm.addBox(8, 7, 2, 2, 2, 2);
rArm.setTextureOffset(11,0);
rArm.addBox(8, 2, 0.2, 2, 5, 4);
rArm.setRotationPoint(0,15,0);
lArm.clear(); 
lArm.setTextureOffset(11,0);
lArm.addBox(-3, 3, -5, 2, 6, 2);

lArm.setTextureOffset(11,0);
lArm.addBox(-10, 7, 2, 2, 2, 2);
lArm.setTextureOffset(11,0);
lArm.addBox(-10, 2, 0.2, 2, 5, 4);//-para meter
lArm.setRotationPoint(0,15,0);

rLeg.clear(); 
lLeg.clear(); 
}

function addLaprasRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear().setTextureSize(256,128);
var body = model.getPart("body").clear().setTextureSize(256,128);
var rArm = model.getPart("rightArm").clear().setTextureSize(256,128);
var lArm = model.getPart("leftArm").clear().setTextureSize(256,128);
var rLeg = model.getPart("rightLeg").clear().setTextureSize(256,128);
var lLeg = model.getPart("leftLeg").clear().setTextureSize(256,128);
body.setTextureOffset( 0, 95);
body.addBox(-9,16,-8, 18, 8, 22);
body.setTextureOffset( 91, 83);
body.addBox(-3,-3,-10, 6, 25, 6);
body.setTextureOffset( 0, 61);
body.addBox(-10,14,-3, 20, 4, 22);
body.setTextureOffset( 64, 0);
body.addBox(9,22,-7, 10, 2, 5);
body.setTextureOffset( 64, 0);
body.addBox(-19,22,-7, 10, 2, 5);
body.setTextureOffset( 64, 0);
body.addBox(7,22,10, 10, 2, 5);
body.setTextureOffset( 64, 0);
body.addBox(-17,22,10, 10, 2, 5);
body.setTextureOffset( 100, 0);
body.addBox(-9,12,-2, 18, 2, 11);
body.setTextureOffset( 100, 0);
body.addBox(-9,13,5, 18, 1, 11);
body.setTextureOffset( 0, 0);
body.addBox(-7,18,14, 14, 6, 3);
body.setTextureOffset( 90, 26);
body.addBox(-1.5,19,17, 3, 5, 9);
body.setTextureOffset( 170, 0);
body.addBox(-3,-9,-12, 6, 7, 7);
body.setTextureOffset( 133, 31);
body.addBox(-3,-9,-17, 6, 9, 7);
body.setTextureOffset( 0, 31);
body.addBox(-3,-6,-20, 6, 6, 3);
body.setTextureOffset( 32, 23);
body.addBox(3,-12,-11, 1, 11, 5);
body.setTextureOffset( 32, 23);
body.addBox(-4,-12,-11, 1, 11, 5);
body.setTextureOffset( 0, 20);
body.addBox(-0.5,-12,-18, 1, 4, 2);
body.setTextureOffset( 27, 67);
body.addBox(-1,9,0, 3, 3, 3);
body.setTextureOffset( 27, 67);
body.addBox(4,10,0, 3, 3, 3);
body.setTextureOffset( 27, 67);
body.addBox(-7,10,0, 3, 3, 3);
body.setTextureOffset( 27, 67);
body.addBox(-1,11,7, 3, 3, 3);
body.setTextureOffset( 27, 67);
body.addBox(-7,11,7, 3, 3, 3);
body.setTextureOffset( 27, 67);
body.addBox(4,11,7, 3, 3, 3);
body.setTextureOffset( 27, 67);
body.addBox(-1,11,13, 3, 3, 3);
}

function addEeveeRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear().setTextureSize(128,64);
var body = model.getPart("body").clear().setTextureSize(128,64);
var rArm = model.getPart("rightArm").clear().setTextureSize(128,64);
var lArm = model.getPart("leftArm").clear().setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").clear().setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").clear().setTextureSize(128,64);
body.setTextureOffset( 72, 41,true);
body.addBox(-3,12,-6, 6, 6, 12);
body.setTextureOffset( 51, 0,true);
body.addBox(-3.5,10,4, 7, 6, 6);
body.setTextureOffset( 0, 27,true);
body.addBox(2,16,3, 2, 3, 4);
body.setTextureOffset( 0, 27,true);
body.addBox(-4,16,3, 2, 3, 4);
body.setTextureOffset( 34, 33,true);
body.addBox(-3,7,-9, 6, 6, 6);
body.setTextureOffset( 80, 0,true);
body.addBox(-4,11,-7, 8, 8, 7);
body.setTextureOffset( 7, 49,true);
body.addBox(2.5,18,-6, 2, 6, 2);
body.setTextureOffset( 7, 49,true);
body.addBox(-4.5,18,-6, 2, 6, 2);
body.setTextureOffset( 7, 49,true);
body.addBox(2,19,5.5, 2, 5, 2);
body.setTextureOffset( 7, 49,true);
body.addBox(-4,19,5.5, 2, 5, 2);
body.setTextureOffset( 0, 0,true);
body.addBox(-2,9,9, 4, 4, 5);
body.setTextureOffset( 0, 73,true);
body.addBox(2,0,-6, 7, 9, 1);
body.setTextureOffset( 0, 94,true);
body.addBox(-9,0,-6, 7, 9, 1);
body.setTextureOffset( 18, 35,true);
body.addBox(-1,7,13, 2, 3, 2);
body.setTextureOffset(0,40,true);
body.addBox(-1.5,11,-10, 3, 2, 1);
}



function addRattataRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear().setTextureSize(128,64);
var body = model.getPart("body").clear().setTextureSize(128,64);
var rArm = model.getPart("rightArm").clear().setTextureSize(128,64);
var lArm = model.getPart("leftArm").clear().setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").clear().setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").clear().setTextureSize(128,64);
body.setTextureOffset( 0, 0,true);
body.addBox(-2,16,-8, 4, 4, 4);
body.setTextureOffset(0,16,true);
body.addBox(-3,17,-5,6,4,8);
body.setTextureOffset(32,0,true);
body.addBox(-3,20,-5,2,4,2);
body.setTextureOffset(32,0,true);
body.addBox(1,20,-5,2,4,2);
body.setTextureOffset(32,0,true);
body.addBox(1,20,1,2,4,2);
body.setTextureOffset(32, 0,true);
body.addBox(-3,20,1,2,4,2);
body.setTextureOffset( 0, 34,true);
body.addBox(-1.5,18,-10,3,3,2);
body.setTextureOffset( 61,0,true);
body.addBox(-1,10,0,1,8,6);
body.setTextureOffset(0,47,true);
body.addBox(1,13,-6, 4,4,1);
body.setTextureOffset(0,55,true);
body.addBox(-5,13,-6,4,4,1);
}

function addSandshrewToRenderType(renderer) {

var var0 = 0;
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
head.clear();
head.setTextureOffset(0, 0);
head.addBox(-3, 13.5, -4.3, 6, 5, 6);

head.setTextureOffset(10, 11);
head.addBox(-2.8,12.8,-1.3,1,2,2);
head.setTextureOffset(16, 11);
head.addBox(1.8,12.8,-1.3,1,2,2);

head.setTextureOffset(0, 11);
head.addBox(-1.5, 15.5, -6.2, 3, 3, 2,0.2);
head.setRotationPoint(0,0,-8);

body.clear();
body.setTextureOffset( 24, 14);
body.addBox(-3.5, 14.5, -7, 7, 6, 5,0.1);  
body.setTextureOffset( 24, 0);
body.addBox(-4, 14, -2, 8, 7, 7,0);  

body.setTextureOffset(18, 0);
body.addBox(-1, 15, 8, 2, 2, 3,0.2);  
body.setTextureOffset(0, 16);
body.addBox(-2, 14.6, 5, 4, 4, 3,0.2);  


rArm.clear();
rArm.setTextureOffset(0,23);
rArm.addBox(1, 3, -5, 2, 6, 2);

rArm.setTextureOffset(0,27);
rArm.addBox(8, 7, 2, 2, 2, 2);
rArm.setTextureOffset(10,23);
rArm.addBox(8, 2, 0.2, 2, 5, 4);
rArm.setRotationPoint(0,15,0);
lArm.clear(); 
lArm.setTextureOffset(0,23);
lArm.addBox(-3, 3, -5, 2, 6, 2);

lArm.setTextureOffset(0,27);
lArm.addBox(-10, 7, 2, 2, 2, 2);
lArm.setTextureOffset(10,23);
lArm.addBox(-10, 2, 0.2, 2, 5, 4);//-para meter
lArm.setRotationPoint(0,15,0);

rLeg.clear(); 
lLeg.clear(); 
}




function addTangelaToRenderType(renderer) {

var var0 = 0;
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
body.setTextureSize(64,64);
head.setTextureSize(64,64);
rLeg.setTextureSize(64,64);
lLeg.setTextureSize(64,64);
rArm.setTextureSize(64,64);
lArm.setTextureSize(64,64);

head.clear();
body.clear();
body.setTextureOffset( 0, 16);
body.addBox(-3.5, 15, -3.5, 7, 7, 7, -0.2);  
body.setTextureOffset( 0, 0, true);
body.addBox(-4, 14.5, -4, 8, 8, 8,0);  

rArm.clear();
rArm.setTextureOffset(0,30);
rArm.addBox(1.5, 3, -2, 3, 1, 4);

rArm.setRotationPoint(0,20,0);

lArm.clear(); 
lArm.setTextureOffset(0,30);
lArm.addBox(-4.5, 3, -2, 3, 1, 4);

lArm.setRotationPoint(0,20,0);

rLeg.clear(); 
lLeg.clear(); 
}




function addRaichuToRenderType(renderer) {

var var0 = 0;
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

body.setTextureSize(64,64);
head.setTextureSize(64,64);
rLeg.setTextureSize(64,64);
lLeg.setTextureSize(64,64);
rArm.setTextureSize(64,64);
lArm.setTextureSize(64,64);

head.clear();
head.setTextureOffset(0, 0);
head.addBox(-4, 2, -5, 8, 8, 8, -1);

head.setTextureOffset(0, 16,true);
head.addBox(-7.8,-1,-0.5,5,5,1);
head.setTextureOffset(0, 22,true);
head.addBox(2.8,-1,-0.5,5,5,1);

head.setTextureOffset(0, 0);
head.addBox(-1.5, 5.9, -4.5, 3, 3, 1);
head.setRotationPoint(0,0,0);

body.clear();
body.setTextureOffset( 32, 0);
body.addBox(-3.5, 9, -3.5, 7, 6, 6,0); 
body.setTextureOffset( 32, 12);
body.addBox(-3.5, 13, -3.5, 7, 6, 6,0.4);  
body.setTextureOffset( 9, 14,true);
body.addBox(0, 9, 2.9, 1, 8, 12);  

rArm.clear();
rArm.setTextureOffset(24,0);
rArm.addBox(-0.5, -1, -5, 2, 2, 5);
rArm.setRotationPoint(0,11,0);

lArm.clear(); 
lArm.setTextureOffset(24,0);
lArm.addBox(-1.5, -1, -5, 2, 2, 5);
lArm.setRotationPoint(0,11,0);

rLeg.clear(); 
rLeg.setTextureOffset(0,34);
rLeg.addBox(-2.9, 3, -3, 2, 5, 5);
rLeg.setTextureOffset(8,0);
rLeg.addBox(-2.9, 8, -1, 2, 3, 2);
rLeg.setTextureOffset(27,3);
rLeg.addBox(-2.9, 10, -3, 2, 1, 2);

lLeg.clear(); 
lLeg.setTextureOffset(0,34);
lLeg.addBox(0.9, 3, -3, 2, 5, 5);
lLeg.setTextureOffset(8,0);
lLeg.addBox(0.9, 8, -1, 2, 3, 2);
lLeg.setTextureOffset(27,3);
lLeg.addBox(0.9, 10, -3, 2, 1, 2);
}

function addElectrodeRenderType(renderer)
{
var var2 = 0;
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
body.clear();
body.setTextureOffset(20, 0, true);
body.addBox(-5, 10, -5, 10, 10, 10, 3);
body.addBox(-5, 8.1, -5, 10, 10, 10, 2);
body.addBox(-5, 11.9, -5, 10, 10, 10, 2);
body.addBox(-6.9, 10, -5, 10, 10, 10, 2);
body.addBox(-3.1, 10, -5, 10, 10, 10, 2);
body.addBox(-5, 10, -3.1, 10, 10, 10, 2);
body.setTextureOffset(0, 0, true);
body.addBox(-5, 10, -6.9, 10, 10, 10, 2);
body.setTextureOffset(0, 10, true);
body.addBox(-5, 13, -9.01, 10, 10, 10, -1);
body.addBox(-2, 13, -9.01, 10, 10, 10, -1);
body.addBox(-8, 13, -9.01, 10, 10, 10, -1);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();

}



function addVoltorbRenderType(renderer)
{
var var2 = 0;
var model = renderer.getModel();

var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");

head.clear();
body.clear();
body.setTextureOffset(0, 0, true);
body.addBox(-5, 13, -6.5, 10, 10, 10, -1);
body.setTextureOffset(20, 0, true);
body.addBox(-5, 13, -5, 10, 10, 10, -0.3);
body.addBox(-5, 11.5, -5, 10, 10, 10, -1);
body.addBox(-5, 14.5, -5, 10, 10, 10, -1);
body.addBox(-3.5, 13, -5, 10, 10, 10, -1);
body.addBox(-6.5, 13, -5, 10, 10, 10, -1);
body.addBox(-5, 13, -3.5, 10, 10, 10, -1);
body.setTextureOffset(0, 10, true);
body.addBox(-5, 13.2, -6.3, 10, 10, 10, -1.1);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();

}

function addSquirtleRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//cabarazon 1
body.setTextureOffset(0, 27, true);
body.addBox(-5,9,-4,10, 11, 2);

//cabarazon 2
body.setTextureOffset(0, 47, true);
body.addBox(-4,9,-2,8,10,3);

//cabarazon 3
body.setTextureOffset(25, 52, true);
body.addBox(-4,9,-5,8, 10, 1);

//cola
body.setTextureOffset(47, 52, true);
body.addBox(-1.5,16,-2,3, 4, 7);

//cabeza
body.setTextureOffset(0, 0, true);
body.addBox(-2.5,4,-6,5, 5, 5);

//pies
body.setTextureOffset(35, 0, true);
body.addBox(-4,19,-5,2, 5, 2);
body.addBox(2,19,-5,2, 5, 2);

//brazos
body.setTextureOffset(58, 0, true);
body.addBox(4,11,-8,2, 2, 5);
body.addBox(-6,11,-8,2, 2, 5);
}

function addWartortleRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//
body.setTextureOffset(0, 27, true);
body.addBox(-5,7,-4,10, 13, 2);


//
body.setTextureOffset(0, 47, true);
body.addBox(-4.5,7,-2,9, 12, 4);

//
body.setTextureOffset(33, 35, true);
body.addBox(-4,8,-5,8, 11, 1);

//
body.setTextureOffset(0, 0, true);
body.addBox(-3.5,0,-6,7, 7, 7);

//
body.setTextureOffset(35, 0, true);
body.addBox(-5,19,-5,3, 5, 3);
body.addBox(2,19,-5,3, 5, 3);

//
body.setTextureOffset(58, 0, true);
body.addBox(4,8,-9,3, 3, 6);
body.addBox(-7,8,-9,3, 3, 6);

//
body.setTextureOffset(90, 0, true);
body.addBox(3.5,-4,-4,1, 7, 8);


//
body.setTextureOffset(90, 23, true);
body.addBox(-4.5,-4,-4,1, 7, 8);

//
body.setTextureOffset(54, 30, true);
body.addBox(0,4,2,1, 15, 15);
}

function addBlastoiseRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(256, 128);
var body = model.getPart("body").setTextureSize(256, 128);
var rArm = model.getPart("rightArm").setTextureSize(256, 128);
var lArm = model.getPart("leftArm").setTextureSize(256, 128);
var rLeg = model.getPart("rightLeg").setTextureSize(256, 128);
var lLeg = model.getPart("leftLeg").setTextureSize(256, 128);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
body.setTextureOffset( 0, 0);
body.addBox(-11,-12,-8, 23, 28, 16);
body.setTextureOffset( 83, 0);
body.addBox(-4,-19,-11, 10, 10, 9);
body.setTextureOffset( 126, 0);
body.addBox(-2.5,-15,-13, 7, 6, 2);
body.setTextureOffset( 0, 58);
body.addBox(-14,11,-4, 8, 13, 8);
body.setTextureOffset( 0, 58);
body.addBox(6,11,-4, 8, 13, 8);
body.setTextureOffset( 161, 0);
body.addBox(-12,-13,-1, 25, 30, 1);
body.setTextureOffset( 0, 0);
body.addBox(-5,-21,-7, 4, 4, 1);
body.setTextureOffset( 67, 2);
body.addBox(3,-21,-7, 4, 4, 1);
body.setTextureOffset( 53, 74);
body.addBox(7,-17,0, 6, 6, 6);
body.setTextureOffset( 53, 74);
body.addBox(-12,-17,0, 6, 6, 6);
body.setTextureOffset( 88, 97);
body.addBox(-11,-16,-6, 3, 3, 6);
body.setTextureOffset( 88, 97);
body.addBox(9,-16,-6, 3, 3, 6);
body.setTextureOffset( 121, 40);
body.addBox(-13,-17,-12, 5, 5, 6);
body.setTextureOffset( 121, 40);
body.addBox(9,-17,-12, 5, 5, 6);
body.setTextureOffset( 82, 48);
body.addBox(-3.5,11,6, 6, 6, 6);
body.setTextureOffset( 0, 88);
body.addBox(-15,-8,-16, 6, 6, 15);
body.setTextureOffset( 42, 100);
body.addBox(10,-8,-16, 6, 6, 15);
}


function addWeepinbellRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//
body.setTextureOffset(46, 0, true);
body.addBox(-5,14,-8,10, 10, 1);

//
body.setTextureOffset(0, 0, true);
body.addBox(-4,15,-7,8, 8, 14);

//
body.setTextureOffset(0,32,true);
body.addBox(-3.5,5,0,7,10,7);

//
body.setTextureOffset(0,0,true);
body.addBox(0.5,8,-1, 3, 3, 1);
body.addBox(-3.5,8,-1, 3, 3, 1);

//
body.setTextureOffset(73, 0,true);
body.addBox(-3,4,1, 6, 1, 5);

//
body.setTextureOffset(100, 0,true);
body.addBox(-1,0,3, 2, 4, 2);

//
body.setTextureOffset(54, 28,true);
body.addBox(-5,10,2, 1, 8, 14);

//
body.setTextureOffset(91, 28,true);
body.addBox(4,10,2, 1, 8, 14);
}

function addButterfreeRenderType(renderer)
{
var model = renderer.getModel();
var head = model.getPart("head").setTextureSize(128,64);
var body = model.getPart("body").setTextureSize(128,64);
var rArm = model.getPart("rightArm").setTextureSize(128,64);
var lArm = model.getPart("leftArm").setTextureSize(128,64);
var rLeg = model.getPart("rightLeg").setTextureSize(128,64);
var lLeg = model.getPart("leftLeg").setTextureSize(128,64);
rArm.clear();
lArm.clear();
rLeg.clear();
lLeg.clear();
body.clear();
head.clear();
//
body.setTextureOffset(0, 22, true);
body.addBox(-4,17,0,2, 6, 2);
body.addBox(2,17,0,2, 6, 2);

//
body.setTextureOffset(0, 37, true);
body.addBox(-3.5,10,-3,7, 7, 7);

//
body.setTextureOffset(0, 0, true);
body.addBox(-3.5,2,-3,7, 7, 7);

//
body.setTextureOffset(33, 0, true);
body.addBox(-4,3,-4,3, 3, 1);
body.addBox(1,3,-4,3, 3, 1);

//
body.setTextureOffset(46, 0, true);
body.addBox(-1.5,7,-4, 3, 2, 11);

//
body.setTextureOffset(64, 0, true);
body.addBox(-3,10,-5, 2, 2, 2);
body.addBox(1,10,-5, 2, 2, 2);

//
body.setTextureOffset(26, 18, true);
body.addBox(-3,9,-2, 6, 1, 6);

//
body.setTextureOffset(89, 0, true);
body.addBox(-2.5,-9, -1, 1, 11, 1);
body.addBox(1.5,-9,-1, 1, 11, 1);

//
body.setTextureOffset(35, 37, true);
body.addBox(-12,-1,4, 24, 20, 1);
}

function addGastlyRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 48, 15, true);
body.addBox(-5,7,-1, 1, 9, 8);
body.setTextureOffset( 31, 15, true);
body.addBox(2,7,-2, 1, 9, 8);
body.setTextureOffset( 40, 0, true);
body.addBox(-4,9,-3, 6, 7, 6);
body.setTextureOffset( 2, 9, true);
body.addBox(-3.5,10,3, 5, 5, 1);
body.setTextureOffset( 2, 1, true);
body.addBox(-3.5,10,-4, 5, 5, 1);
body.setTextureOffset( 27, 0, true);
body.addBox(2,10,-2.5, 1, 5, 5);
body.setTextureOffset( 27, 0, true);
body.addBox(-5,10,-2.5, 1, 5, 5);
body.setTextureOffset( 31, 15, true);
body.addBox(0,7,0, 1, 9, 8);
body.setTextureOffset( 31, 15, true);
body.addBox(-3,7,0, 1, 9, 8);
body.setTextureOffset( 42, 20, true);
body.addBox(-6,7,-3, 10, 11, 1);
body.setTextureOffset( 4, 22, true);
body.addBox(-3,11,-4.5, 1, 1, 1);
body.setTextureOffset( 4, 22, true);
body.addBox(0,11,-4.5, 1, 1, 1);
body.setTextureOffset( 11, 26, true);
body.addBox(-3,13,-4.5, 4, 2, 0);
}

function addHitmonleeRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 16, 4, true);
body.addBox(-4,-4,-2, 8, 18, 4);
body.setTextureOffset( 45, 16, true);
body.addBox(4,-0.5,-1, 2, 12, 2);
body.setTextureOffset( 45, 16, true);
body.addBox(-6,-0.5,-1, 2, 12, 2);
body.setTextureOffset( 0, 16, true);
body.addBox(-3,14,-1, 2, 10, 2);
body.setTextureOffset( 0, 16, true);
body.addBox(1,14,-1, 2, 10, 2);
body.setTextureOffset( 52, 0, true);
body.addBox(4,-2,-1.5, 3, 3, 3);
body.setTextureOffset( 52, 0, true);
body.addBox(-7,-2,-1.5, 3, 3, 3);
body.setTextureOffset( 52, 0, true);
body.addBox(-3.5,14,-1.5, 3, 3, 3);
body.setTextureOffset( 52, 0, true);
body.addBox(0.5,14,-1.5, 3, 3, 3);
}



function addWeedleRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 45, 0, true);
body.addBox(-2,15,-10.533334, 5, 5, 5);
body.setTextureOffset( 32, 36, true);
body.addBox(-0.5,22,4, 2, 2, 2);
body.setTextureOffset( 32, 42, true);
body.addBox(-0.5,21,5, 2, 2, 2);
body.setTextureOffset( 10, 0, true);
body.addBox(0,13,-9, 1, 2, 1);
body.setTextureOffset( 18, 0, true);
body.addBox(-0.5,18,-11, 2, 1, 1);
body.setTextureOffset( 26, 0, true);
body.addBox(-1.5,19,-7, 4, 4, 4);
body.setTextureOffset( 26, 10, true);
body.addBox(-1.5,20,-5, 4, 4, 4);
body.setTextureOffset( 29, 21, true);
body.addBox(-1,21,-1, 3, 3, 3);
body.setTextureOffset( 30, 30, true);
body.addBox(-1,22,2, 3, 2, 2);
body.setTextureOffset( 10, 0, true);
body.addBox(0,19,6, 1, 2, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(-1,21,-8, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(1,21,-8.2, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(-2,22,-7, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(-2,23,-5, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(-2,23,-2, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(-2,23,3, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(-2,23,0, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(2,22,-7, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(2,23,-5, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(2,23,-2, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(2,23,0, 1, 1, 1);
body.setTextureOffset( 0, 0, true);
body.addBox(2,23,3, 1, 1, 1);
}

function addRaticateRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 83, 0, true);
body.addBox(-3.5,11,-4, 6, 6, 7);
body.setTextureOffset( 54, 16, true);
body.addBox(-4,14,-2, 7, 9, 7);
body.setTextureOffset( 46, 2, true);
body.addBox(-4,18,-3, 2, 2, 2);
body.setTextureOffset( 46, 2, true);
body.addBox(1,18,-3, 2, 2, 2);
body.setTextureOffset( 20, 14, true);
body.addBox(0,23,-1, 2, 1, 4);
body.setTextureOffset( 20, 14, true);
body.addBox(-4,23,-1, 2, 1, 4);
body.setTextureOffset( 0, 0, true);
body.addBox(-3,23,-3, 0, 1, 2);
body.setTextureOffset( 0, 0, true);
body.addBox(-4,23,-3, 0, 1, 2);
body.setTextureOffset( 0, 0, true);
body.addBox(-2,23,-3, 0, 1, 2);
body.setTextureOffset( 0, 0, true);
body.addBox(0,23,-3, 0, 1, 2);
body.setTextureOffset( 0, 0, true);
body.addBox(1,23,-3, 0, 1, 2);
body.setTextureOffset( 0, 0, true);
body.addBox(2,23,-3, 0, 1, 2);
body.setTextureOffset( 36, 19, true);
body.addBox(-3,6,0, 0, 6, 7);
body.setTextureOffset( 36, 19, true);
body.addBox(2,6,0, 0, 6, 7);
body.setTextureOffset( 68, 0, true);
body.addBox(-2,13,-6, 3, 4, 2);
body.setTextureOffset( 41, 9, true);
body.addBox(-1.5,20,5, 2, 2, 2);
body.setTextureOffset( 33, 3, true);
body.addBox(-1,20,7, 1, 1, 2);
}

function addZubatRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 20, 0 ,true);
body.addBox(-1.5,9,-1, 3, 5, 2);
body.setTextureOffset( 0, 6 ,true);
body.addBox(1.5,8,0, 10, 6, 0);
body.setTextureOffset( 0, 0 ,true);
body.addBox(-11.5,8,0, 10, 6, 0);
body.setTextureOffset( 27, 8 ,true);
body.addBox(1,7,0, 3, 3, 0);
body.setTextureOffset( 20, 8 ,true);
body.addBox(-4,7,0, 3, 3, 0);
body.setTextureOffset( 0, 19 ,true);
body.addBox(1,14,-1, 0, 4, 1);
body.setTextureOffset( 0, 19 ,true);
body.addBox(-1,14,-1, 0, 4, 1);
}

function addVileplumeRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head").clear();
var body = model.getPart("body").clear();
var rArm = model.getPart("rightArm").clear();
var lArm = model.getPart("leftArm").clear();
var rLeg = model.getPart("rightLeg").clear();
var lLeg = model.getPart("leftLeg").clear();
body.setTextureOffset( 42, 0 ,true);
body.addBox(-0.5,17,-3, 4, 6, 6);
body.setTextureOffset( 26, 13 ,true);
body.addBox(1.5,23,1, 3, 1, 1);
body.setTextureOffset( 26, 16 ,true);
body.addBox(1.5,23,-2, 3, 1, 1);
body.setTextureOffset( 5, 0 ,true);
body.addBox(-3,16,-4.5, 9, 1, 9);
body.setTextureOffset( 42, 14 ,true);
body.addBox(-1,15,-2.5, 5, 1, 5);
body.setTextureOffset( 15, 27 ,true);
body.addBox(1,19,3, 1, 3, 1);
body.setTextureOffset( 20, 27 ,true);
body.addBox(1,19,-4, 1, 3, 1);
}

//==========================
///------- Interfaz --------
//==========================


var SelectPokemon = 0;

var PokemonSelector = {
	slotNumber:"captured1",
		defineSlot:function(){
				this.Pokeball = null;
				this.Pokemon =null;
				var that = this;
				this.show=function(){
						var that = this;
						this.widget = CreateLayoutView(new android.widget.RelativeLayout(ctx),0,0,PokemonSelector.size,PokemonSelector.size);
						this.pokeball = CreateLayoutView(new android.widget.ImageView(ctx),0,0,PokemonSelector.size,PokemonSelector.size);this.pokeball.setRotation(-45);
						this.slotState = CreateLayoutView(new android.widget.ImageView(ctx),0,0,PokemonSelector.size,PokemonSelector.size);
						this.pokemon = CreateLayoutView(new android.widget.ImageView(ctx),PokemonSelector.size*0.05,PokemonSelector.size*0.05,PokemonSelector.size*0.9,PokemonSelector.size*0.9);
						this.widget.setClickable(true);
						this.widget.addView(this.slotState);
						this.widget.addView(this.pokeball);
						this.widget.addView(this.pokemon);
						return this.widget;
				};
				this.setPokeball=function(newPokeball){
						this.Pokeball = newPokeball;
						this.pokeball.setBackgroundDrawable(BitmapUtils.getDrawable(BitmapUtils.getFromTexture(newPokeball.image)));
				};
				this.setPokemon = function(newPokemon){
						this.Pokemon=newPokemon;
						this.pokemon.setBackgroundDrawable(BitmapUtils.ultimateDrawable(newPokemon.sprite,0,4,32,28,PokemonSelector.size*0.8,PokemonSelector.size*0.8));
				};
				this.setSlotState = function(newState){
					switch(newState){
							case "selected":this.slotState.setBackgroundDrawable(Background.ring(PokemonSelector.size,30,android.graphics.Color.parseColor("#1BB5FF")));break;
							case "released":this.slotState.setBackgroundDrawable(null);break;
							case "selected_released":this.slotState.setBackgroundDrawable(Background.ring(PokemonSelector.size,30,android.graphics.Color.parseColor("#1BB5FF")));break;
							case "fainted":this.slotState.setBackgroundDrawable(Background.ring(PokemonSelector.size,30,android.graphics.Color.parseColor("#ff0000")));break;
					}
				};
				this.setAvailable = function(available){
						if(available===false)
								this.pokeball.setBackgroundDrawable(BitmapUtils.getDrawable(BitmapUtils.getFromTexture("gui/pokemon_selector/base.png")));
						else{
								var cMatrix = new android.graphics.ColorMatrix();cMatrix.setSaturation(0);
								this.pokeball.setBackgroundDrawable(BitmapUtils.getDrawable(BitmapUtils.getFromTexture("gui/pokemon_selector/base.png")));
								this.pokeball.getBackground().setColorFilter(new android.graphics.ColorMatrixColorFilter(cMatrix));
						}
				};
		},
		init:function(){
			try{
				this.size = Math.min(dp(22.5),ScreenHeight()/8);
				this.showAnimation = new android.view.animation.TranslateAnimation(this.size,0,0,0);
				this.showAnimation.setDuration(300);
				this.hideAnimation = new android.view.animation.TranslateAnimation(0,this.size,0,0);
				this.hideAnimation.setDuration(300);			
				this.layout = new android.widget.LinearLayout(ctx);	
				this.layout.setBackgroundDrawable(BitmapUtils.ultimateDrawable("gui/pokemon_selector/dock.png",0,0,45,279,this.size,this.size*6.2));
				this.layout.setOrientation(android.widget.LinearLayout.VERTICAL);
				this.layout.setPadding(0,this.size*0.1,0,this.size*0.1);
				this.widget = new android.widget.RelativeLayout(ctx);		
				this.widget.addView(this.layout);
				this.window = new android.widget.PopupWindow(this.widget,this.size,this.size*6.2);	
				this.slot=[];
				this.slot[1] = new this.defineSlot();this.layout.addView(this.slot[1].show());this.slot[1].setAvailable();this.slot[1].setSlotState("selected");
				this.slot[2] = new this.defineSlot();this.layout.addView(this.slot[2].show());this.slot[2].setAvailable();
				this.slot[3] = new this.defineSlot();this.layout.addView(this.slot[3].show());this.slot[3].setAvailable();
				this.slot[4] = new this.defineSlot();this.layout.addView(this.slot[4].show());this.slot[4].setAvailable();
				this.slot[5] = new this.defineSlot();this.layout.addView(this.slot[5].show());this.slot[5].setAvailable();
				this.slot[6] = new this.defineSlot();this.layout.addView(this.slot[6].show());this.slot[6].setAvailable();
				if(PokeBlock.PokemonInventory.captured1.name!=""){this.slot[1].setPokemon(PokeBlock.PokemonInventory.captured1);this.slot[1].setAvailable(false);this.slot[1].setPokeball(eval(PokeBlock.PokemonInventory.captured1.pokeball));}
				if(PokeBlock.PokemonInventory.captured2.name!=""){this.slot[2].setPokemon(PokeBlock.PokemonInventory.captured2);this.slot[2].setAvailable(false);this.slot[2].setPokeball(eval(PokeBlock.PokemonInventory.captured2.pokeball));}
				if(PokeBlock.PokemonInventory.captured3.name!=""){this.slot[3].setPokemon(PokeBlock.PokemonInventory.captured3);this.slot[3].setAvailable(false);this.slot[3].setPokeball(eval(PokeBlock.PokemonInventory.captured3.pokeball));}
				if(PokeBlock.PokemonInventory.captured4.name!=""){this.slot[4].setPokemon(PokeBlock.PokemonInventory.captured4);this.slot[4].setAvailable(false);this.slot[4].setPokeball(eval(PokeBlock.PokemonInventory.captured4.pokeball));}	
				if(PokeBlock.PokemonInventory.captured5.name!=""){this.slot[5].setPokemon(PokeBlock.PokemonInventory.captured5);this.slot[5].setAvailable(false);this.slot[5].setPokeball(eval(PokeBlock.PokemonInventory.captured5.pokeball));}
				if(PokeBlock.PokemonInventory.captured6.name!=""){this.slot[6].setPokemon(PokeBlock.PokemonInventory.captured6);this.slot[6].setAvailable(false);this.slot[6].setPokeball(eval(PokeBlock.PokemonInventory.captured6.pokeball));}	


				
				AddClickFunction(this.slot[1].pokemon,function(){
						UiThread(function(){
							if(this.slotNumber!=="captured1"){
								this.slotNumber="captured1";
								if(PokeBlock.PokemonInventory.captured1.name!==""){
									SelectPokemon = 1;
									PokemonSelector.slot[1].setSlotState("selected");
									PokemonSelector.slot[2].setSlotState("released");
									PokemonSelector.slot[3].setSlotState("released");
									PokemonSelector.slot[4].setSlotState("released");
									PokemonSelector.slot[5].setSlotState("released");
									PokemonSelector.slot[6].setSlotState("released");
								}
							}
						})
					});
					AddLongClickFunction(this.slot[1].pokemon,function(){
						UiThread(function(){
							if(this.slotNumber!=="captured1"){
								this.slotNumber="captured1";
								if(PokemonInventory.captured1.name!==""){
									SelectPokemon = 1;
									PokemonSelector.slot[1].setSlotState("selected");
									PokemonSelector.slot[2].setSlotState("released");
									PokemonSelector.slot[3].setSlotState("released");
									PokemonSelector.slot[4].setSlotState("released");
									PokemonSelector.slot[5].setSlotState("released");
									PokemonSelector.slot[6].setSlotState("released");
								}
							}
						})
					});
					AddClickFunction(this.slot[2].pokemon,function(){
						UiThread(function(){
							if(this.slotNumber!=="captured2"){
								this.slotNumber="captured2";
								if(PokeBlock.PokemonInventory.captured2.name!==""){
						SelectPokemon = 2;
						PokemonSelector.slot[1].setSlotState("released");
						PokemonSelector.slot[2].setSlotState("selected");
						PokemonSelector.slot[3].setSlotState("released");
						PokemonSelector.slot[4].setSlotState("released");
						PokemonSelector.slot[5].setSlotState("released");
						PokemonSelector.slot[6].setSlotState("released");		
								}
							}								
						})			
					});
					AddLongClickFunction(this.slot[2].pokemon,function(){
						UiThread(function(){
							if(this.slotNumber!=="captured1"){
								this.slotNumber="captured1";
								if(PokeBlock.PokemonInventory.captured1.name!==""){
									SelectPokemon = 2;
									PokemonSelector.slot[1].setSlotState("selected");
									PokemonSelector.slot[2].setSlotState("released");
									PokemonSelector.slot[3].setSlotState("released");
									PokemonSelector.slot[4].setSlotState("released");
									PokemonSelector.slot[5].setSlotState("released");
									PokemonSelector.slot[6].setSlotState("released");
								}
							}
						})
					});
					AddClickFunction(this.slot[3].pokemon,function(){
						UiThread(function(){
							if(this.slotNumber!=="captured3"){
								this.slotNumber="captured3";
								if(PokeBlock.PokemonInventory.captured3.name!==""){
						SelectPokemon = 3;
						PokemonSelector.slot[1].setSlotState("released");
						PokemonSelector.slot[2].setSlotState("released");
						PokemonSelector.slot[3].setSlotState("selected");
						PokemonSelector.slot[4].setSlotState("released");
						PokemonSelector.slot[5].setSlotState("released");
						PokemonSelector.slot[6].setSlotState("released");		
								}
							}								
						})			
					});
					AddLongClickFunction(this.slot[3].pokemon,function(){
						UiThread(function(){
							if(this.slotNumber!=="captured1"){
								this.slotNumber="captured1";
								if(PokeBlock.PokemonInventory.captured1.name!==""){
									SelectPokemon = 3;
									PokemonSelector.slot[1].setSlotState("selected");
									PokemonSelector.slot[2].setSlotState("released");
									PokemonSelector.slot[3].setSlotState("released");
									PokemonSelector.slot[4].setSlotState("released");
									PokemonSelector.slot[5].setSlotState("released");
									PokemonSelector.slot[6].setSlotState("released");
								}
							}
						})
					});
					AddClickFunction(this.slot[4].pokemon,function(){
						UiThread(function(){
							if(this.slotNumber!=="captured4"){
								this.slotNumber="captured4";
								if(PokeBlock.PokemonInventory.captured4.name!==""){	
						SelectPokemon = 4;
						PokemonSelector.slot[1].setSlotState("released");
						PokemonSelector.slot[2].setSlotState("released");
						PokemonSelector.slot[3].setSlotState("released");
						PokemonSelector.slot[4].setSlotState("selected");
						PokemonSelector.slot[5].setSlotState("released");
						PokemonSelector.slot[6].setSlotState("released");	
								}
							}								
						})			
					});	
					AddLongClickFunction(this.slot[4].pokemon,function(){
						UiThread(function(){
							if(this.slotNumber!=="captured1"){
								this.slotNumber="captured1";
								if(PokeBlock.PokemonInventory.captured1.name!==""){
									SelectPokemon = 4;
									PokemonSelector.slot[1].setSlotState("selected");
									PokemonSelector.slot[2].setSlotState("released");
									PokemonSelector.slot[3].setSlotState("released");
									PokemonSelector.slot[4].setSlotState("released");
									PokemonSelector.slot[5].setSlotState("released");
									PokemonSelector.slot[6].setSlotState("released");
								}
							}
						})
					});
					AddClickFunction(this.slot[5].pokemon,function(){
						UiThread(function(){
							if(this.slotNumber!=="captured5"){
								this.slotNumber="captured5";
								if(PokeBlock.PokemonInventory.captured5.name!==""){	
						SelectPokemon = 5;
						PokemonSelector.slot[1].setSlotState("released");
						PokemonSelector.slot[2].setSlotState("released");
						PokemonSelector.slot[3].setSlotState("released");
						PokemonSelector.slot[4].setSlotState("released");
						PokemonSelector.slot[5].setSlotState("selected");
						PokemonSelector.slot[6].setSlotState("released");			
								}
							}								
						})			
					});
					AddLongClickFunction(this.slot[5].pokemon,function(){
						UiThread(function(){
							if(this.slotNumber!=="captured1"){
								this.slotNumber="captured1";
								if(PokeBlock.PokemonInventory.captured1.name!==""){
									SelectPokemon = 5;
									PokemonSelector.slot[1].setSlotState("selected");
									PokemonSelector.slot[2].setSlotState("released");
									PokemonSelector.slot[3].setSlotState("released");
									PokemonSelector.slot[4].setSlotState("released");
									PokemonSelector.slot[5].setSlotState("released");
									PokemonSelector.slot[6].setSlotState("released");
								}
							}
						})
					});
					AddClickFunction(this.slot[6].pokemon,function(){
						UiThread(function(){
							if(this.slotNumber!=="captured6"){
								this.slotNumber="captured6";
								if(PokeBlock.PokemonInventory.captured6.name!==""){	
						SelectPokemon = 6;
						PokemonSelector.slot[1].setSlotState("released");
						PokemonSelector.slot[2].setSlotState("released");
						PokemonSelector.slot[3].setSlotState("released");
						PokemonSelector.slot[4].setSlotState("released");
						PokemonSelector.slot[5].setSlotState("released");
						PokemonSelector.slot[6].setSlotState("selected");		
								}
							}								
						})			
					});
					AddLongClickFunction(this.slot[6].pokemon,function(){
						UiThread(function(){
							if(this.slotNumber!=="captured1"){
								this.slotNumber="captured1";
								if(PokeBlock.PokemonInventory.captured1.name!==""){
									SelectPokemon = 6;
									PokemonSelector.slot[1].setSlotState("selected");
									PokemonSelector.slot[2].setSlotState("released");
									PokemonSelector.slot[3].setSlotState("released");
									PokemonSelector.slot[4].setSlotState("released");
									PokemonSelector.slot[5].setSlotState("released");
									PokemonSelector.slot[6].setSlotState("released");
									Pixelmon.startSpawnBattle(5);
								}
							}
						})
					});
			}catch(err){
				print(err);
				PokeBlock.System.saveFile("/sdcard/games/com.mojang/PokeBlock/data/ModPE["+err.lineNumber+"]_error.txt",err);
			}

		},
		show:function(){
				UiThread(function(){
						if(PokemonSelector.showed===false){						
								PokemonSelector.window.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.CENTER,0,dp(-8));
								PokemonSelector.layout.startAnimation(PokemonSelector.showAnimation);
								new android.os.Handler().postDelayed(function(){PokemonSelector.showed=true;},300);
						}
				});
		},
		hide:function(){
				UiThread(function(){
						if(PokemonSelector.showed===true){
								PokemonSelector.layout.startAnimation(PokemonSelector.hideAnimation);						
								new android.os.Handler().postDelayed(function(){PokemonSelector.window.dismiss();PokemonSelector.showed=false;},300);
						}
				});
		},showed:false
};

var PixelmonInventory = {
		init:function(){
			try{
				this.widget = new android.widget.RelativeLayout(ctx);
				this.window = new android.widget.PopupWindow(this.widget,ScreenWidth(),ScreenHeight());
				this.window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(144,0,0,0)));		
				this.body = CreateLayoutView(new android.widget.RelativeLayout(ctx),dp(35),dp(8),ScreenWidth()-dp(43),ScreenHeight()-dp(16));
				this.body.setBackgroundDrawable(BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",34,43,14,14).getBitmap(),dp(3),dp(3),dp(8),dp(8),ScreenWidth()-dp(43),ScreenHeight()-dp(16)))
				
				this.exitTab = CreateLayoutView(new android.widget.RelativeLayout(ctx),dp(8),dp(8),dp(30),dp(30));
				this.exitTab.setBackgroundDrawable(BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",49,43,14,14).getBitmap(),dp(3),dp(3),dp(8),dp(8),dp(30),dp(30)));
				this.exitTab.addView(ModPEGUI.imageButton(BitmapUtils.ultimateDrawable("gui/spritesheet.png",60,0,18,18,dp(19),dp(19)),BitmapUtils.ultimateDrawable("gui/spritesheet.png",78,0,18,18,dp(19),dp(19)),dp(5),dp(6),dp(19),dp(19),function(){PixelmonInventory.hide();}));
				
				this.inventoryTab = CreateLayoutView(new android.widget.RelativeLayout(ctx),dp(8),dp(41),dp(30),dp(30));
				this.inventoryTab.setBackgroundDrawable(BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",49,43,14,14).getBitmap(),dp(3),dp(3),dp(8),dp(8),dp(30),dp(30)));
				this.inventoryTab.addView(ModPEGUI.imageButton(Background.itemIcon("pokeball",0,dp(20)),Background.itemIcon("pokeball",0),dp(5),dp(5),dp(20),dp(20)));
				
				this.missionsTab = CreateLayoutView(new android.widget.RelativeLayout(ctx),dp(8),dp(74),dp(30),dp(30));
				this.missionsTab.setBackgroundDrawable(BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",49,43,14,14).getBitmap(),dp(3),dp(3),dp(8),dp(8),dp(30),dp(30)));
				this.missionsTab.addView(ModPEGUI.imageButton(Background.itemIcon("map_filled",0,dp(20)),Background.itemIcon("map_filled",0,dp(20)),dp(5),dp(5),dp(20),dp(20)));
				
				this.horizontalSlots = Math.floor((ScreenWidth()-dp(55))*0.66/dp(26));
				this.itemsDisplay = CreateLayoutView(new android.widget.ScrollView(ctx),dp(6),dp(6),(ScreenWidth()-dp(43))*0.66-dp(12),ScreenHeight()-dp(28));			
				this.itemsDisplay.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.rgb(49,49,49)));		
				this.itemsDisplay.setPadding(((ScreenWidth()-dp(43))*0.66-dp(12)-this.horizontalSlots*dp(26))/2,dp(6),((ScreenWidth()-dp(43))*0.66-dp(12)-this.horizontalSlots*dp(26))/2,dp(6));		
				this.itemsDisplay.setOverScrollMode(android.view.View.OVER_SCROLL_NEVER);					
				this.itemsDisplay.setVerticalScrollBarEnabled(false);		
				this.slots_frame = new android.widget.RelativeLayout(ctx);
				for(let i=0;i<36;i++){
						var slot = CreateLayoutView(new android.widget.RelativeLayout(ctx),dp(26*(i%this.horizontalSlots)),dp(26*Math.floor(i/this.horizontalSlots)),dp(26),dp(26));
						slot.setBackgroundDrawable(BitmapUtils.ultimateDrawable("gui/gui.png",200,46,16,16,dp(26),dp(26)));
						this.slots_frame.addView(slot);
				}
				this.itemsDisplay.addView(this.slots_frame);
				this.body.addView(this.itemsDisplay);		
				
				for(let i=0;i<12;i++){					
						this.slot = CreateLayoutView(new android.widget.ImageView(ctx),(ScreenWidth()-dp(43))*0.8-dp(17)+dp(22*(i%2)),ScreenHeight()/2-dp(73)+dp(22*Math.floor(i/2)),dp(20),dp(20));
						this.slot.setBackgroundDrawable(BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",0,32,8,8).getBitmap(),dp(2),dp(2),dp(4),dp(4),dp(20),dp(20)));
						this.body.addView(this.slot);
				}
				
				this.widget.addView(this.missionsTab);
				this.widget.addView(this.body);
				this.widget.addView(this.exitTab);
				this.widget.addView(this.inventoryTab);
			
			}catch(err){
				print(err);
				PokeBlock.System.saveFile("/sdcard/games/com.mojang/PokeBlock/data/ModPE["+err.lineNumber+"]_error.txt",err);
			}
				
		},
		show:function(){
				UiThread(function(){
						if(PixelmonInventory.showed===false){
								PixelmonInventory.window.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.CENTER,0,0);
								PixelmonInventory.showed = true;
						}
				});
		},
		hide:function(){
				UiThread(function(){
						if(PixelmonInventory.showed===true){
								PixelmonInventory.window.dismiss();
								PixelmonInventory.showed = false;
						}
				});
		},showed:false
};


var StarterScreen = {
		createButton:function(x,y,sprite,name,action){
				var unpressed = Background.starterButton(sprite,"unpressed");//BitmapUtils.ultimateDrawable("gui/starter_screen/starter_buttons.png",0,0,144,56);
				var pressed = Background.starterButton(sprite,"pressed");//BitmapUtils.ultimateDrawable("gui/starter_screen/starter_buttons.png",0,56,144,56);
				var button = CreateLayoutView(new android.widget.Button(ctx),x,y,dp(72),dp(28));
				button.setBackgroundDrawable(unpressed);
				button.setGravity(android.view.Gravity.CENTER);
				button.setPadding(dp(16),dp(1),dp(2),0);		
				MinecraftText(button,name,false,dp(5.5));;
				button.setTextColor(android.graphics.Color.BLACK);
				button.setOnTouchListener(new android.view.View.OnTouchListener({
						onTouch:function(view,event){
								switch(event.getAction()){
										case android.view.MotionEvent.ACTION_DOWN:view.setBackgroundDrawable(pressed);view.setTextColor(android.graphics.Color.WHITE);break;
										case android.view.MotionEvent.ACTION_MOVE:if(event.getX()<0||event.getY()<0||event.getX()>dp(72)||event.getY()>dp(28)){view.setBackgroundDrawable(unpressed);view.setTextColor(android.graphics.Color.BLACK);var current = true;}else if(!current){view.setTextColor(android.graphics.Color.WHITE);view.setBackgroundDrawable(pressed);}break;
										case android.view.MotionEvent.ACTION_UP:view.setTextColor(android.graphics.Color.BLACK);view.setBackgroundDrawable(unpressed);if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>(dp(72))||event.getY()>dp(28))){Level.playSoundEnt(Player.getEntity(),"random.click");if(typeof action==="function")action();}var current = false;
										case android.view.MotionEvent.ACTION_UP:view.setTextColor(android.graphics.Color.BLACK);view.setBackgroundDrawable(unpressed);if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>(dp(72))||event.getY()>dp(28))){Level.playSoundEnt(Player.getEntity(),"random.click");}var current = false;
								}return false;
						}
				}));return button;
		},
		init:function(){
			try{
				this.widget = new android.widget.RelativeLayout(ctx);
				this.window = new android.widget.PopupWindow(this.widget,ScreenWidth(),ScreenHeight());
				this.window.setBackgroundDrawable(BitmapUtils.getDrawable(BitmapUtils.getFromTexture("gui/starter_screen/starter_background.png")));			
				this.message = CreateLayoutView(new android.widget.TextView(ctx),0,ScreenHeight()/4,ScreenWidth(),android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
				this.message.setGravity(android.view.Gravity.CENTER);
				this.message.setPadding(dp(4),dp(1),dp(4),dp(1));
				this.message.setLineSpacing(dp(2),1);
				MinecraftText(this.message,"§fWelcome to the world of Pixelmon! Thank you for installig this mod!\nNow, please pick your desired starter Pokémon!",true,dp(7));			
				this.starter1 = this.createButton(ScreenWidth()/2-dp(112),ScreenHeight()/2,"sprites/Bulbasaur.png","Bulbasaur",function(){
						PokemonSelector.slot[1].setAvailable(false);
						PokemonSelector.slot[1].setPokemon(Pokemon.Bulbasaur);
						PokeBlock.PokemonInventory.captured1.name=Pokemon.Bulbasaur.name;	
						PokeBlock.PokemonInventory.captured1.level=5;
						PokeBlock.PokemonInventory.captured1.hp=20;
						PokeBlock.PokemonInventory.captured1.exp=0;
						PokeBlock.PokemonInventory.captured1.attacks=Pokemon.Bulbasaur.attacks;
						PokeBlock.PokemonInventory.captured1.type=Pokemon.Bulbasaur.type;
						PokeBlock.PokemonInventory.captured1.render=Pokemon.Bulbasaur.renderType;
						PokeBlock.PokemonInventory.captured1.skin=Pokemon.Bulbasaur.skin;
						PokeBlock.PokemonInventory.captured1.enabled=true;
						PokeBlock.PokemonInventory.captured1.spawned=false;
						PokeBlock.PokemonInventory.captured1.evolution=Pokemon.Bulbasaur.evolution;
						PokeBlock.PokemonInventory.captured1.sprite=Pokemon.Bulbasaur.sprite;
						PokeBlock.PokemonInventory.captured1.pokeball="Pokeball.base";
						StarterScreen.hide();
						PokeBlockButton.show();
						Pixelmon.saveJSON("pokemondata/pkm_captured1.json",PokeBlock.PokemonInventory.captured1);
				});
				this.starter2 = this.createButton(ScreenWidth()/2-dp(36),ScreenHeight()/2,"sprites/Squirtle.png","Squirtle", function(){
						PokemonSelector.slot[1].setAvailable(false);
						PokemonSelector.slot[1].setPokemon(Pokemon.Squirtle);
						PokeBlock.PokemonInventory.captured1.name=Pokemon.Squirtle.name;	
						PokeBlock.PokemonInventory.captured1.level=5;
						PokeBlock.PokemonInventory.captured1.hp=20;
						PokeBlock.PokemonInventory.captured1.exp=0;
						PokeBlock.PokemonInventory.captured1.attacks=Pokemon.Squirtle.attacks;
						PokeBlock.PokemonInventory.captured1.type=Pokemon.Squirtle.type;
						PokeBlock.PokemonInventory.captured1.render=Pokemon.Squirtle.renderType;
						PokeBlock.PokemonInventory.captured1.skin=Pokemon.Squirtle.skin;
						PokeBlock.PokemonInventory.captured1.enabled=true;
						PokeBlock.PokemonInventory.captured1.spawned=false;
						PokeBlock.PokemonInventory.captured1.evolution=Pokemon.Squirtle.evolution;
						PokeBlock.PokemonInventory.captured1.sprite=Pokemon.Squirtle.sprite;
						PokeBlock.PokemonInventory.captured1.pokeball="Pokeball.base";
						StarterScreen.hide();
						PokeBlockButton.show();
				});
				this.starter3 = this.createButton(ScreenWidth()/2+dp(40),ScreenHeight()/2,"sprites/Charmander.png","Charmander", function(){
						PokemonSelector.slot[1].setAvailable(false);
						PokemonSelector.slot[1].setPokemon(Pokemon.Charmander);
						PokeBlock.PokemonInventory.captured1.name=Pokemon.Charmander.name;	
						PokeBlock.PokemonInventory.captured1.level=5;
						PokeBlock.PokemonInventory.captured1.hp=20;
						PokeBlock.PokemonInventory.captured1.exp=0;
						PokeBlock.PokemonInventory.captured1.attacks=Pokemon.Charmander.attacks;
						PokeBlock.PokemonInventory.captured1.type=Pokemon.Charmander.type;
						PokeBlock.PokemonInventory.captured1.render=Pokemon.Charmander.renderType;
						PokeBlock.PokemonInventory.captured1.skin=Pokemon.Charmander.skin;
						PokeBlock.PokemonInventory.captured1.enabled=true;
						PokeBlock.PokemonInventory.captured1.spawned=false;
						PokeBlock.PokemonInventory.captured1.evolution=Pokemon.Charmander.evolution;
						PokeBlock.PokemonInventory.captured1.sprite=Pokemon.Charmander.sprite;
						PokeBlock.PokemonInventory.captured1.pokeball="Pokeball.base";
						StarterScreen.hide();
						PokeBlockButton.show();
				});			
				this.widget.addView(this.starter1);
				this.widget.addView(this.starter2);
				this.widget.addView(this.starter3);
				this.widget.addView(this.message);
			
			}catch(err){
				print(err);
				PokeBlock.System.saveFile("/sdcard/games/com.mojang/PokeBlock/data/ModPE["+err.lineNumber+"]_error.txt",err);
			}

		},
		show:function(){
				UiThread(function(){
						if(StarterScreen.showed===false){
								StarterScreen.window.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.TOP,0,dp(22));
								StarterScreen.showed = true;
						}
				});
		},
		hide:function(){
				UiThread(function(){
						if(StarterScreen.showed===true){
								StarterScreen.window.dismiss();
								StarterScreen.showed = false;
						}
				});
		},showed:false
};


var PokeBlockButton = {
		init:function(){
				this.widget = ModPEGUI.minecraftButton("P",0,0,dp(20),dp(20),function(){
						if(PokemonSelector.showed===true&&PixelmonInventory.showed===false)
								PokemonSelector.hide();
						else if(PokemonSelector.showed===false&&PixelmonInventory.showed===false)
								PokemonSelector.show();
				});
				AddLongClickFunction(this.widget,function(){
						PixelmonInventory.show();
				});
				this.window = new android.widget.PopupWindow(this.widget,dp(20),dp(20));
		},
		show:function(){
				UiThread(function(){
						if(PokeBlockButton.showed===false){
								PokeBlockButton.window.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.BOTTOM,0,0)
								PokeBlockButton.showed = true;
						}
				});
		},
		hide:function(){
				UiThread(function(){
						if(PokeBlockButton.showed===true){
								PokeBlockButton.window.dismiss();
								PokeBlockButton.showed = false;
						}
				});
		},showed:false
};


///# GUI Utils #///
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var MinecraftFont = android.graphics.Typeface.createFromFile("/sdcard/games/com.mojang/minecraft.ttf");

//@Desno365's Immersive Mode Support
function ScreenWidth(){
		if(android.os.Build.VERSION.SDK_INT>=17){
				var uiFlags = ctx.getWindow().getDecorView().getSystemUiVisibility();
				if((uiFlags&android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION)!==0){
						var metrics = new android.util.DisplayMetrics();
						ctx.getWindowManager().getDefaultDisplay().getRealMetrics(metrics);
						var realWidth = metrics.widthPixels;
						var realHeight = metrics.heightPixels;
						if(realHeight>realWidth){
								var x = realHeight;
								realHeight = realWidth;
								realWidth = x;								
						}return realWidth;
				}else{
						return ctx.getScreenWidth();
				}
		}else{
				return ctx.getScreenWidth();
		}
}
function ScreenHeight(){
		if(android.os.Build.VERSION.SDK_INT>=17){
				var uiFlags = ctx.getWindow().getDecorView().getSystemUiVisibility();
				if((uiFlags&android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION)!==0){
						var metrics = new android.util.DisplayMetrics();
						ctx.getWindowManager().getDefaultDisplay().getRealMetrics(metrics);
						var realWidth = metrics.widthPixels;
						var realHeight = metrics.heightPixels;
						if(realHeight>realWidth){
								var x = realHeight;
								realHeight = realWidth;
								realWidth = x;								
						}return realHeight;
				}else{
						return ctx.getScreenHeight();
				}
		}else{
				return ctx.getScreenHeight();
		}
}
function UiThread(functionToRun){
		ctx.runOnUiThread(new java.lang.Runnable(){
				run:function(){
						try{
								functionToRun();
						}catch(e){clientMessage("Error: "+e);}
				}
		});
}
function AddTouchFunction(myView,pressAction,unpressAction){
		myView.setOnTouchListener(new android.view.View.OnTouchListener(){
				onTouch:function(v,event){
						switch(event.getAction()){
								case 0:pressAction();break;
								case 1:unpressAction();break;
						}return false;
				}
		});
}
function AddClickFunction(myView,clickAction){
		myView.setOnClickListener(new android.view.View.OnClickListener(){
				onClick:function(v){
						clickAction();
				}
		});
}
function AddLongClickFunction(myView,clickAction){
		myView.setOnLongClickListener(new android.view.View.OnLongClickListener(){
				onLongClick:function(v,t){
						clickAction();
						return true;
				}
		});
}
function MinecraftText(textView,text,shadow,textSize){
		var colors = [["\n","<br/>"],["§l","</b><b>"],["§m","</del><del>"],["§n","</ins><ins>"],["§o","</i><i>"],["§r","</font>"],["§0","</font><font color=#000000>"],["§1","</font><font color=#0000AA>"],["§2","</font><font color=#00AA00>"],["§3","</font><font color=#00AAAA>"],["§4","</font><font color=#AA0000>"],["§5","</font><font color=#AA00AA>"],["§6","</font><font color=#FFAA00>"],["§7","</font><font color=#AAAAAA>"],["§8","</font><font color=#555555>"],["§9","</font><font color=#5555FF>"],["§a","</font><font color=#55FF55>"],["§b","</font><font color=#55FFFF>"],["§c","</font><font color=#FF5555>"],["§d","</font><font color=#FF55FF>"],["§e","</font><font color=#FFFF55>"],["§f","</font><font color=#FFFFFF>"]];
		colors.forEach((e,i) => {text = text.split(e[0]).join(e[1]);});
		textSize = textSize||dp(8);
		textView.setText(android.text.Html.fromHtml(text));		
		textView.setTypeface(MinecraftFont);
		textView.setTextSize(android.util.TypedValue.COMPLEX_UNIT_PX,textSize);
		textView.setTextColor(android.graphics.Color.parseColor("#E1E1E1"));
		textView.setLayerType(android.view.View.LAYER_TYPE_SOFTWARE,null);
		textView.setAllCaps(false);
		if(shadow===true)textView.setShadowLayer(0.00001,Math.round(dp(1)*(textSize/dp(8))),Math.round(dp(1)*(textSize/dp(8))),android.graphics.Color.DKGRAY);
}
function CreateLayoutView(widgetType,x,y,width,height){
		var LayoutWidget = widgetType;
		var LayoutParams = new android.widget.RelativeLayout.LayoutParams(width,height);
		LayoutParams.setMargins(x,y,0,0);
		LayoutWidget.setLayoutParams(LayoutParams);
		return LayoutWidget;
}
var BitmapUtils = {
		getDrawable:(bitmap) => new android.graphics.drawable.BitmapDrawable(bitmap),
		getFromTexture:(direction) => new android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack("images/"+direction)),
		getTrimmed:(bitmap,x,y,width,height) => new android.graphics.Bitmap.createBitmap(bitmap,x,y,width,height),
		getScaled:(bitmap,scaleX,scaleY) => new android.graphics.Bitmap.createScaledBitmap(bitmap,scaleX,scaleY,false),
		ultimateDrawable:(direction,x,y,width,height,scaleX,scaleY) => BitmapUtils.getDrawable(BitmapUtils.getScaled(BitmapUtils.getTrimmed(BitmapUtils.getFromTexture(direction),x,y,width,height),scaleX||dp(width),scaleY||dp(height))),
		//Affogatoman(@dfak0557)'s Method
		stretchImage:(bm,x,y,stretchWidth,stretchHeight,width,height) => {
				var blank = android.graphics.Bitmap.createBitmap(width,height,android.graphics.Bitmap.Config.ARGB_8888);
				var Bitmap = android.graphics.Bitmap;
				var part1 = Bitmap.createBitmap(bm,0,0,x,y);
				var part2 = Bitmap.createBitmap(bm,x,0,stretchWidth,y);
				var part3 = Bitmap.createBitmap(bm,x+stretchWidth,0,bm.getWidth()-x-stretchWidth,y);
				var part4 = Bitmap.createBitmap(bm,0,y,x,stretchHeight);
				var part5 = Bitmap.createBitmap(bm,x,y,stretchWidth,stretchHeight);
				var part6 = Bitmap.createBitmap(bm,x+stretchWidth,y,bm.getWidth()-x-stretchWidth,stretchHeight);
				var part7 = Bitmap.createBitmap(bm,0,y+stretchHeight,x,bm.getHeight()-y-stretchHeight);
				var part8 = Bitmap.createBitmap(bm,x,y+stretchHeight,stretchWidth,bm.getHeight()-y-stretchHeight);
				var part9 = Bitmap.createBitmap(bm,x+stretchWidth,y+stretchHeight,bm.getWidth()-x-stretchWidth,bm.getHeight()-y-stretchHeight);
				var canvas = new android.graphics.Canvas(blank);
				canvas.drawBitmap(part1,0,0,null);
				canvas.drawBitmap(Bitmap.createScaledBitmap(part2,width-bm.getWidth()+stretchWidth,y,false),x,0,null);
				canvas.drawBitmap(part3,width-bm.getWidth()+stretchWidth+x,0,null);
				canvas.drawBitmap(Bitmap.createScaledBitmap(part4,x,height-bm.getHeight()+stretchHeight,false),0,y,null);
				canvas.drawBitmap(Bitmap.createScaledBitmap(part5,width-bm.getWidth()+stretchWidth,height-bm.getHeight()+stretchHeight,false),x,y,null);
				canvas.drawBitmap(Bitmap.createScaledBitmap(part6,part3.getWidth(),height-bm.getHeight()+stretchHeight,false),width-bm.getWidth()+stretchWidth+x,y,null);
				canvas.drawBitmap(part7,0,height-bm.getHeight()+stretchHeight+y,null);
				canvas.drawBitmap(Bitmap.createScaledBitmap(part8,width-bm.getWidth()+stretchWidth,part7.getHeight(),false),x,height-bm.getHeight()+stretchHeight+y,null);
				canvas.drawBitmap(part9,width-bm.getWidth()+stretchWidth+x,height-bm.getHeight()+stretchHeight+y,null);
				return new android.graphics.drawable.BitmapDrawable(blank);
		}
};
var Background = {
		itemIcon:function(name,data,size){
				eval("var meta = "+new java.lang.String(ModPE.getBytesFromTexturePack("images/items.meta"))+";");
				var metaMapped = meta.map(e=>e.name);	
				var items = BitmapUtils.getFromTexture("items-opaque.png");
				var uvs = meta[metaMapped.indexOf(name)].uvs[data];
				return BitmapUtils.ultimateDrawable("items-opaque.png",uvs[0]*uvs[4],uvs[1]*uvs[5],Math.ceil(uvs[2]*uvs[4]-uvs[0]*uvs[4]),Math.ceil(uvs[3]*uvs[5]-uvs[1]*uvs[5]),size||dp(16),size||dp(16));
		},
		dirtWall:function(){
				var background = BitmapUtils.getDrawable(this.getScaled(BitmapUtils.getFromTexture("gui/background.png"),dp(32),dp(32)));
				background.setTileModeXY(android.graphics.Shader.TileMode.REPEAT,android.graphics.Shader.TileMode.REPEAT);
				background.setColorFilter(android.graphics.Color.rgb(60,60,60),android.graphics.PorterDuff.Mode.MULTIPLY);
				return background;
		},
		contentRect:function(width,height){
				var blank = android.graphics.Bitmap.createBitmap(width,height,android.graphics.Bitmap.Config.ARGB_8888);		
				var canvas = new android.graphics.Canvas(blank);
				var paint = new android.graphics.Paint();		
				paint.setColor(android.graphics.Color.BLACK);
				canvas.drawRect(0,0,width,height,paint);		
				paint.setColor(android.graphics.Color.rgb(49,49,49));
				canvas.drawRect(dp(1),dp(1),width-dp(1),height-dp(1),paint);		
				return BitmapUtils.getDrawable(blank);
		},
		ring:function(size,width,color){
				var blank = android.graphics.Bitmap.createBitmap(size,size,android.graphics.Bitmap.Config.ARGB_8888);		
				var canvas = new android.graphics.Canvas(blank);
				var paint = new android.graphics.Paint();
				paint.setStyle(android.graphics.Paint.Style.STROKE);
				paint.setStrokeWidth(width);		
				paint.setColor(color);			
				canvas.drawCircle(size/2,size/2,size/2-width/2,paint);
				return BitmapUtils.getDrawable(blank);
		},
		slider:function(width,sections){
				var blank = android.graphics.Bitmap.createBitmap(width,dp(17),android.graphics.Bitmap.Config.ARGB_8888);
				var canvas = new android.graphics.Canvas(blank);
				var paint = new android.graphics.Paint();
				paint.setColor(android.graphics.Color.rgb(115,113,115));
				canvas.drawRect(dp(5.5),dp(6.8),width-dp(5.5),dp(10.2),paint);
				paint.setColor(android.graphics.Color.rgb(148,148,148));		
				for(let i=0;i<sections+1;i++){
							canvas.drawRect(dp(5.5)+(width-dp(11))/sections*i-dp(2.25),dp(4.5),dp(5.5)+(width-dp(11))/sections*i+dp(2.25),dp(12.25),paint);
				}return BitmapUtils.getDrawable(blank);
		},
		starterButton:function(sprite,state){
				var blank = android.graphics.Bitmap.createBitmap(dp(144),dp(56),android.graphics.Bitmap.Config.ARGB_8888);		
				var canvas = new android.graphics.Canvas(blank);
				canvas.drawBitmap(BitmapUtils.ultimateDrawable("gui/starter_screen/starter_buttons.png",0,state==="unpressed"?0:56,144,56).getBitmap(),0,0,null);//BitmapUtils.getTrimmed(BitmapUtils.getFromTexture("gui/starter_screen/starter_buttons.png"),0,state==="unpressed"?0:56,144,56),0,0,null);
				canvas.drawBitmap(BitmapUtils.ultimateDrawable(sprite,0,0,32,32,dp(40),dp(40)).getBitmap(),dp(4),dp(4),null);
				return BitmapUtils.getDrawable(blank);
		}
};

var ModPEGUI = {
		imageButton:function(unpressedImage,pressedImage,x,y,width,height,action){
				var unpressed = unpressedImage;
				var pressed = pressedImage;
				var button = CreateLayoutView(new android.widget.ImageView(ctx),x,y,width,height);	
				button.setBackgroundDrawable(unpressedImage);
				button.setClickable(true);
				button.setOnTouchListener(new android.view.View.OnTouchListener({
						onTouch:function(view,event){
								switch(event.getAction()){
										case android.view.MotionEvent.ACTION_DOWN:view.setBackgroundDrawable(pressed);break;
										case android.view.MotionEvent.ACTION_MOVE:if(event.getX()<0||event.getY()<0||event.getX()>width||event.getY()>height){view.setBackgroundDrawable(unpressed);var current = true;}else if(!current){view.setBackgroundDrawable(pressed);}break;
										case android.view.MotionEvent.ACTION_UP:view.setBackgroundDrawable(unpressed);if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>(width)||event.getY()>height)){Level.playSoundEnt(Player.getEntity(),"random.click");if(typeof action==="function")action();}var current = false;break;
										case android.view.MotionEvent.ACTION_CANCEL:view.setBackgroundDrawable(unpressed);if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>(width)||event.getY()>height)){Level.playSoundEnt(Player.getEntity(),"random.click");}var current = false;break;
								}return false;
						}
				}));return button;
		},
		minecraftButton:function(text,x,y,width,height,action){
				var unpressed = BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",8,32,8,8).getBitmap(),dp(2),dp(2),dp(4),dp(4),width,height);
				var pressed = BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",0,32,8,8).getBitmap(),dp(2),dp(2),dp(4),dp(4),width,height);
				var button = CreateLayoutView(new android.widget.Button(ctx),x,y,width,height);
				button.setBackgroundDrawable(unpressed);
				button.setPadding(0,dp(1),0,0);
				MinecraftText(button,text,true);
				button.setOnTouchListener(new android.view.View.OnTouchListener({
						onTouch:function(view,event){
								switch(event.getAction()){
										case android.view.MotionEvent.ACTION_DOWN:view.setBackgroundDrawable(pressed);view.setTextColor(android.graphics.Color.parseColor("#FFFFA1"));view.setPadding(view.getPaddingLeft(),dp(2),view.getPaddingRight(),view.getPaddingBottom());break;
										case android.view.MotionEvent.ACTION_MOVE:if(event.getX()<0||event.getY()<0||event.getX()>width||event.getY()>height){view.setBackgroundDrawable(unpressed);view.setTextColor(android.graphics.Color.parseColor("#E1E1E1"));view.setPadding(view.getPaddingLeft(),dp(1),view.getPaddingRight(),view.getPaddingBottom());var current = true;}else if(!current){view.setTextColor(android.graphics.Color.parseColor("#FFFFA1"));view.setBackgroundDrawable(pressed);view.setPadding(view.getPaddingLeft(),dp(2),view.getPaddingRight(),view.getPaddingBottom());}break;
										case android.view.MotionEvent.ACTION_UP:view.setTextColor(android.graphics.Color.parseColor("#E1E1E1"));view.setBackgroundDrawable(unpressed);view.setPadding(view.getPaddingLeft(),dp(1),view.getPaddingRight(),view.getPaddingBottom());if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>(width)||event.getY()>height)){Level.playSoundEnt(Player.getEntity(),"random.click");if(typeof action==="function")action();}var current = false;break;
										case android.view.MotionEvent.ACTION_CANCEL:view.setTextColor(android.graphics.Color.parseColor("#E1E1E1"));view.setBackgroundDrawable(unpressed);view.setPadding(view.getPaddingLeft(),dp(1),view.getPaddingRight(),view.getPaddingBottom());if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>(width)||event.getY()>height)){Level.playSoundEnt(Player.getEntity(),"random.click");}var current = false;break;
								}return false;
						}
				}));return button;
		},
		minecraftImageButton:function(bitmap,x,y,width,height,action){
				var unpressed = BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",8,32,8,8).getBitmap(),dp(2),dp(2),dp(4),dp(4),width,height);
				var pressed = BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",0,32,8,8).getBitmap(),dp(2),dp(2),dp(4),dp(4),width,height);
				var button = CreateLayoutView(new android.widget.ImageView(ctx),x,y,width,height);
				button.setScaleType(android.widget.ImageView.ScaleType.CENTER);
				button.setBackgroundDrawable(unpressed);
				button.setImageBitmap(bitmap);
				button.setPadding(0,0,0,0);
				button.setClickable(true);
				button.setOnTouchListener(new android.view.View.OnTouchListener({
						onTouch:function(view,event){
								switch(event.getAction()){
										case android.view.MotionEvent.ACTION_DOWN:view.setBackgroundDrawable(pressed);view.setPadding(view.getPaddingLeft(),dp(1),view.getPaddingRight(),view.getPaddingBottom());break;
										case android.view.MotionEvent.ACTION_MOVE:if(event.getX()<0||event.getY()<0||event.getX()>width||event.getY()>height){view.setBackgroundDrawable(unpressed);view.setPadding(view.getPaddingLeft(),0,view.getPaddingRight(),view.getPaddingBottom());var current = true;}else if(!current){view.setBackgroundDrawable(pressed);view.setPadding(view.getPaddingRight(),dp(1),view.getPaddingTop(),view.getPaddingBottom());}break;
										case android.view.MotionEvent.ACTION_UP:view.setBackgroundDrawable(unpressed);view.setPadding(view.getPaddingRight(),0,view.getPaddingRight(),view.getPaddingBottom());if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>(width)||event.getY()>height)){Level.playSoundEnt(Player.getEntity(),"random.click");if(typeof action==="function")action();}var current = false;break;
										case android.view.MotionEvent.ACTION_CANCEL:view.setBackgroundDrawable(unpressed);view.setPadding(view.getPaddingRight(),0,view.getPaddingRight(),view.getPaddingBottom());if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>(width)||event.getY()>height)){Level.playSoundEnt(Player.getEntity(),"random.click");}var current = false;break;
								}return false;
						}
				}));return button;
		},
		minecraftLabel:function(text,x,y,width,height,shadow,size,gravity,lineSpacing){
				var textView = CreateLayoutView(new android.widget.TextView(ctx),x,y,width,height);
				textView.setGravity(gravity||android.view.Gravity.CENTER);
				textView.setLineSpacing(lineSpacing||0,1);
				MinecraftText(textView,text,shadow,size);
				return textView;
		},
		minecraftSlider:function(x,y,width,sections,max){
				var slider = CreateLayoutView(new android.widget.SeekBar(ctx),x,y,width,dp(17));
				slider.getProgressDrawable().setColorFilter(android.graphics.Color.TRANSPARENT,android.graphics.PorterDuff.Mode.MULTIPLY);
				slider.setBackgroundDrawable(Background.slider(width,sections));
				slider.setThumb(BitmapUtils.ultimateDrawable("gui/touchgui.png",225,125,11,17,dp(33),dp(51)));
				slider.setPadding(dp(5.5),0,dp(5.5),0);
				slider.setMax(max||100);
				return slider;
		},
		minecraftSwitch:function(defaultState,x,y,activeAction,deactiveAction){
				var active = BitmapUtils.ultimateDrawable("gui/touchgui.png",198,206,38,19).getBitmap();//BitmapUtils.stretchImage(BitmapUtils.ultimateDrawable("gui/spritesheet.png",8,32,8,8).getBitmap(),dp(2),dp(2),dp(4),dp(4),width,height);
				var deactive = BitmapUtils.ultimateDrawable("gui/touchgui.png",160,206,38,19).getBitmap();//,dp(2),dp(2),dp(4),dp(4),width,height);
				var mcSwitch = CreateLayoutView(new android.widget.ImageView(ctx),x,y,dp(38),dp(19));
				mcSwitch.setImageBitmap(defaultState==="off"?deactive:active);
				mcSwitch.setTag(defaultState==="off"?false:true);
				mcSwitch.setClickable(true);
				mcSwitch.setOnTouchListener(new android.view.View.OnTouchListener({
						onTouch:function(view,event){
								switch(event.getAction()){
										case android.view.MotionEvent.ACTION_DOWN:view.setPadding(dp(0.5),dp(0.5),dp(0.5),dp(0.5));if(view.getTag()==true){if(typeof deactiveAction==="function")deactiveAction();view.setImageBitmap(deactive);view.setTag(false);}else{if(typeof activeAction==="function")activeAction();view.setImageBitmap(active);view.setTag(true);}break;			
										case android.view.MotionEvent.ACTION_MOVE:if(event.getX()<0||event.getY()<0||event.getX()>dp(38)||event.getY()>dp(19)){view.setPadding(0,0,0,0);var current = true;}else if(!current)view.setPadding(dp(0.5),dp(0.5),dp(0.5),dp(0.5));break;							
										case android.view.MotionEvent.ACTION_UP:view.setPadding(0,0,0,0);if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>dp(38)||event.getY()>dp(19))){Level.playSoundEnt(Player.getEntity(),"random.click");if(typeof action==="function")action();}var current = false;break;
										case android.view.MotionEvent.ACTION_CANCEL:view.setPadding(0,0,0,0);if(current!==false&&!(event.getX()<0||event.getY()<0||event.getX()>dp(38)||event.getY()>dp(19))){Level.playSoundEnt(Player.getEntity(),"random.click");}var current = false;break;
								}return false;
						}
				}));return mcSwitch;
		},
		screenHeader:function(text,width){
				var body = new android.widget.RelativeLayout(ctx);			
				var center = CreateLayoutView(new android.widget.TextView(ctx),0,0,width||ScreenWidth(),dp(25));
				center.setBackgroundDrawable(BitmapUtils.ultimateDrawable("gui/touchgui.png",153,26,8,25,width||ScreenWidth(),dp(25)));		
				center.setGravity(android.view.Gravity.CENTER);
				center.setPadding(dp(3),dp(1),dp(3),0);
				MinecraftText(center,text,true);		
				body.addView(center);			
				var left = CreateLayoutView(new android.widget.ImageView(ctx),0,0,dp(2),dp(25));
				left.setBackgroundDrawable(BitmapUtils.ultimateDrawable("gui/touchgui.png",150,26,2,25));
				body.addView(left);				
				var right = CreateLayoutView(new android.widget.ImageView(ctx),(width||ScreenWidth())-dp(2),0,dp(2),dp(25));
				right.setBackgroundDrawable(BitmapUtils.ultimateDrawable("gui/touchgui.png",162,26,2,25));
				body.addView(right);		
				var bottom = CreateLayoutView(new android.widget.ImageView(ctx),0,dp(25),width||ScreenWidth(),dp(3));
				bottom.setBackgroundDrawable(BitmapUtils.ultimateDrawable("gui/touchgui.png",153,52,8,3,width||ScreenWidth(),dp(3)));
				body.addView(bottom);		
				return body;
		}
};
var dp = (pixels) => android.util.TypedValue.applyDimension(android.util.TypedValue.COMPLEX_UNIT_DIP,2,ctx.getResources().getDisplayMetrics())*pixels;




//######################################################################
//######################################################################
//######################################################################
//######################################################################
//######################################################################
//######################################################################









//LISTA DE QUE HACER?
/*
1- Agregar mas Pokemon.
2- Agregar Items y Bloques.
3- Agregar arboles de apricorn.
4- Agregar crafteos de los items, bloques.
5- Crear sistemas de captura y evolucion.
6- Crear sistema de Batalla.
7- Agregar NPC.
8- Agregar efectos sonoros, musicas.
*/

