export const CHECK_EXPENSE = "Check Expense";
export const CHECK_TRANSFER = "Check Transfer";
export const CHECK_WITHDRAW = "Check Withdraw";
export const NAT_CRED_EXPENSE = "National Credit Expense";
export const NAT_CRED_PAY = "National Credit Pay";
export const NAT_CRED_WITHDRAW = "National Credit Withdraw";
export const INT_CRED_EXPENSE = "Internation Credit Expense";
export const INT_CRED_PAY = "Internation Credit Pay";
export const INT_CRED_WITHDRAW = "International Credit Withdraw";

export const CHECK_CATEGORIES = new Set([
    CHECK_EXPENSE,
    CHECK_TRANSFER,
    CHECK_WITHDRAW,
    NAT_CRED_PAY,
    INT_CRED_PAY
]);

export const NAT_CRED_CATEGORIES = new Set([
    NAT_CRED_EXPENSE,
    NAT_CRED_WITHDRAW,
    NAT_CRED_PAY
]);

export const INT_CRED_CATEGORIES = new Set([
    INT_CRED_EXPENSE,
    INT_CRED_WITHDRAW,
    INT_CRED_PAY
]);

export const mapJsonTransName = new Map([
    ['CHECK_EXPENSE', CHECK_EXPENSE],
    ['CHECK_TRANSFER', CHECK_TRANSFER],
    ['CHECK_WITHDRAW', CHECK_WITHDRAW],
    ['NAT_CRED_EXPENSE', NAT_CRED_EXPENSE],
    ['NAT_CRED_PAY', NAT_CRED_PAY],
    ['NAT_CRED_WITHDRAW', NAT_CRED_WITHDRAW],
    ['INT_CRED_EXPENSE', INT_CRED_EXPENSE],
    ['INT_CRED_PAY', INT_CRED_PAY],
    ['INT_CRED_WITHDRAW', INT_CRED_WITHDRAW]
])

export const categoryTransSign = new Map([
    ["check", new Map([
        [CHECK_EXPENSE, -1],
        [CHECK_TRANSFER, -1],
        [CHECK_WITHDRAW, -1],
        [NAT_CRED_PAY, -1],
        [INT_CRED_PAY, -1]
        ]
    )],
    ['natCred', new Map([
        [NAT_CRED_EXPENSE, -1],
        [NAT_CRED_WITHDRAW, -1],
        [NAT_CRED_PAY, 1]
        ]
    )],
    ['intCred', new Map([
        [INT_CRED_EXPENSE, -1],
        [INT_CRED_WITHDRAW, -1],
        [INT_CRED_PAY, 1]
        ])
    ]
    ]
)