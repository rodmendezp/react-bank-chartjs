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

class TransactionsInfo {
    constructor(jsonTransactions) {
        this.balance = new Map([['check', 0], ['natCred', 0], ['intCred', 0]])
        this.transactions = new Map([['check', []], ['natCred', []], ['intCred', []]])
        this.transTypes = new Map([['check', new Map()], ['natCred', new Map()], ['intCred', new Map()]])
        this.totals = new Map([['check', new Map()], ['natCred', new Map()], ['intCred', new Map()]])
        for (let jsonTrans of jsonTransactions) {
            let t = new Transaction(jsonTrans)
            if (CHECK_CATEGORIES.has(t.type)) this.addTransaction(t, 'check')
            if (NAT_CRED_CATEGORIES.has(t.type)) this.addTransaction(t, 'natCred')
            if (INT_CRED_CATEGORIES.has(t.type)) this.addTransaction(t, 'intCred')
        }
        this.categories = Array.from(this.transactions.keys())
        this.categories = this.categories.filter(x => this.transactions.get(x).length > 0)
    }
    addTransaction(trans, category) {
        let transAmount = (category !== 'intCred') ? trans.amount : trans.int_amount
        let balanceAmount = transAmount * categoryTransSign.get(category).get(trans.type)
        balanceAmount += this.balance.get(category)
        this.balance.set(category, balanceAmount)
        this.transactions.get(category).push(trans)
        let catTransTypes = this.transTypes.get(category)
        if (!catTransTypes.has(trans.type)) catTransTypes.set(trans.type, [])
        this.transTypes.get(category).get(trans.type).push(trans)
        let catTypeTotal = this.totals.get(category).get(trans.type) || 0
        this.totals.get(category).set(trans.type, catTypeTotal + transAmount)
    }
}

export default TransactionsInfo;