# Setup

## Installing Node.js and NPM (Node Package Manager).
Installing TypeScript via NPM (Node Package Manager) is a straightforward process.


## Installing TypeScript via NPM.

### Prerequisites
Before you begin, ensure you have Node.js installed on your system, as NPM comes bundled with Node.js.

### Step 1: Install TypeScript Globally
Open your command line interface (CLI) and run the following command to install TypeScript globally. 
This allows you to use TypeScript in any of your projects.
```bash
npm install -g typescript
```
This Markdown snippet uses a secondary heading (denoted by `##`) for the title of the step and a code block 
(denoted by triple backticks) to display the command line instruction. When rendered in a Markdown viewer, 
this will neatly format the step title and the command.

### Step 2: Verify Installation
To verify the installation, check the version of TypeScript by running:
```bash
tsc --version
```
In this Markdown snippet, "##" is used for a secondary heading, and the command is placed inside a code block 
denoted by triple backticks for proper formatting. When rendered in a Markdown viewer, 
this format will clearly display the step title and the command separately.

### Step 3: Install TypeScript in Your Project (Optional)
To install TypeScript locally in a specific project, navigate to your project's directory and run:
```bash
npm install --save-dev typescript
```
This Markdown snippet uses a secondary heading (denoted by `##`) for the title of the step, 
and a code block (denoted by triple backticks) to display the command line instruction. 
When rendered in a Markdown viewer, this will neatly format the step title and the command.

### Step 4: Initialize a TypeScript Project
Initialize a new TypeScript project by creating a `tsconfig.json` file in your project directory:
```bash
tsc --init
```
This Markdown snippet uses `##` for a secondary heading for the step title and a code block 
(denoted by triple backticks) to display the command. This will be properly formatted when 
rendered in a Markdown viewer, clearly showing the step title and the associated command.

### Conclusion
TypeScript is installed and ready to use either globally or in your specific project. 
You can start using TypeScript by creating ```.ts``` files and compiling them using the 
TypeScript compiler (```tsc``` command). Remember that TypeScript compiles down to JavaScript, 
so you will be working with the generated ```.js``` files in your JavaScript environment.


## Setting up a basic TypeScript project.


## Introduction to TypeScript configuration (tsconfig.json).