import { createAppSelector } from "..";

export const homeSelector = createAppSelector(
  [
    (state) => state.property.currentPage,
    (state) => state.property.totalPages,
    (state) => state.property.isFetchingProperties
  ],
  (currentPage, totalPages, isFetchingProperties) => ({
    currentPage,
    totalPages,
    isFetchingProperties
  })
);
export const propertyListSelector = createAppSelector(
  [(state) => state.property.properties?.slice()],
  (properties) => properties
);
