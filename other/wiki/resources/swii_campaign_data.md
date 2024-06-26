# Stick War 2 Campaign Data
## level
- **title**: "Tutorial"
- **number**: "1"
- **map**: "2"
- **story**: "Many of the empires you previously controlled are now rebels that have fled to the outskirts of their homelands. You are faced with the threat of attack. Speartons have rebuilt and declared war against your diminished army."
- **controller**: "CampaignTutorial"
- **points**: "1
- **normal**: 1.8
- **hard**: 1.2
- **insane**: .7
- **normalHealthScale**: 0.5
- **tip**: Tip: You must out number the more powerful enemy.

### player 
- **race**: "Order"
- **statueHealth**: "1500"
- **unit**: Swordwrath

### oponent
- **race**: "Order" 
- **statueHealth**: "400"
- **raceName**: Speartons
- **statue**: spearton
- **unit**: Spearton

## level
- **title**: "Blot out the sun: Archidons Declare War" 
- **number**: "2" 
- **map**: "4" 
- **story**: "The Archidon Empire wants revenge and their land back.  They have declared war against your Empire." 
- **controller**: "CampaignArcher" 
- **points**: "1"
- **unlock**: Spearton
- **normal**: 1.8
- **hard**: 1.4
- **insane**: .7
- **normalHealthScale**: .5
- **tip**: Tip: The Speartons heavy armor is good at blocking arrows.

### player
- **race**: "Order" 
- **statueHealth**: "1000"
- **unit**: Swordwrath
- **unit**: Spearton
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Swordwrath
- **startingUnit**: Swordwrath
	
### oponent 
- **race**: "Order" 
- **statueHealth**: "800"
- **raceName**: Archidons
- **statue**: archidon
- **unit**: Swordwrath
- **unit**: Archidon
- **unit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Swordwrath
- **UnitComposition**: 
	- **Swordwrath**: 4
	- **Archidon**: 25
		
	

## level
- **title**: "Silent Assassins: Ninjas Declare War" 
- **number**: "3" 
- **map**: "5" 
- **story**: "When the nations fled your control , some of the more cunning Swordwrath managed to escape and rebuild. They trained themselves into a new breed of Swordwrath more intelligent and skilled. This new race is called Shadowrath. " 
- **controller**: "CampaignShadow" 
- **points**: "1"
- **unlock**: Archidon
- **normal**: 1.7
- **hard**: 1.4
- **insane**: .85
- **normalHealthScale**: .4
- **tip**: Tip: Cure poison and heal your units by garrisoning inside your castle walls.
### player
- **race**: "Order" 
- **statueHealth**: "1200"
- **unit**: Swordwrath
- **unit**: Spearton
- **unit**: Archidon
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Archidon
- **startingUnit**: Swordwrath

### oponent 
- **race**: "Order" 
- **statueHealth**: "1200"
- **raceName**: Shadowrath
- **unit**: Ninja
- **unit**: Swordwrath
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Swordwrath
- **UnitComposition**: 
	- **Swordwrath**: 4
	- **Ninja**: 15
		
	

## level
- **title**: "Magic in the Air: Wizards and monks Declare War " 
- **number**: "4" 
- **map**: "2" 
- **story**: "The Rebel Magikill have trained the women of their empire in the art of magic, creating powerful Merics with the ability to heal and cure." 
- **controller**: "" 
- **points**: "1"
- **hasInsaneWall**: true
- **unlock**: Ninja
- **normal**: 1.7
- **hard**: 1.6
- **insane**: .9
- **normalHealthScale**: .6
- **normalDamageScale**: .5
- **tip**: Tip: Take advantage of the Shadowrath cloak ability "Shinobi" to assassinate the powerful Magikill and Merics.
### player 
- **race**: "Order" 
- **statueHealth**: "700"
- **unit**: Swordwrath
- **unit**: Spearton
- **unit**: Archidon
- **unit**: Ninja
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Swordwrath

