module.exports = {
  paths: [
    // path #1
    // car: insurance (r), oil change (r), gas (r), inspection (r), registration, license, tires (r), license plate
    {
      pathName: "car",
      items: [
        {
          name: "car",
          prompt: "Buy a Car",
          image: "../../images/car.svg"
        },
        {
          name: "insurance",
          prompt: "Buy Car Insurance",
          incessant: true,
          image: "../../images/document-insurance.svg"
        },
        {
          name: "oil change",
          prompt: "Get an Oil Change",
          incessant: true,
          image: "../../images/oil.svg"
        },
        {
          name: "buy gas",
          prompt: "Buy Gas",
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
    {
      pathName: "job",
      items: [
        {
          name: "job",
          prompt: "Accept a Job",
          image: "../../images/stay-late.svg"
        },
        {
          name: "work late",
          prompt: "Work Late",
          image: "../../images/stay-late.svg"
        },
        {
          name: "resume",
          prompt: "Update Resume",
          incessant: true,
          image: "../../images/document-registration.svg"
        },
        {
          name: "network",
          prompt: "Go to Networking Event",
          incessant: true,
          image: "../../images/network.svg"
        },
        {
          name: "work weekend",
          prompt: "Work the Weekend",
          incessant: true,
          image: "../../images/work-weekend.svg"
        },
        {
          name: "raise",
          prompt: "Accept a Raise",
          incessant: true,
          image: "../../images/money.svg"
        },
      ]
    },
    {
      pathName: "house",
      items: [
        {
          name: "house",
          prompt: "Buy a House",
          image: "../../images/house.svg"
        },
        {
          name: "pool",
          prompt: "Build a Pool",
          image: "../../images/pool.svg"
        },
        {
          name: "garage",
          prompt: "Add a Garage",
          image: "../../images/garage.svg"
        },
        {
          name: "insurance",
          incessant: true,
          prompt: "Get Homeowners Insurance",
          image: "../../images/document-insurance.svg"
        },
        {
          name: "mortgage",
          incessant: true,
          prompt: "Pay Mortgage",
          image: "../../images/document-mortgage.svg"
        },      
      ]
    },
    {
      pathName: "college",
      items: [
        {
          name: "college",
          prompt: "Go to College",
          image: "../../images/college.svg"
        },
        {
          name: "books",
          prompt: "Buy Books",
          image: "../../images/books.svg"
        },
        {
          name: "registration",
          prompt: "Register for Classes",
          incessant: true,
          image: "../../images/document-registration.svg"
        }
      ]
    }
  ]
};