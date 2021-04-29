exports.pizzaController = (req, res) => {
    res.json({
        pizza: [{
               name: "Margherita",
               img: "neapolitan",
               base:"paradicsomos",
               topping: "paradicsom, szeletelt mozzarella, bazsalikom",
               price: "1350",
            },
            {
                name: "Chicago",
                img: "chicago",
                base: "paradicsomos",
                topping: "darált hús, kolbász, pepperoni, hagyma, gomba, zöld paprika, parmezán sajt",
                price: "1850",
             },
             {
                name: "New York",
                img: "newyork",
                base: "paradicsomos",
                topping: "mozzarella, pepperóni, gomba, oragánó, parmezán sajt, chili reszelék",
                price: "1750",
             },
             {
                name: "Sicilian",
                img:"sicilian",
                base: "paradicsomos",
                topping: "paradicsom, hagyma, szardínia, bazsalikom, oregánó",
                price: "1750",
             },
             {
                name: "Greek",
                img: "greek",
                base: "tejfölös",
                topping: "feta sajt, fekete olajbogyó, vöröshagyma, mozzarella, oregánó",
                price: "1650",
             },
             {
                name: "California",
                img: "california",
                base: "paradicsomos",
                topping: "sonka, kukorica, csirkemell csíkok, ricotta, sajt",
                price: "1850",
             },
             {
                name: "Detroit",
                img:"detroit",
                base:"paradicsomos",
                topping: "pepperóni, gomba, sajt",
                price: "1550",
             },
             {
                name: "St. Louis",
                img:"stlouis",
                base:"paradicsomos",
                topping: "pepperóni, oregánó, paprika, cheedar, sajt",
                price: "1650",
             },       
             {
                name: "Brewer’s Flatbread",
                img:"brewers",
                base:"tejfölös",
                topping: "paprika, mozzarella, paradicsom, bacon, lila hagyma",
                price: "1650",
             },      
        ]
    })
}