import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

// Hooks
import { useAppSelector } from "../../../../hooks";

// Initial State
import INITIAL_STATE, { INITIAL_FILTERS } from "./initialState";

// Types
import SearchFilters from "../types/SearchFilters";
import Activity from "../../../../store/types/activity/Activity";
import Sport from "../../../../store/types/sport/Sport";

// Placeholder
import CREATE_ACTIVITY_SPORTS from "../../../../api/placeholders/CREATE_ACTIVITY_SPORTS";

// Methods
import insideRangePrice from "../methods/insideRangePrice";
import isPointInsideRadius from "../../../../utils/distances/isPointInsideRadius";

interface ContextProps {
  setFilters: Dispatch<SetStateAction<SearchFilters>>;
  filteredActivities: Activity[];
  filters: SearchFilters;
  sports: Sport[];
}

const SearchContext = createContext<ContextProps>(INITIAL_STATE);

interface Props {
  children: React.ReactNode;
}

const SearchProvider = ({ children }: Props) => {
  const publicActivities = useAppSelector(
    (state) => state.activity.publicActivities
  );

  const userLocation = useAppSelector((state) => state.user.user.location);

  const [filters, setFilters] = useState<SearchFilters>(INITIAL_FILTERS);
  const [sports, setSports] = useState<Sport[]>(CREATE_ACTIVITY_SPORTS);
  const [filteredActivities, setFilteredActivities] =
    useState<Activity[]>(publicActivities);

  useEffect(() => {
    // TODO: api call for fetching Sports
    // setSports(//)
    setTimeout(() => {
      setSports(CREATE_ACTIVITY_SPORTS);
    }, 1000);
  }, []);

  useEffect(() => {
    const auxArray = publicActivities.filter(
      (activity) =>
        activity.sport.gid === filters.sport &&
        activity.type === filters.type &&
        insideRangePrice(activity.price, filters.price) &&
        (filters.insideUserArea
          ? isPointInsideRadius(userLocation, activity.location)
          : true)
    );
    setFilteredActivities(auxArray);
  }, [filters]);

  return (
    <SearchContext.Provider
      value={{ filters, setFilters, filteredActivities, sports }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider };
export default SearchContext;