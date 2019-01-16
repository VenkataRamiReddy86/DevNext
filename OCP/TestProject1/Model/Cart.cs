using System.Collections.Generic;
using System.Linq;

namespace CommerceProject.Model
{
    public class Cart
    {
        private readonly List<OrderItem> _items;
        private readonly IPriceCalculator _priceCalculator;

        public Cart():this(new PriceCalculator())
        {
            _items = new List<OrderItem>();
        }

        public Cart(IPriceCalculator priceCalculator)
        {
            _priceCalculator = priceCalculator;
        }

        public IEnumerable<OrderItem> Items
        {
            get { return _items; }
        }

        public string CustomerEmail { get; set; }

        public void Add(OrderItem orderItem)
        {
            _items.Add(orderItem);
        }

        public decimal TotalAmount()
        {
            decimal total = 0m;
            foreach (OrderItem orderItem in Items)
            {
                total =total+ _priceCalculator.CalculatePrice(orderItem);
                // more rules are coming!
            }
            return total;
        }

        public interface IPriceCalculator
        {
           decimal CalculatePrice(OrderItem orderItem);
        }

        public class PriceCalculator : IPriceCalculator
        {
            public decimal CalculatePrice(OrderItem orderItem)
            {
                decimal price = 0;
                var rules =new List<IPriceRule>();
                rules.Add(new EachPriceRule());
                rules.Add(new WeightPriceRule());
                rules.Add(new SpecialPriceRule());
                rules.Add(new Buy4Get1Rule());
                rules.Add(new Buy10Get5Rule());

                var rule = rules.Where(r => r.IsMatch(orderItem)).First();
              price=  rule.CalculatePrice(orderItem);
                    
                
                return price;
               
            }
        }

       public interface IPriceRule
        {
            bool IsMatch(OrderItem orderItem);
            decimal CalculatePrice(OrderItem orderItem);
        }

        public class EachPriceRule : IPriceRule
        {
            public decimal CalculatePrice(OrderItem orderItem)
            {
              return  orderItem.Quantity * 5m;
            }

            public bool IsMatch(OrderItem orderItem)
            {
              return  orderItem.Sku.StartsWith("EACH");
            }
        }

        public class WeightPriceRule : IPriceRule
        {
            public decimal CalculatePrice(OrderItem orderItem)
            {
                return orderItem.Quantity * 4m / 1000;
            }

            public bool IsMatch(OrderItem orderItem)
            {
                return orderItem.Sku.StartsWith("WEIGHT");
            }
        }

        public class SpecialPriceRule : IPriceRule
        {
            public decimal CalculatePrice(OrderItem orderItem)
            {
                
               var price = orderItem.Quantity * .4m;
                int setsOfThree = orderItem.Quantity / 3;
                price -= setsOfThree * .2m;

                return price;
            }

            public bool IsMatch(OrderItem orderItem)
            {
                return orderItem.Sku.StartsWith("SPECIAL");
            }
        }
        public class Buy4Get1Rule : IPriceRule
        {
            public decimal CalculatePrice(OrderItem orderItem)
            {
                var price = 0m;
                price = ((orderItem.Quantity / 5) * 4m) + ((orderItem.Quantity % 5) * 1m);
                return price;
            }

            public bool IsMatch(OrderItem orderItem)
            {
                return orderItem.Sku.StartsWith("B4GO");
            }
        }

        public class Buy10Get5Rule : IPriceRule
        {
            public decimal CalculatePrice(OrderItem orderItem)
            {
                var price = 0m;
                if (orderItem.Quantity > 15)
                {

                    price = ((orderItem.Quantity / 15) * 10m) + ((orderItem.Quantity % 15) * 1m);
                }
                else if(orderItem.Quantity>10)
                {
                    price = 10m; 
                }
                else
                {
                    price = orderItem.Quantity * 1m;
                }
                return price;
            }

            public bool IsMatch(OrderItem orderItem)
            {
                return orderItem.Sku.StartsWith("B10G5");
            }
        }
    }
}