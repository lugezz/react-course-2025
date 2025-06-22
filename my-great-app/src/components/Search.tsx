
type SearchProps = {
  searchTerm: string;
  setsearchTerm: (value: string) => void;
};

const Search = ({searchTerm, setsearchTerm}: SearchProps) => {
  return (
    <div className='search'>
        <div>
            <img src="search.svg" alt="search"/>
            <input
                type="text"
                placeholder="Search through thousands of movies"
                value={searchTerm}
                onChange={(e) => setsearchTerm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search