### oponent
- **race**: "Order" 
- **statueHealth**: "1200"
- **castleArcher**: 1
- **raceName**: Magikill
- **mana**: 400
- **gold**: 700
- **statue**: magikill
- **unit**: Magikill
- **unit**: Monk
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Monk
- **UnitComposition**: 
	- **Monk**: 2
	- **Magikill**: 8
		
	

## level
- **title**: "Rebels United" 
- **number**: "4" 
- **map**: "1" 
- **story**: "All rebels armys join together to crush the Order Empire." 
- **controller**: "" 
- **points**: "1"
- **hasInsaneWall**: true
- **unlock**: Magikill
- **unlock**: Monk
- **normal**: 1.65
- **hard**: 1.5
- **insane**: .85
- **normalHealthScale**: .6
- **normalDamageScale**: .5
- **tip**: Tip: Use your abilities in combination and create a strategy to defend and conquer.
### player
- **race**: "Order" 
- **statueHealth**: "1500"
- **unit**: Swordwrath
- **unit**: Spearton
- **unit**: Archidon
- **unit**: Ninja
- **unit**: Magikill
- **unit**: Monk
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Swordwrath
- **startingUnit**: Spearton
- **startingUnit**: Ninja
- **startingUnit**: Magikill
- **startingUnit**: Monk

### oponent
- **race**: "Order" 
- **statueHealth**: "1500"
- **raceName**: Rebels
- **unit**: Swordwrath
- **unit**: Spearton
- **unit**: Archidon
- **unit**: Ninja
- **unit**: Magikill
- **unit**: Monk
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Swordwrath
- **startingUnit**: Spearton
- **startingUnit**: Ninja
- **startingUnit**: Monk
- **UnitComposition**: 
	- **Swordwrath**: 4
	- **Spearton**: 5
	- **Ninja**: 3
	- **Magikill**: 3
	- **Monk**: 2
		
	

## level
- **title**: "Massive Battle" 
- **number**: "6" 
- **map**: "3" 
- **story**: "Sometimes what seems like the end is merely the beginning of the end." 
- **controller**: "CampaignCutScene1" 
- **points**: "1"
- **hasInsaneWall**: true
- **normal**: 1.75
- **hard**: .95
- **insane**: .8
- **normalHealthScale**: .5
- **tip**: Tip: Giants attack very slowly, try attacking once, then run your units behind them, attack and repeat.
### player
- **race**: "Order" 
- **statueHealth**: "1500"
- **statue**: swordwrath
- **unit**: Swordwrath
- **unit**: Spearton
- **unit**: Archidon
- **unit**: Ninja
- **unit**: Magikill
- **unit**: Monk
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Swordwrath

### oponent
- **race**: "Chaos" 
- **statueHealth**: "1500"
- **raceName**: Giants
- **unit**: Giant
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: Giant
- **castleArcher**: 1
	

## level
- **title**: "Explosive War: Bombers Attack" 
- **number**: "7" 
- **map**: "2" 
- **story**: "Medusa vows to whipe Order Empire out of Inamorta.  Her first display of power is to  send some of her minion bombers and Giants  to destroy you." 
- **controller**: "CampaignBomber" 
- **points**: "1"
- **hasInsaneWall**: true
- **unlock**: EnslavedGiant
- **normal**: 1.6
- **hard**: .95
- **insane**: .8
- **normalHealthScale**: .55
- **tip**: Tip: Bombers do area effect damage, keep your units spread out.
### player
- **race**: "Order" 
- **statueHealth**: "1500"
- **statue**: swordwrath
- **unit**: Swordwrath
- **unit**: Spearton
- **unit**: Archidon
- **unit**: Ninja
- **unit**: Magikill
- **unit**: Monk
- **unit**: EnslavedGiant
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Swordwrath

