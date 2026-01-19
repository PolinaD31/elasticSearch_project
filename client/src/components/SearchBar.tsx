type Props = {
    searchTerm: string
    handleChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
}

const SearchBar = ({ searchTerm, handleChange }: Props) => {
    return (
        <div className="flex-1">
            <input
              type="text"
              name="searchTerm"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Type to search..."
              className="input input-bordered w-full pl-10"
            />
          </div>
    )
}

export default SearchBar