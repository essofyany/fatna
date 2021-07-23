import { useSelector } from "react-redux";
import Banner from "../../components/Materials/Banner";
import CategoryGrid from "../../components/Grids/CategoryGrid";

function CollectionsPage() {
  const categories = useSelector((state) => state.category.categoryList);
  return (
    <>
      <Banner textTransform="uppercase" main="collections" />
      <CategoryGrid categories={categories} />
    </>
  );
}

export default CollectionsPage;
