class Paiement {

    #solde
    #depot
    #retrait
    #interet = 0.03

    constructor(solde, depot, retrait) {
        this.#solde = solde
        this.#depot = depot
        this.#retrait = retrait
    }
    //Faire ma logique pour mo dépot ici
    depot(){
        this.#solde = this.#solde + this.#depot
        console.log("Vous avez déposé " + this.#depot + " euros. Nouveau solde : " + this.#solde + "euros.")
    }

    retrait(){
        //Ajouter la condition d'avoir un solde suffisant
        this.#solde = this.#solde - this.#retrait
        console.log("Vous avez retiré " + this.#retrait + " euros. Nouveau solde : " + this.#solde + "euros.")
    }

    get solde() {
        return this.#solde;
      }
    get depot() {
      return this.#depot;
    }
    get retrait() {
      return this.#retrait;
    }

}

export { Paiement };