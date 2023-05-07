#!/usr/bin/env node

const repo_url = "https://github.com/TheWisePigeon/kuchiyose"
const issues_url = "https://github.com/TheWisePigeon/kuchiyose/issues"

import inquirer from "inquirer"
import fs from "fs-extra"
const { copySync, mkdirSync } = fs
import { join, dirname } from "path"
import { templates } from "./utils.js"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const TEMPLATES_PATH = join(__dirname, "/templates")

const args = process.argv
const is_interactive = args[2] === "inter" || false

if(is_interactive){
    console.log(`Welcome to kuchiyose. Contribute to this package at ${repo_url}`)
    process.exit(0)
}

const template_name = args[2]
const app_dir = args[3]
if(!templates.find(template=> template.name===template_name)){
    console.log(`No template named ${template_name}!`)
    console.log(`See list of templates at ${repo_url}/templates.md`)
    process.exit(0)
}

inquirer
    .prompt([
        {
            type:"input",
            name:"app_dir",
            message:"Where do you want to create your project? (Leave blank or use . to create in current directory)"
        }
    ])
    .then((answer)=>{
        try {
            if(answer.app_dir===""||answer.app_dir==="."){
                console.log("Copying files")
                copySync(`${TEMPLATES_PATH}/${template_name}`, '.')
                console.log('Project created')
                console.log('Now run `pnpm/npm/yarn install` and happy coding!')
                console.log('Contribute to kuchiyose and add your own templates at ')
                process.exit(0)
            }
            console.log("Copying files")
            copySync(`${TEMPLATES_PATH}/${template_name}`, answer.app_dir)
            console.log(`Your project was created at ${answer.app_dir}`)
            console.log(`Now run cd ${answer.app_dir}, pnpm/npm/yarn install and happy coding!`)
            process.exit(0)
        } catch (_) {
            console.log("Something went wrong when creating your project")
            console.log(`Please report a bug at ${issues_url}`)
        }
    })
