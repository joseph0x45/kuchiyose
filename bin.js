#!/usr/bin/env node
//console.log("Welcome to kuchiyose. Contribute to this package at https://github.com/TheWisePigeon/kuchiyose")

const path = require("path")
const TEMPLATES_PATH = path.join(__dirname, "/templates")

const args = process.argv
const is_interactive = args[2] === "inter" || false
