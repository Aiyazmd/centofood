// const restoSchema = require("./schema");

// const createOrder =  (req, res) => {
//   console.log(req,"reqreqreqreqreqreq")
//     if (req.method !== "POST") {
//       res.status(400).json({ message: "BAD REQUEST!", success: false });
//       return;
//     }
//     const data = req.body;
//     console.log(data,"datadatadatadatadata")
//     const restos = new restoSchema(data);
//     console.log(restos,"restosrestosrestosrestos")  
//    restos.save().then((res)=>res?.status(200).json({ message: "Order Created Successfully", success: true })).catch((error) =>{
//     console.log(error);
//     res.status(500).json({ message: "Internal Server Error!", success: false });
//   })
// };

// module.exports = {
//   createOrder,
// };


const restoSchema = require("./schema");

const createOrder = async (req, res) => {
  console.log(req.method, "Request Method");
  console.log(req.headers, "Request Headers");
  console.log(req.body, "Request Body");
  try {
    if (req.method !== "POST") {
      res.status(400).json({ message: "BAD REQUEST!", success: false });
      return;
    }
    const data = req.body;
    data.createdAt = new Date();
    console.log(data, "Data");
    const order = new restoSchema(data);
    console.log(order, "Order");
    await order.save();
     res.status(201).json({ message: "Order Created Successfully", success: true });
  } catch (error) {
    console.log(error);
     res.status(500).json({ message: "Internal Server Error!", success: false });
  }
};

module.exports = {
  createOrder,
};
