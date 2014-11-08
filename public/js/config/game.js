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
          image: "car.svg"
        },
        {
          name: "insurance",
          prompt: "want car insurance?",
          incessant: true,
          image: "insurance.svg"
        },
        {
          name: "oil change",
          prompt: "oil change?",
          incessant: true,
          image: "oil-change.svg"
        }
      ]
    },
    {
      pathName: "house",
      items: [
        {
          name: "house",
          prompt: "wanna house?",
          image: "house.svg"
        },
        {
          name: "add porch",
          prompt: "add a porch?",
          image: "porch.svg"
        },
        {
          name: "mortgage",
          prompt: "pay the mortgage",
          incessant: true,
          image: "mortgage.svg"
        }
      ]
    }
  ]
};