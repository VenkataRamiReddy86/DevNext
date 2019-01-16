using CommerceProject.Model;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace CommerceProject
{
    [TestClass]
    public class CartTotalShouldReturn
    {
        private Model.Cart _cart;

        [TestInitialize]
        public void Setup()
        {
            _cart = new Model.Cart();
        }

        [TestMethod]
        public void ZeroWhenEmpty()
        {
            Assert.AreEqual(0, _cart.TotalAmount());
        }

        [TestMethod]
        public void FiveWithOneEachItem()
        {
            _cart.Add(new OrderItem() { Quantity = 1, Sku = "EACH_WIDGET" });
            Assert.AreEqual(5.0m, _cart.TotalAmount());
        }

        [TestMethod]
        public void TwoWithHalfKiloWeightItem()
        {
            _cart.Add(new OrderItem() { Quantity = 500, Sku = "WEIGHT_PEANUTS" });
            Assert.AreEqual(2m, _cart.TotalAmount());
        }

        [TestMethod]
        public void EightyCentsWithTwoSpecialItem()
        {
            _cart.Add(new OrderItem() { Quantity = 2, Sku = "SPECIAL_CANDYBAR" });
            Assert.AreEqual(0.80m, _cart.TotalAmount());
        }
        [TestMethod]
        public void TwoDollarsWithSixSpecialItem()
        {
            _cart.Add(new OrderItem() { Quantity = 6, Sku = "SPECIAL_CANDYBAR" });
            Assert.AreEqual(2m, _cart.TotalAmount());
        }
        [TestMethod]
        public void FourDollarsWithFourBuy4Get1FreeItems()
        {
            _cart.Add(new OrderItem() { Quantity = 4, Sku = "B4GO_APPLE" });
            Assert.AreEqual(4m, _cart.TotalAmount());
        }
        [TestMethod]
        public void FourDollarsWithFiveBuy4Get1FreeItems()
        {
            _cart.Add(new OrderItem() { Quantity = 5, Sku = "B4GO_APPLE" });
            Assert.AreEqual(4m, _cart.TotalAmount());
        }
        [TestMethod]
        public void SixteenDollarsWith19Buy4Get1FreeItems()
        {
            _cart.Add(new OrderItem() { Quantity = 19, Sku = "B4GO_APPLE" });
            Assert.AreEqual(16m, _cart.TotalAmount());
        }
        [TestMethod]
        public void NineDollarsWith11Buy4Get1FreeItems()
        {
            _cart.Add(new OrderItem() { Quantity = 11, Sku = "B4GO_APPLE" });
            Assert.AreEqual(9m, _cart.TotalAmount());
        }

        [TestMethod]
        public void TenDollarsWith15Buy10Get5FreeItems()
        {
            _cart.Add(new OrderItem() { Quantity = 15, Sku = "B10G5_APPLE" });
            Assert.AreEqual(10m, _cart.TotalAmount());
        }
        [TestMethod]
        public void TenDollarsWith14Buy10Get5FreeItems()
        {
            _cart.Add(new OrderItem() { Quantity = 14, Sku = "B10G5_APPLE" });
            Assert.AreEqual(10m, _cart.TotalAmount());
        }
    }
}