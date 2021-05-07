(function () {
    let countriesData = null;
  
    let elementIds = {
      confirmed: "confirmed",
      active: "active",
      recovered: "recovered",
      deaths: "deaths",
      deltaconfirmed: "deltaconfirmed",
      deltarecovered : "deltarecovered",
      deltadeaths : "deltadeaths",
      tested : "tested",
    };
  
    function fetchData() {
      const apiURL = "https://api.covid19india.org/data.json";
      fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
          let summaryData = data.statewise[15];
// conformed
          document.getElementById(elementIds.confirmed).textContent = Number(
            summaryData.confirmed
          ).toLocaleString("en-IN");
          document.getElementById(elementIds.deltaconfirmed).textContent = Number(
            summaryData.deltaconfirmed
            ).toLocaleString("en-IN");
            // active
          document.getElementById(elementIds.active).textContent = Number(
            summaryData.active
          ).toLocaleString("en-IN");
        
// recover
          document.getElementById(elementIds.recovered).textContent = Number(
            summaryData.recovered
          ).toLocaleString("en-IN");
          document.getElementById(elementIds.deltarecovered).textContent = Number(
            summaryData.deltarecovered
          ).toLocaleString("en-IN");
          // deaths
          document.getElementById(elementIds.deltadeaths).textContent = Number(
            summaryData.deltadeaths
          ).toLocaleString("en-IN");
          document.getElementById(elementIds.deaths).textContent = Number(
            summaryData.deaths
            ).toLocaleString("en-IN");
            document.getElementById(elementIds.tested).textContent = Number(summaryData.tested
              ).toLocaleString("en-IN");
         
        })
        .catch((error) => console.log("api data fetch error", error));
    }
    fetchData();
  })();
  