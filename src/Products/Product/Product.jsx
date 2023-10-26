import { AiFillStar } from 'react-icons/ai';
import { Card } from '../../components';
import { useFilterContext } from '../../context/FiltersContex';
import './Product.css';

export default function Product() {
  const { products, filteredProducts } = useFilterContext();
  return (
    <section className="card-container">
      {filteredProducts.length > 0
        ? filteredProducts?.map((prod) => {
            return (
              <Card
                key={crypto.randomUUID()}
                img={prod.img}
                title={prod.title}
                star={<AiFillStar className="ratings-star" />}
                reviews={prod.reviews}
                prevPrice={prod.prevPrice}
                newPrice={prod.newPrice}
              />
            );
          })
        : products?.map((prod) => {
            return (
              <Card
                key={crypto.randomUUID()}
                img={prod.img}
                title={prod.title}
                star={<AiFillStar className="ratings-star" />}
                reviews={prod.reviews}
                prevPrice={prod.prevPrice}
                newPrice={prod.newPrice}
              />
            );
          })}
    </section>
  );
}
