const fields = {
    User: {
        books: (parent, args) => {
            console.log("2222 >>>>>>>>", args)
            return [
                {
                    id: 123,
                    name: 'moby-dik second edition',
                },
                {
                    id: 3,
                    name: 'Stand By Me',
                }
            ]
        }
    }
}

export default fields;