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

export const colorArray = ['#3366e6', '#4db380', '#FF6633',
    '#b34d4d', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#999966', '#99FF99', '#99E6E6', '#6666FF',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#FF4D4D'];