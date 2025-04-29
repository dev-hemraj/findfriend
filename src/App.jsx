import { useState } from "react";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import ModelCard from "./components/ModelCard";
import ModelCategory from "./components/ModelCategory";
import StatsBar from "./components/StatsBar";
import modelData from "./data/modelData";

function App() {
  // Filter : By input name  🛠 States
  const [searchName, setSearchName] = useState("");
  // Filter: By AGE  🛠 States
  const [selectedAge, setSelectedAge] = useState("");
  // Filter: By Country  🛠 States
  const [selectedCountry, setSelectedCountry] = useState("");

  // Filter: By Status
  const [selectedStatus, setSelectedStatus] = useState("");

  // This will count model number according country
  const countryCount = {}; // 🛠 Make Country Count Object
  modelData.forEach((model) => {
    countryCount[model.country] = (countryCount[model.country] || 0) + 1;
  });

  // Get all get Country name
  const countries = [...new Set(modelData.map((model) => model.country))];

  // Filter modelData first
  const filterModels = modelData.filter((model) => {
    const matchName = model.name
      .toLowerCase()
      .includes(searchName.toLowerCase());

    let matchAge = true; // set true for age in first
    if (selectedAge) {
      const [min, max] = selectedAge.split("-").map(Number);
      matchAge = model.age >= min && model.age <= max;
    }
    let matchCountry = true; // set true first in country
    if (selectedCountry) {
      matchCountry = model.country === selectedCountry;
    }
    let matchStatus = true; // set Status True
    if (selectedStatus) {
      matchStatus =
        model.status.toLowerCase() === selectedStatus.toLocaleLowerCase();
    }

    return matchName && matchAge && matchCountry && matchStatus;
  });
  // Then map it to ModelCard
  const modelDetail = filterModels.map((modelinfo) => {
    return (
      <ModelCard
        key={modelinfo.id}
        img={{ src: modelinfo.image, alt: `${modelinfo.name}` }}
        country={modelinfo.country}
        status={modelinfo.status}
        modelName={modelinfo.name}
        modelAge={modelinfo.age}
      />
    );
  });

  // This is for find number of online model
  const onlineCount = modelData.filter(
    (liveModel) => liveModel.status === "online"
  ).length;

  return (
    <main className="container">
      <Header />
      <StatsBar totalModel={modelData.length} onlineModel={onlineCount} />
      <FilterBar
        searchName={searchName}
        setSearchName={setSearchName}
        selectedAge={selectedAge}
        setSelectedAge={setSelectedAge}
        totalModel={modelDetail.length}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        countries={countries}
        countryCount={countryCount}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
      />
      <ModelCategory title="Meet Our Model" />
      {modelDetail.length > 0 ? (
        <div className="row">{modelDetail}</div>
      ) : (
        <div className="nofounnd">
          <h2>Oops! 😢😢 There are no model that meet your search criteria!</h2>
          <p>Please try a new search </p>
        </div>
      )}
    </main>
  );
}

export default App;
