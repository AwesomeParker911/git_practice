// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = function(num,DNA){
    return {
      specimenNum: num,
      dna: DNA,
      mutate() {
        const randomindex = Math.floor(Math.random() * this.dna.length);
        const newbase = returnRandBase();
        while (this.dna[randomindex] === newbase) {
          newbase = returnRandBase();
        }
        this.dna = newbase;
        return this.dna;
      },
      compareDNA(otherDNA) {
        let sameDNA = 0;
        for (let x = 0; x <= this.dna.length; x++) {
          if (this.dna[x] === otherDNA[x]){
            sameDNA ++
          }
        }
        const percentOfDNAshared = (sameDNA / this.dna.length) * 100;
        const percentageTo2Deci = percentOfDNAshared.toFixed(2);
        return `${this.specimenNum} and ${otherDNA.specimanNum} have ${percentageTo2Deci}% DNA in common.`
      },
  
      willLikelySurvive(){
        let surviveDNA = 0;
        for (let i = 0; i <= this.dna.length; i++) {
          if(this.dna[i] === 'C' || this.dna[i] === 'G') {
            surviveDNA ++
          }
        };
        if (surviveDNA/this.dna.length >= 0.6) {
          return true;
        } else {
          return false;
        }
      },
    }
  };
  
  const survivingSpecimen = [];
  let idCounter = 1;
  
  while (survivingSpecimen.length < 30) {
    let newOrg = pAequorFactory(idCounter, mockUpStrand());
    if (newOrg.willLikelySurvive()) {
      survivingSpecimen.push(newOrg);
    }
    idCounter++;
  }
  
  console.log(survivingSpecimen)
  
  
  
  
  
  