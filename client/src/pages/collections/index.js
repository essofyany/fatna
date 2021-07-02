import { useSelector } from "react-redux";
import Banner from "../../components/Materials/Banner";
import CategoryGrid from "../../components/Home/CategoryGrid";

function CollectionsPage() {
  const categories = useSelector((state) => state.category.categoryList);
  // console.log(categories);
  return (
    <>
      <Banner textTransform="uppercase" main="collections" />
      <CategoryGrid categories={categories} />
    </>
  );
}

export default CollectionsPage;
