module.exports = {
  paths: [
    // path #1
    // car: insurance (r), oil change (r), gas (r), inspection (r), registration, license, tires (r), license plate
    {
      pathName: "car",
      items: [
        {
          name: "car",
          prompt: "wanna car?",
          image: "../../images/house.svg"
        },
        {
          name: "insurance",
          prompt: "want car insurance?",
          incessant: true,
          image: "../../images/house.svg"
        },
        {
          name: "oil change",
          prompt: "oil change?",
          incessant: true,
          image: "../../images/house.svg"
        }
      ]
    },
    {
      pathName: "house",
      items: [
        {
          name: "house",
          prompt: "wanna house?",
          image: "../../images/house.svg"
        },
        {
          name: "add porch",
          prompt: "add a porch?",
          image: "../../images/house.svg"
        },
        {
          name: "mortgage",
          prompt: "pay the mortgage",
          incessant: true,
          image: "../../images/house.svg"
        }
      ]
    },
    {
      pathName: "pez dispenser",
      items: [
        {
          name: "pez dispenser",
          prompt: "wanna pez dispenser?",
          image: "../../images/house.svg"
        },
        {
          name: "pez",
          prompt: "add some pez?",
          image: "../../images/house.svg"
        },
        {
          name: "more pez",
          prompt: "more pez?",
          incessant: true,
          image: "../../images/house.svg"
        }
      ]
    }
  ]
};