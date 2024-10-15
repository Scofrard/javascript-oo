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
}

export { Paiement };