import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesIsLoading } from "../../store/categories/category.selectors";
import ProductCard from "../product-card/product-card.component";
import Spinner from "../spinner/spinner.component";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryPreviewContainer>
          <h2>
            <Title to={title}>{title.toUpperCase()}</Title>
          </h2>
          <Preview>
            {products
              .filter((_, idx) => idx < 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </Preview>
        </CategoryPreviewContainer>
      )}
    </Fragment>
  );
};

export default CategoryPreview;
