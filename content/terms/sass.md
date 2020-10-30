---
title: "SASS/SCSS"
date: 2020-10-30
part-of-speech: noun
synonyms: ["the indented syntax"]
abbreviation: SASS, SCSS
---

SASS or Syntactically Awesome Stylesheets is a preprocessor stylesheet language that’s compiled into CSS. It gives you more power while writing CSS, and includes variables, functions, nesting, mixins, and more. SCSS (Sassy CSS) is another style of SASS.

## Example

> The following example is implementation of SCSS
>
>     /* SCSS */
>     .card {
>       padding: 2rem 1rem;
>       box-shadow: 0 5px 10px #0002;`
>
>       &__title {`
>           font-size: 1.3rem;
>       }
>     }
>     
>     /* Compiled CSS */
>     .card {
>       padding: 2rem 1rem;
>       box-shadow: 0 5px 10px #0002;`
>     }
>
>     .card__title {
>       font-size: 1.3rem;
>     }

## Further Reading
- [Sass Documentation](https://sass-lang.com/documentation)
- [Sass Wiki](https://en.wikipedia.org/wiki/Sass_(stylesheet_language))
