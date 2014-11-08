module.exports = {
  paths: [
    // path #1
    // car: insurance (r), oil change (r), gas (r), inspection (r), registration, license, tires (r), license plate
    {
      pathName: "car",
      items: [
        {
          name: "car",
          image: "car.svg"
        },
        {
          name: "insurance",
          incessant: true,
          image: "insurance.svg"
        },
        {
          name: "oil change",
          incessant: true,
          image: "oil-change.svg"
        }
      ]
    }
  ]
};