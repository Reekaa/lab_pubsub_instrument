const PubSub = require('../helpers/pub_sub.js');

class InstrumentFamilies {

  constructor(data) {
    this.data = data;
    console.log(data);
  }

  publishingInstrumentDataforUserSelection(){
    PubSub.publish('Instruments:all-instruments-ready',this.data)

    PubSub.subscribe('InstrumentSelection:change' ,(event) => {
      const selectedIndex = event.detail;
      console.log(selectedIndex);
      this.publishInstrumentDetails(selectedIndex)
    });
  }

  publishInstrumentDetails(instrumentIndex){
    const selectedInstrument = this.data[instrumentIndex];
    console.log(instrumentIndex);
    PubSub.publish('Instruments:selected-instrument-ready', selectedInstrument);
  };


};

module.exports = InstrumentFamilies;
