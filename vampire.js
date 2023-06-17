class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let currentVamp = this;
    let count = 0;
    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      count++;
    }
    return count;
  }
  
  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    }
    return false;
  }
  
  /** Stretch **/
  
  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
//     if (!this.creator) {
//       return this;
//     }
//     let currentAncestor = this.creator;
//     while (currentAncestor.creator) {
//       if (Object.is(currentAncestor, vampire)) {
//         return vampire;
//       }
//       let currentNode = currentAncestor;
//       let uncheckedOffspring = currentNode.offspring.filter(descendant => !Object.is(descendant, this));
//       console.log(uncheckedOffspring);
//       let downwardIndex = 0;
//       while (currentNode.uncheckedOffspring.length) {
//         let spanIndex = 0;
//         while (spanIndex < currentNode.uncheckedOffspring.length) {
//           const descendant = currentNode.uncheckedOffspring[spanIndex];
//           if (Object.is(descendant, vampire)) {
//             return currentAncestor;
//           }
//           spanIndex++;
//         }
//         downwardIndex++;
//         uncheckedOffspring = currentNode.offspring;
//         currentNode = currentNode.uncheckedOffspring[downwardIndex];
//       }
//       currentAncestor = currentAncestor.creator;
//     }
//     return this;
  }
}

module.exports = Vampire;

