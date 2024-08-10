const path = require('path');

// normalize path
const normalize = path.normalize("C:/Users/bsoni/OneDrive/Desktop/W.T///LAB-17");
console.log("Normalized path::",normalize); 

//exetention name

const joinPath = path.join("C:/Users/bsoni/OneDrive/Desktop/W.T/LAB-17","C:/Users/bsoni/OneDrive/Desktop/W.T/LAB-17");
console.log("join path::",joinPath); 

//base name

const basename = path.basename("C:/Users/bsoni/OneDrive/Desktop/W.T/LAB-17");
console.log("Basename ::",basename); 

//directory name

const directoryPath = path.dirname("C:/Users/bsoni/OneDrive/Desktop/W.T/LAB-17");
console.log("directory path::",directoryPath); 