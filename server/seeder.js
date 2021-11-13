const fs = require("fs");
const xml2js = require("xml2js");
const ClassProduct = require("./dto/product");
const Product = require("./db/models/Product.model");
const connectDB = require("./db/connect");

const parseXMLtoJS = (data) => new Promise((resolve, reject) => {
  const parser = new xml2js.Parser();
  parser.parseString(data, (err, result) => {
    try {
      resolve(result.Document.DocDetail);
    } catch (error) {
      reject(error)
  }
})
})

const seeder = async () => {
  try {
    await connectDB();
    const dataProducts = fs.readFileSync("./PRODAT21.xml", "utf-8");
    const productsArray = await parseXMLtoJS(dataProducts);
    const seedsDB = [];
    productsArray.forEach(product => seedsDB.push(new ClassProduct(product)));
    const newProd = await Product.create(seedsDB);
    // console.log(seedsDB);
    // console.log(seedsDB[110]);
    // console.log(seedsDB[600]);
    // console.log(seedsDB[1000]);

  } catch (error) {
    console.error(error);
}
}

// seeder()