### oponent 
- **race**: "Chaos" 
- **statueHealth**: "1500"
- **raceName**: Bombers
- **statue**: giant
- **unit**: Bomber
- **unit**: Giant
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: Bomber
- **startingUnit**: Bomber
- **startingUnit**: Bomber
- **startingUnit**: Bomber
- **castleArcher**: 1
- **UnitComposition**: 
	- **Bomber**: 0
	- **Giant**: 8
		
	

## level
- **title**: "The Night is Dark: Juggerknights Attack" 
- **number**: "8" 
- **map**: "3" 
- **story**: "Medusa unleashes her most ferocious heavily armored infantry." 
- **controller**: "CampaignKnight" 
- **points**: "1"
- **hasInsaneWall**: true
- **normal**: 1.7
- **hard**: 1.4
- **insane**: .8
- **normalHealthScale**: .6
- **tip**: Tip: Giants are effective against heavily armored units.
### player
- **race**: "Order" 
- **statueHealth**: "1500"
- **statue**: swordwrath
- **unit**: Swordwrath
- **unit**: Spearton
- **unit**: Archidon
- **unit**: Ninja
- **unit**: Magikill
- **unit**: Monk
- **unit**: EnslavedGiant
- **startingUnit**: Swordwrath
- **startingUnit**: Swordwrath
- **startingUnit**: Swordwrath
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner

### oponent
- **race**: "Chaos" 
- **statueHealth**: "1500"
- **raceName**: Juggerknights
- **unit**: Bomber
- **unit**: Knight
- **unit**: Giant
- **startingUnit**: Bomber
- **startingUnit**: Bomber
- **startingUnit**: Knight
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **UnitComposition**: 
	- **Bomber**: 5
	- **Knight**: 8
	- **Giant**: 2
		
	

## level
- **title**: "Undead War: Deadly Deads Attack" 
- **number**: "9" 
- **map**: "2" 
- **story**: "Medusa attacks by revealing the Deads, an undead zombie that throws their own poisonous body parts." 
- **controller**: "CampaignDeads" 
- **points**: "1"
- **hasInsaneWall**: true
- **normal**: 1.8
- **hard**: 1.4
- **insane**: .9
- **normalHealthScale**: .55
- **tip**: Tip: Use your Merics to cure the poison from the Deads. Garrisoning Units "G" will also cure and heal.
### player: 
- **race**: "Order" 
- **statueHealth**: "1500"
- **statue**: swordwrath
- **unit**: Swordwrath
- **unit**: Spearton
- **unit**: Archidon
- **unit**: Ninja
- **unit**: Magikill
- **unit**: Monk
- **unit**: EnslavedGiant
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Swordwrath

### opponent: 
- **race**: "Chaos" 
- **statueHealth**: "1500"
- **raceName**: Deads
- **statue**: dead
- **unit**: Bomber
- **unit**: Knight
- **unit**: Giant
- **unit**: Dead
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: Dead
- **UnitComposition**: 
	- **Bomber**: 4
	- **Knight**: 3
	- **Dead**: 20
	- **Giant**: 1
		
	

## level: 
- **title**: " 4 legged Fury: Crawlers Attack" 
- **number**: "10" 
- **map**: "4" 
- **story**: "Medusa Unleashes the Crawlers, a fast assassin that becomes more powerful in a pack." 
- **controller**: "" 
- **points**: "1"
- **hasInsaneWall**: true
- **normal**: 1.6
- **hard**: 1.3
- **insane**: .8
- **normalHealthScale**: .7
- **tip**: Tip: Crawlers are more powerful in numbers. Spash damage from a castle archer will help.  Archidons are a good choice but not without protection.
### player: 
- **race**: "Order" 
- **statueHealth**: "1500"
- **statue**: swordwrath
- **unit**: Swordwrath
- **unit**: Spearton
- **unit**: Archidon
- **unit**: Ninja
- **unit**: Magikill
- **unit**: Monk
- **unit**: EnslavedGiant
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Swordwrath

