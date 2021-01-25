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
    for (let [cat, value] of transactions) {
        for (let trans of value) {
            let amount = (cat !== 'intCred') ? trans.amount : trans.int_amount
            balance.set(cat, balance.get(cat) + amount * categoryTransSign.get(cat).get(trans.type))
        }
    }
    return balance
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