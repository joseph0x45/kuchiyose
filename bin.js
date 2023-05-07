#!/usr/bin/env node

import inquirer from "inquirer"
import path from "path"
import { templates } from "./utils.js"

const TEMPLATES_PATH = path.join(import.meta.url, "/templates")

const args = process.argv
const is_interactive = args[2] === "inter" || false

if(is_interactive){
    console.log("Welcome to kuchiyose. Contribute to this package at https://github.com/TheWisePigeon/kuchiyose")
    process.exit(0)
}

const template_name = args[2]
if(!templates.find(template=> template.name===template_name)){
    console.log(`No template named ${template_name}!`)
    console.log("See list of templates at https://github.com/TheWisePigeon/kuchiyose/templates.md")
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
        console.log(answer)
    })
