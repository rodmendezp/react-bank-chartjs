import {categoryTransSign, CHECK_CATEGORIES, INT_CRED_CATEGORIES, mapJsonTransName, NAT_CRED_CATEGORIES} from "./consts"

class Transaction {
    constructor(jsonTransaction) {
        this.type = mapJsonTransName.get(jsonTransaction.ttype)
        this.amount = jsonTransaction.amount
        this.int_amount = jsonTransaction.int_amount
        this.rate = jsonTransaction.rate
        this.mail_dtime = new Date(jsonTransaction.mail_dtime)
    }
}

export function transactionBalance(transactions) {
    let balance = new Map(
        [
            ['check', 0],
            ['natCred', 0],
            ['intCred', 0]
        ]
    )
    for (let [cat, trans] of transactions) {
        for (let tran of trans) {
            let amount = (cat !== 'intCred') ? tran.amount : tran.int_amount
            balance.set(cat, balance.get(cat) + amount * categoryTransSign.get(cat).get(tran.type))
        }
    }
    return balance
}

export function categoryTotals(transactions) {
    let totals = new Map([
        ['check', new Map([])],
        ['natCred', new Map([])],
        ['intCred',new Map([])],
    ])
    for (let [cat, trans] of transactions) {
        let catTotals = totals.get(cat)
        for (let tran of trans) {
            let curr = (catTotals.has(tran.type)) ? catTotals.get(tran.type) : 0
            let amount = (cat !== 'intCred') ? tran.amount : tran.int_amount
            catTotals.set(tran.type, curr + amount)
        }
    }
    return totals
}

export function parseTransactions(jsonTransactions) {
    let checkTransactions = []
    let natCredTransactions = []
    let intCredTransactions = []

    for (let i = 0; i < jsonTransactions.length; i++) {
        const transaction = new Transaction(jsonTransactions[i])
        if (CHECK_CATEGORIES.has(transaction.type))
            checkTransactions.push(transaction)
        if (NAT_CRED_CATEGORIES.has(transaction.type))
            natCredTransactions.push(transaction)
        if (INT_CRED_CATEGORIES.has(transaction.type))
            intCredTransactions.push(transaction)
    }
    return new Map([
        ['check', checkTransactions],
        ['natCred', natCredTransactions],
        ['intCred', intCredTransactions]
    ])
}