### opponent: 
- **race**: "Chaos" 
- **statueHealth**: "1500"
- **raceName**: Crawlers
- **unit**: Bomber
- **unit**: Knight
- **unit**: Giant
- **unit**: Dead
- **unit**: Cat
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: Cat
- **UnitComposition**: 
	- **Bomber**: 3
	- **Knight**: 2
	- **Dead**: 2
	- **Cat**: 20
	- **Giant**: 1
	


## level: 
- **title**: "Shadow of the moon: Eclipsors Attack." 
- **number**: "11" 
- **map**: "0" 
- **story**: "Medusa's tricks seem to never end. The Eclipsor is revealed, a flying archer that can only be hit by projectile units." 
- **controller**: "" 
- **points**: "1"
- **hasInsaneWall**: true
- **normal**: 1.7
- **hard**: 1.5
- **insane**: .9
- **normalHealthScale**: .75
- **tip**: Tip: Use your Archidons in large numbers to pick the Eclipsors out of the sky. Enslaved Giants and Magikill will also hit air units.
### player: 
- **race**: "Order" 
- **statueHealth**: "1500"
- **statue**: swordwrath
- **unit**: Swordwrath
- **unit**: Spearton
- **unit**: Archidon
- **unit**: Ninja
- **unit**: Magikill
- **unit**: Monk
- **unit**: EnslavedGiant
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Swordwrath
- **startingUnit**: Swordwrath
- **startingUnit**: Archidon

### opponent: 
- **race**: "Chaos" 
- **statueHealth**: "1500"
- **raceName**: Eclipsors
- **statue**: wingadon
- **unit**: Bomber
- **unit**: Knight
- **unit**: Giant
- **unit**: Dead
- **unit**: Cat
- **unit**: Wingadon
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: Wingadon
- **UnitComposition**: 
	- **Bomber**: 3
	- **Knight**: 1
	- **Dead**: 1
	- **Cat**: 6
	- **Wingadon**: 20
	- **Giant**: 1
	


## level: 
- **title**: "Bone Pile: Marrowkai summon war" 
- **number**: "12" 
- **map**: "2" 
- **story**: "You have mimicked the flight of the Eclipsor and crafted technology to have your own  flying unit that wields a crossbow. Meanwhile a new Chaos Mage, the Marrowkai, is reaping havoc." 
- **controller**: "" 
- **points**: "1"
- **hasInsaneWall**: true
- **unlock**: FlyingCrossbowman
- **normal**: 1.65
- **hard**: 1.4
- **insane**: .8
- **normalHealthScale**: .7
- **tip**: Tip: A clocked Shadowrath can not be targetted by the enemey.
### player: 
- **race**: "Order" 
- **statueHealth**: "1500"
- **statue**: swordwrath
- **unit**: Swordwrath
- **unit**: Spearton
- **unit**: Archidon
- **unit**: Ninja
- **unit**: Magikill
- **unit**: FlyingCrossbowman
- **unit**: Monk
- **unit**: EnslavedGiant
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Swordwrath
- **startingUnit**: Magikill
- **startingUnit**: FlyingCrossbowman

### opponent: 
- **race**: "Chaos" 
- **statueHealth**: "1500"
- **raceName**: Marrowkai
- **unit**: Bomber
- **unit**: Knight
- **unit**: Giant
- **unit**: Dead
- **unit**: Cat
- **unit**: Wingadon
- **unit**: SkelatalMage
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: Cat
- **startingUnit**: SkelatalMage
- **startingUnit**: Wingadon
- **UnitComposition**: 
	- **Bomber**: 3
	- **Knight**: 2
	- **Dead**: 2
	- **Cat**: 3
	- **Wingadon**: 3
	- **SkelatalMage**: 4
	- **Giant**: 2
	


