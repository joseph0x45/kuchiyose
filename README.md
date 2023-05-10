# kuchiyose
Kuchiyose is yet another project scaffolder. It is named after the [invocation technique in Naruto](https://naruto.fandom.com/fr/wiki/Invocation)

Kuchiyose lets you invoke starter templates on your machine in a blink of an eye.

## Usage
- Invoke a template

`npx kuchiyose <template_name> <location>`

Example:
`npx kuchiyose kitty my_app` invokes the sveltekit+tailwind template in my_app directory

- Get list of all templates

`npx kuchiyose templates`

## Contributions
Contributing to kuchiyose is really simple. Clone the repo and then create your branch. Create your starter template in the `templates` directory. Then open the utils.js file and add you should find a constant named `templates`.

```js
  export const templates = [
    {
        name:"kitty",
        description:"Barebones Sveltekit and tailwind project",
        author:"thewisepigeon <https://github.com/TheWisePigeon>",
        tags:["sveltekit", "svelte", "tailwind"]
    },
    {
        name:"rustix",
        description:"Actix&tokio web project",
        author:"thewisepigeon <https://github.com/TheWisePigeon>",
        tags:["rust", "api", "backend", "actix", "actix-web"]
    }
]

```
Add your template's informations at the bottom of the array, following the defined schema. And that's it.
