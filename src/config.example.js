export const config = {
  "year": 2020,

  "registration_variants": [
    {
      "id":1,
      "text": "Full conference - Full registration: 360 € (fee + digital almanac + coffee breaks + accommodation + full board during the whole conference)",
      "price": 360,
      "full_registration": true
    },
    {
      "id":2,
      "text": "Full conference - Student registration: 305 € (fee + digital almanac + coffee breaks + accommodation + full board during the whole conference)",
      "price": 305,
      "full_registration": true
    },
    {
      "id":3,
      "text": "Full conference - Student registration - student presenting paper: 235 € (fee + digital almanac + coffee breaks + accommodation + full board during the whole conference)",
      "price": 235,
      "full_registration": true
    },
    {
      "id":4,
      "text": "Computational Intelligence and Data Mining (4 days) - Full registration: 360 € (fee + digital almanac + coffee breaks + accommodation + full board for 2 nights)",
      "price": 360,
      "full_registration": false
    },
    {
      "id":5,
      "text": "Computational Intelligence and Data Mining (4 days) - Student registation: 305 € (fee + digital almanac + coffee breaks + accommodation + full board for 2 nights)",
      "price": 305,
      "full_registration": false
    },
    {
      "id":6,
      "text": "Computational Intelligence and Data Mining (4 days) - Student registation - student presenting paper: 235 € (fee + digital almanac + coffee breaks + accommodation + full board for 2 nights)",
      "price": 235,
      "full_registration": false
    },
    {
      "id":7,
      "text": "CZ-SK NLP workshop - Full registration 250€ (fee + digital almanac + coffee breaks + accommodation + full board for 2 nights)",
      "price": 250,
      "full_registration": false
    },
    {
      "id":8,
      "text": "CZ-SK NLP workshop - Student registration 200€ (fee + digital almanac + coffee breaks + accommodation + full board for 2 nights)",
      "price": 200,
      "full_registration": false
    },
    {
      "id":9,
      "text": "CZ-SK NLP workshop - Student registration - student presenting paper 130€ (fee + digital almanac + coffee breaks + accommodation + full board for 2 nights)",
      "price": 130,
      "full_registration": false
    },
    {
      "id":10,
      "text": "Intelligent speech and audio technologies workshop- Full registration: 250€ (fee + digital almanac + coffee breaks + banket + accommodation + full board for 2 nights)",
      "price": 250,
      "full_registration": false
    },
    {
      "id":11,
      "text": "Intelligent speech and audio technologies workshop - Student registration 200€ (fee + digital almanach + coffee breaks + banket + accommodation + full board for 2 nights)",
      "price": 200,
      "full_registration": false
    },
    {
      "id":12,
      "text": "Intelligent speech and audio technologies workshop - Student registration - student presenting paper 130€ (fee + digital almanach + coffee breaks + banket + accommodation + full board for 2 nights)",
      "price": 130,
      "full_registration": false
    }
  ],
  "payment_methods": [
    { "text": "cash (upon registration)" },
    {
      "text": "Bank transfer (bank account: 2628717743/1100 (Tatra banka, a.s. Hodžovo namestie 3, 811 06 Bratislava), IBAN SK50 1100 0000 0026 2871 7743, SWIFT: TATR SK BX (Slovenská spoločnosť pre umelú inteligenciu (SAIS), Letná 9, 040 00 Košice). Please, after the bank transfer, send us the confirmation of payment to peter.gursky@upjs.sk."
    }
  ],
  "time_arrival": [
    { id: 1, "text": "20. 9. (Friday) - start with dinner" },
    { id: 2, "text": "21. 9. (Saturday) - start with breakfast" },
    { id: 3, "text": "21. 9. (Saturday) - start with lunch" },
    { id: 4, "text": "21. 9. (Saturday) - start with dinner" },
    { id: 5, "text": "22. 9. (Sunday) - start with breakfast" },
    { id: 6, "text": "22. 9. (Sunday) - start with lunch" },
    { id: 7, "text": "22. 9. (Sunday) - start with dinner" },
    { id: 8, "text": "23. 9. (Monday) - start with breakfast" },
    { id: 9, "text": "23. 9. (Monday) - start with lunch" },
    { id: 10, "text": "23. 9. (Monday) - start with dinner" }
  ],
  "time_departure": [
    { id: 1, "text": "21. 9. (Saturday) - end with breakfast" },
    { id: 2, "text": "21. 9. (Saturday) - end with lunch" },
    { id: 3, "text": "21. 9. (Saturday) - end with dinner" },
    { id: 4, "text": "22. 9. (Sunday) - end with breakfast" },
    { id: 5, "text": "22. 9. (Sunday) - end with lunch" },
    { id: 6, "text": "22. 9. (Sunday) - end with dinner" },
    { id: 7, "text": "23. 9. (Monday) - end with breakfast" },
    { id: 8, "text": "23. 9. (Monday) - end with lunch" },
    { id: 9, "text": "23. 9. (Monday) - end with dinner" },
    { id: 10, "text": "24. 9. (Tuesday) - end with breakfast" }
  ],
  "tshirt_size": [
    { "text": "S" },
    { "text": "M" },
    { "text": "L" },
    { "text": "XL" },
    { "text": "XXL" }
  ],
  "singleBedroom":
    {
      "soldOut": false,
      "soldOutNote": "&rarr; Note: The single-bed rooms are sold out now. In case of serious interest, we can reserve accommodation in a single room in the cottage Martinské hole.",
      "text": "single bed rooms +70 eur, only for full registration",
      "price": 70,
      "requires_full_registration": true
    },
  "accomodation":{
    "price":100
  },
  "banket": [
    { "id": 1, "text": "yes [+15€]", "price": 15 },
    { "id": 2, "text": "no", "price": 0 }
  ],
  "special_requests": [
    { "text": "no" },
    { "text": "vegetarian diet" },
    { "text": "vegan diet" },
    { "text": "gluten-free diet" }
  ]
}
