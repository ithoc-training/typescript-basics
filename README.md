# TypeScript Basics

## Configuration

### Automatic Watch Mechanism
To enable the TypeScript compiler to recompile a ts file once it 
has been changed, follow this recipy.

1. Initialise the project using TypeScript configuration: ```batch tsc --init```.
2. Uncomment and define ````"rootDir": "./src",```` and ```"outDir": "./dist",```.
3. Create folders ```src``` and ```dist``` in project root.
4. Watch changes calling ```tsc --watch```.
5. Watch execution using ```node --watch dist/YOUR_JS_FILE.js```.