## level: 
- **title**: "Medusa's Gates: The Chaos Capital is in sight. " 
- **number**: "13" 
- **map**: "6" 
- **story**: "You are on the outskirts of Medusas homeland.  A final push is near." 
- **controller**: "" 
- **points**: "1"
- **hasInsaneWall**: true
- **normal**: 1.6
- **hard**: 1.4
- **insane**: .8
- **normalHealthScale**: .7
- **tip**: Tip: Take out key units first.
### player: 
- **race**: "Order" 
- **statueHealth**: "1500"
- **statue**: swordwrath
- **unit**: Swordwrath
- **unit**: Spearton
- **unit**: Archidon
- **unit**: Ninja
- **unit**: Magikill
- **unit**: Monk
- **unit**: FlyingCrossbowman
- **unit**: EnslavedGiant
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Swordwrath
- **startingUnit**: Spearton
- **startingUnit**: Ninja
- **startingUnit**: Magikill
- **startingUnit**: Monk
- **startingUnit**: FlyingCrossbowman

### opponent: 
- **race**: "Chaos" 
- **statueHealth**: "1500"
- **raceName**: Chaos Empire
- **unit**: Bomber
- **unit**: Knight
- **unit**: Giant
- **unit**: Dead
- **unit**: Cat
- **unit**: Wingadon
- **unit**: SkelatalMage
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: Bomber
- **startingUnit**: Bomber
- **startingUnit**: Dead
- **startingUnit**: Knight
- **startingUnit**: Cat
- **startingUnit**: Wingadon
- **startingUnit**: SkelatalMage
- **UnitComposition**: 
	- **Bomber**: 3
	- **Knight**: 3
	- **Dead**: 4
	- **Cat**: 7
	- **Wingadon**: 4
	- **SkelatalMage**: 4
	- **Giant**: 2
	


## level: 
- **title**: "Medusa and the Full Chaos Empire: Final battle" 
- **number**: "14" 
- **map**: "7" 
- **story**: "You have pushed Medusa and her Chaos Empire back to their Capital. They have no where left to run. Do not hold back! Inamorta is at stake." 
- **controller**: "CampaignCutScene2" 
- **points**: "1"
- **hasInsaneWall**: true
- **normal**: 1.6
- **hard**: 1.4
- **insane**: .78
- **normalHealthScale**: .7
- **tip**: Tip: Use everything you have learned up to this point to fight the most difficult battle of all.
### player: 
- **race**: "Order" 
- **statueHealth**: "1500"
- **mana**: 1000
- **gold**: 1000
- **statue**: swordwrath
- **unit**: Swordwrath
- **unit**: Spearton
- **unit**: Archidon
- **unit**: Ninja
- **unit**: Magikill
- **unit**: Monk
- **unit**: EnslavedGiant
- **unit**: FlyingCrossbowman
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Miner
- **startingUnit**: Swordwrath
- **startingUnit**: Spearton
- **startingUnit**: Archidon
- **startingUnit**: Ninja
- **startingUnit**: Magikill
- **startingUnit**: Monk
- **startingUnit**: EnslavedGiant

### opponent: 
- **race**: "Chaos" 
- **statueHealth**: "1500"
- **raceName**: Medusa
- **mana**: 1000
- **gold**: 1000
- **statue**: medusa
- **unit**: Bomber
- **unit**: Knight
- **unit**: Giant
- **unit**: Dead
- **unit**: Cat
- **unit**: Wingadon
- **unit**: SkelatalMage
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: ChaosMiner
- **startingUnit**: Bomber
- **startingUnit**: Bomber
- **startingUnit**: Dead
- **startingUnit**: Knight
- **startingUnit**: Giant
- **startingUnit**: Cat
- **startingUnit**: Cat
- **startingUnit**: Wingadon
- **startingUnit**: SkelatalMage
- **UnitComposition**: 
	- **Bomber**: 2
	- **Knight**: 2
	- **Dead**: 3
	- **Cat**: 3
	- **Wingadon**: 4
	- **SkelatalMage**: 4
	- **Giant**: 2
	- **Medusa**: 1