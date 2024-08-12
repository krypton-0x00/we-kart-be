import { Request, Response } from "express";

const data = [
  {
    name: "Oven Mitt - 13 Inch",
    img: "http://dummyimage.com/197x100.png/cc0000/ffffff",
    description: "Milt op w thermal radn effect of nuclear weapon, civ, init",
  },
  {
    name: "Boogies",
    img: "http://dummyimage.com/185x100.png/ff4444/ffffff",
    description: "Late congenital syphilitic meningitis",
  },
  {
    name: "Langers - Ruby Red Grapfruit",
    img: "http://dummyimage.com/234x100.png/5fa2dd/ffffff",
    description: "Nondisp fx of middle third of navicular bone of left wrist",
  },
  {
    name: "Bacardi Breezer - Strawberry",
    img: "http://dummyimage.com/117x100.png/ff4444/ffffff",
    description: "Horizontal alveolar bone loss",
  },
  {
    name: "Artichoke - Hearts, Canned",
    img: "http://dummyimage.com/143x100.png/dddddd/000000",
    description: "Other mechanical complication of artificial heart",
  },
  {
    name: "Soup - Campbells Broccoli",
    img: "http://dummyimage.com/132x100.png/cc0000/ffffff",
    description: "Nondisp transverse fx shaft of unsp rad, 7thF",
  },
  {
    name: "Snails - Large Canned",
    img: "http://dummyimage.com/130x100.png/5fa2dd/ffffff",
    description: "Nondisp commnt fx shaft of l femr, 7thN",
  },
  {
    name: "Mudslide",
    img: "http://dummyimage.com/167x100.png/dddddd/000000",
    description: "Oth psychoactive substance use, unsp w sexual dysfunction",
  },
  {
    name: "Truffle - Whole Black Peeled",
    img: "http://dummyimage.com/176x100.png/5fa2dd/ffffff",
    description: "Family history of malignant neoplasm of prostate",
  },
  {
    name: "Dill Weed - Fresh",
    img: "http://dummyimage.com/109x100.png/cc0000/ffffff",
    description: "Other chondrocalcinosis, hand",
  },
  {
    name: "Oregano - Dry, Rubbed",
    img: "http://dummyimage.com/118x100.png/dddddd/000000",
    description: "Acute lymphangitis of other parts of limb",
  },
  {
    name: "Tea - Decaf Lipton",
    img: "http://dummyimage.com/202x100.png/5fa2dd/ffffff",
    description: "Nondisp fx of first metatarsal bone, l foot, init for opn fx",
  },
  {
    name: "External Supplier",
    img: "http://dummyimage.com/239x100.png/ff4444/ffffff",
    description: "Oth traum displ spondylolysis of 7th cervcal vert, 7thD",
  },
  {
    name: "Cake - Mini Cheesecake",
    img: "http://dummyimage.com/244x100.png/dddddd/000000",
    description: "Superficial frostbite of right foot, initial encounter",
  },
  {
    name: "Foil - Round Foil",
    img: "http://dummyimage.com/162x100.png/cc0000/ffffff",
    description: "Unsp physeal fracture of lower end of left tibia, init",
  },
  {
    name: "Jagermeister",
    img: "http://dummyimage.com/159x100.png/5fa2dd/ffffff",
    description: "Nondisp transverse fx shaft of unsp fibula, 7thK",
  },
  {
    name: "Vinegar - White",
    img: "http://dummyimage.com/227x100.png/5fa2dd/ffffff",
    description: "Other disorders of bilirubin metabolism",
  },
  {
    name: "Beans - Black Bean, Canned",
    img: "http://dummyimage.com/173x100.png/5fa2dd/ffffff",
    description: "Fracture of one rib, left side, init for opn fx",
  },
  {
    name: "Beans - Turtle, Black, Dry",
    img: "http://dummyimage.com/166x100.png/ff4444/ffffff",
    description: "Nondisp fx of less tuberosity of r humer, 7thG",
  },
  {
    name: "Paper Towel Touchless",
    img: "http://dummyimage.com/143x100.png/ff4444/ffffff",
    description: "STEMI involving right coronary artery",
  },
  {
    name: "Clams - Canned",
    img: "http://dummyimage.com/132x100.png/cc0000/ffffff",
    description: "Oth disorders resulting from impaired renal tubular function",
  },
  {
    name: "Squid - U 5",
    img: "http://dummyimage.com/177x100.png/dddddd/000000",
    description: "Arnold-Chiari syndrome with hydrocephalus",
  },
  {
    name: "Bread - Rolls, Corn",
    img: "http://dummyimage.com/235x100.png/5fa2dd/ffffff",
    description: "Poisn by cardi-stim glycos/drug simlar act, self-harm, subs",
  },
  {
    name: "Sausage - Meat",
    img: "http://dummyimage.com/167x100.png/dddddd/000000",
    description: "Osteitis condensans, unspecified ankle and foot",
  },
];

export const getCategories = (req: Request, res: Response) => {
  res.status(200).json({ data });
};
