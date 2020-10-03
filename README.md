# developer-glossary

A community-built glossary of technical terms. See it live at [www.glossary.dev](https://www.glossary.dev)

## How to Contribute a new term and definition

If you see that the glossary is missing a term, we would love your help in adding it!

New terms should be added to the `content/terms` directory as new markdown files, where
the name of the markdown file is the term, lowercased and hyphenated. So a definition for "Command-Line Interface" would go in a file named `command-line-interface.md`

Follow this template for the structure of your new definition:

TEMPLATE:
```markdown
---
title: "<Your Term Here>"
date: 2020-10-02T21:23:17-04:00
part-of-speech: <noun|verb|adjective>
synonyms: ["<Optional Synonyms>"]
abbreviation: <Optional Abbreviations or Acronyms>
---

Write out a definition of the term in markdown here.

## Example

> Use your definition in a sentence.

## Further Reading
- [Link Title](https://www.link.com)
```

For example, for the term `Command-Line Interface` the file path would be `content/terms/command-line-interface.md` and the contents might be:

```markdown
---
title: "Command-Line Interface"
date: 2020-10-02T21:23:17-04:00
part-of-speech: noun
synonyms: ["Command Line"]
abbreviation: CLI
---

Refers to the text-input interface commonly used by developers to interact with computers and the services or processes running on them. A command-line interface accepts text input (commands) which execute processes and typically result in text output.

## Example

> System administrators use the command-line interface to SSH into virtual machines running in datacenters.

## Further Reading
- [Command-Line Interface on Wikipedia](https://en.wikipedia.org/wiki/Command-line_interface)
```

Here are the steps you need to take to contribute a term:

### How to Make a PR from the GitHub web interface

Go to [content/terms](https://github.com/do-community/developer-glossary/tree/main/content/terms) and click the "Add File" button in the GitHub interface.

Name the file `<your-new-term>.md` for example if you were adding a definition for `Command-Line Interface` you would name the file `command-line-interface.md`.


Below the file, fill out the "Propose new file" inputs with information about the term you are adding.

Your title might be "Add definition for Command-Line Interface" and your extended description might be: "I didn't see this term defined so I added it, I linked to the wikipedia page because it is a pretty good overview of the concept."

Just share a bit about your reasoning for adding the content. Then click "Propose new file" to create a Pull Request.

Someone will follow up with questions on your PR if there is anything wrong or unclear, and then they'll approve it and merge it and it will go live on the site!

## Contributing code improvements

We'd also love code contributions that beautify the site, make it more accessible and usable, and help it follow good web standards.

### Local Development

The site is statically generated using the [hugo](https://gohugo.io/) framework. To run it locally follow these steps:

1. Fork the repo and clone it down to your local machine
2. [Install hugo](https://gohugo.io/getting-started/installing#readout) if you don't already have it installed.
3. Open a terminal in the root directory of the developer-glossary project and run `hugo server -D`
4. Check that no errors appear in the terminal, it should tell you it is running on localhost:1313. That means you can view the site running locally by going to [http://localhost:1313](http://localhost:1313) in your browser.

You're off to the races! Reference [hugo docs](https://gohugo.io/about/) to learn more and start making code contributions.