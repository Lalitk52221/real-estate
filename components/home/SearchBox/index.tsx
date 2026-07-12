import SearchForm from "./SearchForm";
import SearchTabs from "./SearchTabs";

export default function SearchBox() {
  return (
    <div className="mt-12 w-full max-w-6xl">
      <SearchTabs />

      <SearchForm />
    </div>
  );
}