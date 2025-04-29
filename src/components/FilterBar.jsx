function FilterBar({
  searchName,
  setSearchName,
  selectedAge,
  setSelectedAge,
  totalModel,
  selectedCountry,
  setSelectedCountry,
  countries,
  countryCount,
  selectedStatus,
  setSelectedStatus,
}) {
  return (
    <section className="filterBar">
      <h3> Filter </h3>
      <div className="row g-3">
        <div className="col-12 col-lg-3">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Search by name..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
        <div className="col-12 col-lg-3">
          <select
            className="form-select"
            value={selectedAge}
            onChange={(e) => setSelectedAge(e.target.value)}
          >
            <option disabled value="">
              Age
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36-45">36-45</option>
            <option value="46-55">46-55</option>
            <option value="56-65">56-65</option>
          </select>
        </div>
        <div className="col-12 col-lg-3">
          <select
            className="form-select"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            <option disabled value="">
              Country
            </option>
            {countries.map((country, id) => (
              <option value={country} key={id}>
                {country} ({countryCount[country]})
              </option>
            ))}
          </select>
        </div>
        <div className="col-12 col-lg-3">
          <select
            className="form-select"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option disabled value="">
              Status
            </option>
            <option value="online">Online</option>
            <option value="busy">Busy</option>
            <option value="offline">Offline</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {searchName && (
            <div className="isMySearch">
              <p>
                <span>You are searching for:- </span> {searchName}
                <span> Match ({totalModel})</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FilterBar;
