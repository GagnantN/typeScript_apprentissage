function afficheMessage(message?: string) :void{
    if (message == null){
        return console.log("Aucun message");
    } else {
        return console.log("Voici votre message " + message);
    }
}

afficheMessage();
afficheMessage("Coucou");
