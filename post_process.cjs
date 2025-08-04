const fs = require('fs');
const path = require('path');

const directoryPath = path.resolve(__dirname, 'build');

function postProcess()
{
  fs.readdir(directoryPath, (err, files) => {
    if (err)
    {
      console.error("Error reading directory: ", err);
      return;
    }
    console.log("--post processing--");
    processHtmlFiles(files);
    appendToCxcore();
  });
}

function processHtmlFiles(files)
{
  const htmlFiles = files.filter(file => file.endsWith('html'));
  htmlFiles.forEach(htmlFile => {
    const filePath = path.join(directoryPath, htmlFile);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const scriptContent = extractScript(fileContent);
    if (scriptContent === '')
    {
      if (htmlFile === 'login.html')
      {
        // is expected, that file has no scripts
        return;
      }
      console.warn(`\tWarning: no script content for ${filePath}`);
      return;
    }
    const scriptName = createJsFile(htmlFile, scriptContent);
    if (scriptName === '')
    {
      console.warn(`\tWarning: no scriptName for ${filePath}`);
      return;
    }
    replaceScript(fileContent, filePath, scriptName);
    console.log(`\tSuccessfully extracted scripts from [${htmlFile}] into separate [${scriptName}].`);
  });
}

function appendToCxcore()
{
  const cxcoreFile = path.resolve(directoryPath, 'cxcore.js');
  const content = 'cxCoreInit.promise.then(function(){cxCoreInit();}).catch(function(e){postMessage({type:", m, ",value:e.toString()});})';

  try
  {
    fs.appendFileSync(cxcoreFile, content);
    console.log(`appended cxCoreInit() to build/cxcore.js`);
  }
  catch (err)
  {
    console.error("Failed to append: ", err);
  }
}

function extractScript(fileContent)
{
  const scriptStart = fileContent.indexOf('__sveltekit_');
  if (scriptStart === -1)
    return '';
  var scriptEnd = fileContent.lastIndexOf('</script>');
  scriptEnd -= 6; // getting rid of extra } closing bracket from scriptContent. nasty
  if (scriptEnd === -1)
  {
    console.log('\tCould not match the closing <script> tag');
    return '';
  }
  const scriptContent = fileContent.substring(scriptStart, scriptEnd);
  const containsPromiseAll = scriptContent.indexOf('Promise.all');
  if (containsPromiseAll !== -1)
    return scriptContent;
  else
  {
    console.log('\tCould not find Promise.all call in generated __sveltekit_ script');
    return '';
  }
}

function createJsFile(ogFileName, fileContent)
{
  const name = path.parse(ogFileName).name;
  const filename = name + '_extracted_script.js'
  fs.writeFileSync(directoryPath + '/' + filename, fileContent, (err) => {
    if (err)
    {
      console.log("Error writing extracted script into .js file: ", err);
      return '';
    }
  });
  return filename;
}

function replaceScript(fileContent, filePath, scriptName)
{
  const updatedContent = fileContent.replace(/<script>[\s\S]*?<\/script>/, `<script src="${scriptName}" defer></script>`);
  fs.writeFileSync(filePath, updatedContent, 'utf-8', (err) =>{
    if (err)
      console.log("Failed to write replacedContent instead of inlined script: ", err);
  });
}

postProcess();
