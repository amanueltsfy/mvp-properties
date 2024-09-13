import { Button, Pagination, PaginationItem, Stack } from "@mui/material";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from "react";
import PropertyFilters from "components/home/PropertyFilters";
import SkeletonLoader from "components/home/SkeletonLoader";
import PropertyList from "components/home/property-list";
import { DEFAULT_SEARCH_PARAMS } from "constants/general";
import { SearchProperty } from "interface/property.interface";
import { useAppDispatch, useAppSelector } from "store";
import { getAllProperties } from "store/property/extra";
import { homeSelector } from "store/property/selector";

export const SearchContext = createContext<{
  searchParams?: SearchProperty;
  setSearchParams?: Dispatch<SetStateAction<SearchProperty>>;
}>({});

const Home = () => {
  const dispatch = useAppDispatch();
  const { currentPage, totalPages, isFetchingProperties } =
    useAppSelector(homeSelector);
  const [page, setPage] = useState(currentPage ?? 1);
  const [searchParams, setSearchParams] = useState<SearchProperty>(
    DEFAULT_SEARCH_PARAMS
  );

  useEffect(() => {
    if (Object.values(searchParams).some(Boolean)) {
      dispatch(getAllProperties({ page: 1, ...searchParams }));
    } else {
      dispatch(getAllProperties({ page }));
    }
  }, [page, searchParams]);

  return (
    <Stack minHeight="70vh" spacing={10} alignItems="center">
      <Stack minWidth="100%" spacing={4}>
        <SearchContext.Provider value={{ searchParams, setSearchParams }}>
          <PropertyFilters />
        </SearchContext.Provider>
        {isFetchingProperties ? <SkeletonLoader /> : <PropertyList />}
      </Stack>

      {totalPages ? (
        <Pagination
          page={page}
          count={totalPages}
          variant="outlined"
          shape="rounded"
          sx={{ width: "fit-content" }}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: () => <Button>Previous</Button>,
                next: () => <Button>Next</Button>
              }}
              {...item}
            />
          )}
          onChange={(_, value) => {
            setPage(value);
          }}
        />
      ) : null}
    </Stack>
  );
};

export default Home;
