exports.topPizzaController = (req, res) => {
  res.json({
    toppizza: [
        {
            name: "Greek",
            img: "greek",
            base: "tejfölös",
            topping: "feta sajt, fekete olajbogyó, vöröshagyma, mozzarella, oregánó",
            price: "1650",
         },
         {
            name: "St. Louis",
            img:"stlouis",
            base:"paradicsomos",
            topping: "pepperóni, oregánó, paprika, cheedar, sajt",
            price: "1650",
         },
         {
            name: "California",
            img: "california",
            base: "paradicsomos",
            topping: "sonka, kukorica, csirkemell csíkok, ricotta, sajt",
            price: "1850",
         },
    ],
  });
};
