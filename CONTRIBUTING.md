# Guidance on how to contribute

> All contributions to this project will be released under the CC0 public domain
> dedication. By submitting a pull request or filing a bug, issue, or
> feature request, you are agreeing to comply with this waiver of copyright interest.
> Details can be found in our [LICENSE](LICENSE).


There are two primary ways to help:
 - Contribute a new term and definition
 - Changing the code-base.


## Contribute a new term and definition

New terms should be added to the `content/terms` directory as new markdown files, where
the name of the markdown file is the term, lowercased and hyphenated.

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

For example, for the term `Command-Line Interface` the file might be:

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

If you see that the glossary is missing a term, we would love your help in adding it!

Here are the steps you need to take to contribute a term:

### How to Make a PR from the GitHub web interface

Go to [content/terms] and click the "Add File" button in the GitHub interface.

Name the file `<your-new-term>.md` for example if you were adding a definition for `Command-Line Interface` you would name the file `command-line-interface.md`.


Below the file, fill out the "Propose new file" inputs with information about the term you are adding.

Your title might be "Add definition for Command-Line Interface" and your extended description might be: "I didn't see this term defined so I added it, I linked to the wikipedia page because it is a pretty good overview of the concept."

Just share a bit about your reasoning for adding the content. Then click "Propose new file" to create a Pull Request.

Someone will follow up with questions on your PR if there is anything wrong or unclear, and then they'll approve it and merge it and it will go live on the site!

## Changing the code-base

We'd love improvements to the codebase!

Generally speaking, you should fork this repository, make changes in your
own fork, and then submit a pull request. The code should follow any
stylistic and architectural guidelines prescribed by the project. In the
absence of such guidelines, mimic the styles and patterns in the existing
code-base.