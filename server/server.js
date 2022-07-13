const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let servers = [
  {
    name: "MacDonalds",
    product: [
      {
        id: 1,
        name: "Big Mac",
        price: 15,
        src: "https://res.cloudinary.com/bixapb/image/upload/v1657642913/img/bigmac_vohmlu.jpg",
      },
      {
        id: 2,
        name: "Cheeseburger",
        price: 12,
        src: "https://res.cloudinary.com/bixapb/image/upload/v1657642913/img/cheesburg_h6rdsj.jpg",
      },
      {
        id: 3,
        name: "Hamburger",
        price: 11,
        src: "https://res.cloudinary.com/bixapb/image/upload/v1657642913/img/hamburger_w7xqkp.jpg",
      },
      {
        id: 4,
        name: "Double cheeseburger",
        price: 14,
        src: "https://res.cloudinary.com/bixapb/image/upload/v1657642913/img/chees22_zqfrmn.jpg",
      },
    ],
  },
  {
    name: "KFC",
    product: [
      {
        id: 1,
        name: "Bucket duet sharp",
        price: 12,
        src: "https://res.cloudinary.com/bixapb/image/upload/v1657643141/img/medium_4093_ibysmq.png",
      },
      {
        id: 2,
        name: "Cheeseburger",
        price: 10,
        src: "https://res.cloudinary.com/bixapb/image/upload/v1657643140/img/medium_4061_zuql6h.jpg",
      },
      {
        id: 3,

        name: "Longer",
        price: 12,
        src: "https://res.cloudinary.com/bixapb/image/upload/v1657643140/img/medium_3737_ljf8er.jpg",
      },
      {
        id: 4,

        name: "Double chicken",
        price: 10,
        src: "https://res.cloudinary.com/bixapb/image/upload/v1657643140/img/medium_4065_ppabvm.jpg",
      },
    ],
  },
  {
    name: "Evrasia",
    product: [
      {
        id: 1,
        name: "California ",
        price: 10,
        src: "https://res.cloudinary.com/bixapb/image/upload/v1657643271/img/446x334xkaliforniya.jpg.pagespeed.ic.fZ5sKGE6kA_gj616u.jpg",
      },
      {
        id: 2,
        name: "Green dragon",
        price: 12,
        src: "https://res.cloudinary.com/bixapb/image/upload/v1657643272/img/446x334xzelenyj-drakon.jpg.pagespeed.ic.Kw7Defneef_hqojm1.jpg",
      },
      {
        id: 3,
        name: "Red dragon",
        price: 8,
        src: "https://res.cloudinary.com/bixapb/image/upload/v1657643272/img/446x334xkrasnyj-drakon.jpg.pagespeed.ic.Fo5si8HwOv_v0npkr.jpg",
      },
      {
        id: 4,

        name: "Philadelphia ",
        price: 15,
        src: "https://res.cloudinary.com/bixapb/image/upload/v1657643273/img/446x334xfiladelfiya-original.jpg.pagespeed.ic.i7PxTcxWDR_vptum5.jpg",
      },
    ],
  },
];

let serversOrders = [];

app.get("/api/shops", (req, res) => {
  res.json(servers);
});

app.get("/api/order", (req, res) => {
  res.json(serversOrders);
});

app.post("/api/order", (req, res) => {
  const newServer = {
    id: Date.now().toString(),
    ...req.body,
  };
  console.log(newServer);
  serversOrders.push(newServer);
  res.json(newServer);
});

app.listen(5000, () => {
  console.log("Server start on port 5000");
});
