var foodPosts = [
    {
        index: 0,
        coordinate: {
            latitude: 25.026154,
            longitude: 121.543422,
        },
        description: "tasty pizza",
        amount: 3,
        foodName: "pepporoni pizza",
        restaurantName: "Pizza House",
        originPrice: 45,
        newPrice: 25,
        images : [
            {
                image: "https://doqvf81n9htmm.cloudfront.net/data/alicelee_126/201804/0416/54.jpg",
                desc: "test"
            },
            {
                image: "https://tokyo-kitchen.icook.network/uploads/category/background/112/e2919e9cfb5832b5.jpg",
                desc: "try"
            }
        ]
    },
    {
        index:1,
        coordinate: {
            latitude: 25.018908564268997,
            longitude: 121.53976848218413,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003
        },
        description: "tasty hotpot",
        amount: 5,
        foodName: "kimchi pot",
        restaurantName: "Tofu house",
        originPrice: 120,
        newPrice: 100,
        images : [
            {
                image: "https://images.japancentre.com/recipes/pics/241/main/photo_Korean-Style-Kimuchi-Nabe-Hot-Pot.jpg?1469572978",
                desc: "test"
            },
            {
                image: "https://www.maangchi.com/wp-content/uploads/2019/06/kimchistewtuna.jpg",
                desc: "try"
            }
        ]
    }
]
exports.foodPosts = foodPosts;