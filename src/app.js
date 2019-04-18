const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const InstrumentSelection = require('./views/instrument_selection.js');
const DisplaySelection = require('./views/display_selection.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');



  const instrumentDropdown = new InstrumentSelection();
  instrumentDropdown.subscribeForListOfInstrumentsAndPublishUsersSelection();

  const displayInfo = new DisplaySelection();
  displayInfo.displayInstrumentInfoForTheUserSelection();
  
  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.publishingInstrumentDataforUserSelection();

});
