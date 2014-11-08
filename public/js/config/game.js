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
          image: "../../images/car.svg"
        },
        {
          name: "insurance",
          prompt: "want car insurance?",
          incessant: true,
          image: "../../images/document-insurance.svg"
        },
        {
          name: "oil change",
          prompt: "oil change?",
          incessant: true,
          image: "../../images/oil.svg"
        },
        {
          name: "buy gas",
          prompt: "Buy Gas?",
          incessant: true,
          image: "../../images/gas.svg"
        },
        {
          name: "registration",
          prompt: "Update Registration",
          incessant: true,
          image: "../../images/document-registration.svg"
        }
      ]
    },
    // {
    //   pathName: "house",
    //   items: [
    //     {
    //       name: "house",
    //       prompt: "wanna house?",
    //       image: "../../images/house.svg"
    //     },
    //     {
    //       name: "add porch",
    //       prompt: "add a porch?",
    //       image: "../../images/house.svg"
    //     },
    //     {
    //       name: "mortgage",
    //       prompt: "pay the mortgage",
    //       incessant: true,
    //       image: "../../images/house.svg"
    //     }
    //   ]
    // },
    {
      pathName: "college",
      items: [
        {
          name: "college",
          prompt: "Go to College?",
          image: "../../images/college.svg"
        },
        {
          name: "books",
          prompt: "Buy Books?",
          image: "../../images/books.svg"
        },
        {
          name: "registration",
          prompt: "Register for classes?",
          incessant: true,
          image: "../../images/document-registration.svg"
        }
      ]
    }
  ]
};