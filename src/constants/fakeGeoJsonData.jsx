const fakeGeoJsonData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { energy: getRandomEnergyValue() },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [2.3522, 48.8566], // Paris, France
            [2.4194, 48.8566],
            [2.4194, 48.8996],
            [2.3522, 48.8996],
            [2.3522, 48.8566], // Closing the polygon
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { energy: getRandomEnergyValue() },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [10, 50], // Top left corner
            [10, 55], // Bottom left corner
            [20, 55], // Bottom right corner
            [20, 50], // Top right corner
            [10, 50], // Closing the polygon
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Fake Country 1", energy: getRandomEnergyValue() },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [5, 50], // Top left corner
            [5, 55], // Bottom left corner
            [15, 55], // Bottom right corner
            [15, 50], // Top right corner
            [5, 50], // Closing the polygon
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Fake Country 2", energy: getRandomEnergyValue() },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [15, 50], // Top left corner
            [15, 55], // Bottom left corner
            [25, 55], // Bottom right corner
            [25, 50], // Top right corner
            [15, 50], // Closing the polygon
          ],
        ],
      },
    },
  ],
};

export default fakeGeoJsonData;
function getRandomEnergyValue() {
  return Math.random() * 100; // Generate a random energy value between 0 and 100
}
