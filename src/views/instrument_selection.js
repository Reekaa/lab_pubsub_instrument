const PubSub = require('../helpers/pub_sub.js');


class InstrumentSelection {

  constructor() {
  this.element = document.querySelector('select#instrument-families');
  }

  subscribeForListOfInstrumentsAndPublishUsersSelection(){
    PubSub.subscribe('Instruments:all-instruments-ready', (event) => {
      const allInstruments = event.detail;
      console.log(allInstruments);
      this.populate(allInstruments);
    })

    this.element.addEventListener('change', (event) =>{
      const selectedIndex = event.target.value;
      PubSub.publish('InstrumentSelection:change', selectedIndex);
    });
  };


  populate(instrumentData){
    instrumentData.forEach((instrument, index) => {
      const option = document.createElement('option');
      option.textContent = instrument.name;
      option.value = index;
      this.element.appendChild(option);
    })
  }
}

module.exports = InstrumentSelection;
