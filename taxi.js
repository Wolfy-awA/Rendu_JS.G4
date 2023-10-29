/*
//définition des variables utilisées
var jhonMH = 10
var redlight = 0
const music =  ["Light You - Matt Fine", "Humanoïde - Nekfeu", "B4 - Heatace", "Self Control - MF Grave", "Anissa - Wejdene" ]
var change = 0

//boucle principale
while ( redlight < 31 && jhonMH > 0 )
{
    for (let i = 0; i < music.length; i++) 
    {
        if ( redlight == 0) 
        {
            console.log("Jhon a une santé mental de", jhonMH, ".\nIl monte dans un taxi pour rentrer chez lui.\nIl y a ", music[i], " à la radio.")
            redlight += 1
            continue
        }
        if (i < 4) 
        {
            console.log("Il y a ", music[i], " à la radio. Feu n°", redlight, ".\nIl reste", 30 - redlight, "feux.")
            redlight  += 1

        if (redlight == 31) 
        {
            console.log("Jhon est arrivé chez lui sans exploser avec", jhonMH, "de santé mental restante! Il a effectué", change, "changements.")
            break
            
        }} 
        
        else 
        {
            console.log("Il y a ", music[i], " à la radio...", "\nLa santé mental de Jhon descend à", jhonMH+= -1, ". Feu n°", redlight, ".\nJhon change de taxi. Nombre de changement = ", change += 1,".", ". Il reste", 30 - redlight, "feux.")
            redlight += 1
            if (jhonMH == 0) 
            {
                console.log("Explosion!")
                break
            }
        }
        
    }
}
*/