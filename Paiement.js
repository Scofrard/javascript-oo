class Paiement {

    #solde
    #depot
    #retrait
    static interet = 0.03

    constructor(solde, depot, retrait) {
        this.#solde = solde
        this.#depot = depot
        this.#retrait = retrait
    }
    //Faire ma logique pour chaque dépot ici
    depot(){
        this.#solde = this.#solde + this.#depot
        console.log("Vous avez déposé " + this.#depot + " euros. Nouveau solde : " + this.#solde + "euros.")
    }

    //Faire ma logique pour chaque retrait ici
    retrait(){
        if (this.#solde >= this.#retrait) {
        this.#solde = this.#solde - this.#retrait
        console.log("Vous avez retiré " + this.#retrait + " euros. Nouveau solde : " + this.#solde + "euros.")
        } else {
          console.log("Solde insuffisant pour effectuer ce retrait.")} 
    }

    //Calculer l'interêt sur le solde
    interet(){ 
        this.#solde = this.#solde * interet
        console.log("L’interet est de " + interet + ". Nouveau solde : " + this.#solde + "euros.")
    }

    //Récupérer le solde
    get solde() {
        return this.#solde;
      }
    //Récupérer le dépot
    get depot() {
      return this.#depot;
    }
    //Récupérer le retrait
    get retrait() {
      return this.#retrait;
    }

    // Setters
    set solde(solde) {
        this.#solde = solde;
      }
    set depot(depot) {
      this.#depot = depot;
    }
    set retrait(retrait) {
      this.#retrait = retrait;
    }

}

export { Paiement };