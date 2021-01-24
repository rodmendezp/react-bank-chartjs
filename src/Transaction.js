import { mapJsonTransName } from "./consts"
import { CHECK_CATEGORIES, NAT_CRED_CATEGORIES, INT_CRED_CATEGORIES} from "./consts"

class Transaction {
    constructor(jsonTransaction) {
        this.type = mapJsonTransName.get(jsonTransaction.ttype)
        this.amount = jsonTransaction.amount
        this.int_amount = jsonTransaction.int_amount
        this.rate = jsonTransaction.rate
        this.mail_dtime = new Date(jsonTransaction.mail_dtime)
    }
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