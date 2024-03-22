import fs from 'fs';
import path from 'path';

export function getModelFile(id){
  const pathToFolder = `./models/${id}/`;
  
  fs.readdir(pathToFolder, (err, files) => {
    if(err) {
      console.log(err);
      return;
    }
    files.forEach(file => {
      const filePath = path.join(pathToFolder, file);
      if(filePath.endsWith('.h5')){
        return filePath;
      }
    })
  })
  return None;
    
}