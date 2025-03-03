import { useParams } from "react-router";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";
import data from "../datas/datas.json";

function Products() {
  const prodIds = useParams().id;
  const dataProd = data[prodIds];
  console.log(dataProd);
  return (
    <div>
      <Navbar />
      <div className="bg-white mt-20 py-3 sm:py-8 lg:py-12">
        <Product
          name={dataProd.name}
          category={dataProd.category}
          img={dataProd.images}
          price={dataProd.price}
          desc={dataProd.description}
          seller={dataProd.seller}
          view={dataProd.view}
          interaction={dataProd.interaction}
          like={dataProd.like}
        />
      </div>
    </div>
  );
}

export default Products;
