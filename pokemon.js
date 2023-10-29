/*
class Pokemon{
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        return this.luck > Math.random()
    }

    attackPokemon(pokemon) {
        if (this.isLucky()) {
            let damage = this.attack - pokemon.defense
            pokemon.hp -= damage
            console.log(this.name + ' a attaqué ' + pokemon.name + ' pour ' + damage + ' de dégâts! Il lui reste ' + pokemon.hp + ' points de vie.')
        } else {
            console.log(this.name  + ' a raté son attaque !')
        }
    }
}

let Pikachu = new Pokemon("Pikachu", 200, 130, 130, 0.7)
let Salamèche = new Pokemon("Salamèche", 160, 150, 120, 0.7)

while (Salamèche.hp > 0 && Pikachu.hp > 0) {

    Pikachu.attackPokemon(Salamèche)

    if (Salamèche.hp < 0){
        console.log("Tortank est mort")
        break
    }

    Salamèche.attackPokemon(Pikachu)

    if (Pikachu.hp < 0){
        console.log("Dracofeau est mort")
        break
    }
}
*/