import { buildPath } from "../src";
import { readJSONFile } from "../src/utils/jsonUtils";

describe('test', () => {
  // https://tokenlist.dojoswap.xyz/vic.json
  test('readJSONFile', async () => {
    const path = buildPath('src/tokens',`kurama-test.json`)
    console.log("path", path);
    
    const file = readJSONFile(path);
    console.log("file" , file);
    
    
  })

})
