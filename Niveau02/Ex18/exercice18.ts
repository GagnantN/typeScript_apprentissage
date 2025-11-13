function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Données perçus !");
        }, 1000);
    });
}

async function afficherData() {
    console.log("Récupération des données ...");
    const resultat = await fetchData();
    console.log(resultat);
}

afficherData();