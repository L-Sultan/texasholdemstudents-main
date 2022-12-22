function makeHand(origCards) {
    const cardsByRank = [...origCards]
    cardsByRank.sort(byRank)
    //TODO : all other kind of hands
    //Exemple:
    // if (isPair()) {
    //     return makePair(cardsByRank)
    // }
    return makeSingleCard(cardsByRank)
}

function makeSingleCard(cardsByRank) {
    const hand = {}
    hand.type = 'high'
    hand.rank = cardsByRank[0].rank
    hand.kickers = cardsByRank.filter((c) => c.rank !== hand.rank)
    return hand
}

function byRank(c1, c2) {
    if (c1.rank === 1 && c2.rank === 1) {
        return 0
    }
    if (c1.rank === 1 && c2.rank > 1) {
        return 1
    }
    if (c2.rank === 1 && c1.rank > 1) {
        return -1
    }
    return c2.rank - c1.rank
}

function isQuad(c1, c2, c3, c4) {
    let res = false
    if (c1.rank == c2.rank && c1.rank == c3.rank === 1 && c3.rank == c4.rank) {
        res = true
    }
    else {
        res = false
    }
    return res
}

function isFullHouse(c1, c2, c3, c4, c5) {
    let res = false
    if (c1.rank == c2.rank && c1.rank == c3.rank && c1.rank !== c4.rank && c4.rank == c5.rank) {
        res = true
    }
    else {
        res = false
    }
    return res
}

function isThreeOfAKind(c1, c2, c3) {
    let res = false
    if (c1.rank == c2.rank && c1.rank == c3.rank) {
        res = true
    }
    else {
        res = false
    }
    return res
}

function isDoublePair(c1, c2, c3, c4) {
    let res = false
    if (c1.rank == c2.rank && c1.rank !== c3.rank && c3.rank == c4.rank) {
        res = true
    }
    else {
        res = false
    }
    return res
}

function isPair(counts) {
    let res = false
    if (c1.rank == c2.rank) {
        res = true
    }
    else {
        res = false
    }
    return res
}

export { makeHand, byRank, isPair, isDoublePair, isThreeOfAKind, isFullHouse, isQuad}