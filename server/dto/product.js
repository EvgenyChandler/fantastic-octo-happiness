module.exports = class Product{
  constructor(model) {
    this.EAN = model.EAN[0];
    this.code = model.SenderPrdCode[0];
    this.productName = model.ProductName[0];
    this.status = model.ProductStatus[0];
    this.parentProdGroupCode = model.ParentProdCode[0];
    this.parentProdGroupName = model.ParentProdGroup[0];
    this.productGroupCode = model.ProductCode[0];
    this.productGroupName = model.ProductGroup[0];
    this.brand = model.Brand[0];
    this.weight = model.Weight[0].Value[0];
    this.depth = model.Dimension[0].Depth[0];
    this.width = model.Dimension[0].Width[0];
    this.height = model.Dimension[0].Height[0];
    this.relatedProducts = model.RelatedProd[0].ItemCode ? model.RelatedProd[0].ItemCode : [];
    this.analog = model.Analog[0].ItemCode ? model.Analog[0].ItemCode : [];
    this.image = model.Image[0].Value[0];
    this.certificate = model.CertificateNum[0];
    this.certificateImage = model.Certificate[0].Value ? model.Certificate[0].Value: null;
  }
}
