# GitHub Readme Testimonials

Show off nice complements from your users (that you are especially proud of.)

<div align="center">
  <img src="https://github-readme-testimonials.vercel.app/api?comments=WwogICAgICAnaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy83NDcjaXNzdWVjb21tZW50LTY4MjExNjE3MScsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzMyNSNpc3N1ZWNvbW1lbnQtNjE0NzQ3NDA5IiwKICAgICAgImh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdhL3dhLWF1dG9tYXRlLW5vZGVqcy9pc3N1ZXMvMjk3I2lzc3VlY29tbWVudC02MTIxODM4NDkiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy8zMDQjaXNzdWVjb21tZW50LTYxMjk3NTAwMyIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzk4I2lzc3VlY29tbWVudC01ODMyMzcxMTUiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy80MDcjaXNzdWVjb21tZW50LTYyNTA1MjMwNCIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzI3NyNpc3N1ZWNvbW1lbnQtNjA5NTM4NzI0IiwKICAgICAgImh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdhL3dhLWF1dG9tYXRlLW5vZGVqcy9pc3N1ZXMvMjYxI2lzc3VlY29tbWVudC02MDk0MDM0MDQiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy8yNjAjaXNzdWVjb21tZW50LTYwOTU1MDA2NyIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzgyI2lzc3VlY29tbWVudC01ODYxMzY5OTIiCiAgICBd"/>
</div>

## Setup

1. Make an array of issue comment links.

    Grab a list of comments that you're proud of. For example:

    ```javascript
    [
          'https://github.com/open-wa/wa-automate-nodejs/issues/747#issuecomment-682116171',
          "https://github.com/open-wa/wa-automate-nodejs/issues/325#issuecomment-614747409",
          "https://github.com/open-wa/wa-automate-nodejs/issues/297#issuecomment-612183849",
          "https://github.com/open-wa/wa-automate-nodejs/issues/304#issuecomment-612975003",
          "https://github.com/open-wa/wa-automate-nodejs/issues/98#issuecomment-583237115",
          "https://github.com/open-wa/wa-automate-nodejs/issues/407#issuecomment-625052304",
          "https://github.com/open-wa/wa-automate-nodejs/issues/277#issuecomment-609538724",
          "https://github.com/open-wa/wa-automate-nodejs/issues/261#issuecomment-609403404",
          "https://github.com/open-wa/wa-automate-nodejs/issues/260#issuecomment-609550067",
          "https://github.com/open-wa/wa-automate-nodejs/issues/82#issuecomment-586136992",
          "https://github.com/open-wa/wa-automate-nodejs/issues/520#issue-631323102",
          "https://github.com/open-wa/wa-automate-nodejs/issues/576#issuecomment-650398937",
          "https://github.com/open-wa/wa-automate-nodejs/issues/295#issuecomment-612124006"
        ]
    ```

2. Encode the array as Base64

    Go to [https://codebeautify.org/json-to-base64-converter](https://codebeautify.org/json-to-base64-converter) and paste your array on the left. Click `JSON to Base64`. Copy the string on the right.

3. Make your Github Readme Testimonial URL

    Paste the base64 as the param `comments` on `https://github-readme-testimonials.vercel.app/api`. [For the above example](https://github-readme-testimonials.vercel.app/api?comments=WwogICAgICAnaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy83NDcjaXNzdWVjb21tZW50LTY4MjExNjE3MScsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzMyNSNpc3N1ZWNvbW1lbnQtNjE0NzQ3NDA5IiwKICAgICAgImh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdhL3dhLWF1dG9tYXRlLW5vZGVqcy9pc3N1ZXMvMjk3I2lzc3VlY29tbWVudC02MTIxODM4NDkiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy8zMDQjaXNzdWVjb21tZW50LTYxMjk3NTAwMyIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzk4I2lzc3VlY29tbWVudC01ODMyMzcxMTUiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy80MDcjaXNzdWVjb21tZW50LTYyNTA1MjMwNCIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzI3NyNpc3N1ZWNvbW1lbnQtNjA5NTM4NzI0IiwKICAgICAgImh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdhL3dhLWF1dG9tYXRlLW5vZGVqcy9pc3N1ZXMvMjYxI2lzc3VlY29tbWVudC02MDk0MDM0MDQiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy8yNjAjaXNzdWVjb21tZW50LTYwOTU1MDA2NyIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzgyI2lzc3VlY29tbWVudC01ODYxMzY5OTIiCiAgICBd):

    `https://github-readme-testimonials.vercel.app/api?comments=WwogICAgICAnaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy83NDcjaXNzdWVjb21tZW50LTY4MjExNjE3MScsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzMyNSNpc3N1ZWNvbW1lbnQtNjE0NzQ3NDA5IiwKICAgICAgImh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdhL3dhLWF1dG9tYXRlLW5vZGVqcy9pc3N1ZXMvMjk3I2lzc3VlY29tbWVudC02MTIxODM4NDkiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy8zMDQjaXNzdWVjb21tZW50LTYxMjk3NTAwMyIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzk4I2lzc3VlY29tbWVudC01ODMyMzcxMTUiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy80MDcjaXNzdWVjb21tZW50LTYyNTA1MjMwNCIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzI3NyNpc3N1ZWNvbW1lbnQtNjA5NTM4NzI0IiwKICAgICAgImh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdhL3dhLWF1dG9tYXRlLW5vZGVqcy9pc3N1ZXMvMjYxI2lzc3VlY29tbWVudC02MDk0MDM0MDQiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy8yNjAjaXNzdWVjb21tZW50LTYwOTU1MDA2NyIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzgyI2lzc3VlY29tbWVudC01ODYxMzY5OTIiCiAgICBd`

4. Paste the link in your Github profile as an image tag. The example below shows how to neatly centre the comment.

    ```html
    <div align="center">
      <img src="https://github-readme-testimonials.vercel.app/api?comments=WwogICAgICAnaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy83NDcjaXNzdWVjb21tZW50LTY4MjExNjE3MScsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzMyNSNpc3N1ZWNvbW1lbnQtNjE0NzQ3NDA5IiwKICAgICAgImh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdhL3dhLWF1dG9tYXRlLW5vZGVqcy9pc3N1ZXMvMjk3I2lzc3VlY29tbWVudC02MTIxODM4NDkiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy8zMDQjaXNzdWVjb21tZW50LTYxMjk3NTAwMyIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzk4I2lzc3VlY29tbWVudC01ODMyMzcxMTUiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy80MDcjaXNzdWVjb21tZW50LTYyNTA1MjMwNCIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzI3NyNpc3N1ZWNvbW1lbnQtNjA5NTM4NzI0IiwKICAgICAgImh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdhL3dhLWF1dG9tYXRlLW5vZGVqcy9pc3N1ZXMvMjYxI2lzc3VlY29tbWVudC02MDk0MDM0MDQiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy8yNjAjaXNzdWVjb21tZW50LTYwOTU1MDA2NyIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzgyI2lzc3VlY29tbWVudC01ODYxMzY5OTIiCiAgICBd"/>
    </div>
    ```

Congrats! Now you have a working testimonials section on your Github readme. A random comment from the array will be shown and requests are cached for 2 hours by default. You can turn the cache off (and in turn get a new comment every time you refresh the page) by adding `&noCache=true` to the end of the URL.

## No Cache Demo

<div align="center">
  <img src="https://github-readme-testimonials.vercel.app/api?comments=WwogICAgICAnaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy83NDcjaXNzdWVjb21tZW50LTY4MjExNjE3MScsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzMyNSNpc3N1ZWNvbW1lbnQtNjE0NzQ3NDA5IiwKICAgICAgImh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdhL3dhLWF1dG9tYXRlLW5vZGVqcy9pc3N1ZXMvMjk3I2lzc3VlY29tbWVudC02MTIxODM4NDkiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy8zMDQjaXNzdWVjb21tZW50LTYxMjk3NTAwMyIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzk4I2lzc3VlY29tbWVudC01ODMyMzcxMTUiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy80MDcjaXNzdWVjb21tZW50LTYyNTA1MjMwNCIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzI3NyNpc3N1ZWNvbW1lbnQtNjA5NTM4NzI0IiwKICAgICAgImh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdhL3dhLWF1dG9tYXRlLW5vZGVqcy9pc3N1ZXMvMjYxI2lzc3VlY29tbWVudC02MDk0MDM0MDQiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy8yNjAjaXNzdWVjb21tZW50LTYwOTU1MDA2NyIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzgyI2lzc3VlY29tbWVudC01ODYxMzY5OTIiCiAgICBd&noCache=true&t=1"/>
  <img src="https://github-readme-testimonials.vercel.app/api?comments=WwogICAgICAnaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy83NDcjaXNzdWVjb21tZW50LTY4MjExNjE3MScsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzMyNSNpc3N1ZWNvbW1lbnQtNjE0NzQ3NDA5IiwKICAgICAgImh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdhL3dhLWF1dG9tYXRlLW5vZGVqcy9pc3N1ZXMvMjk3I2lzc3VlY29tbWVudC02MTIxODM4NDkiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy8zMDQjaXNzdWVjb21tZW50LTYxMjk3NTAwMyIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzk4I2lzc3VlY29tbWVudC01ODMyMzcxMTUiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy80MDcjaXNzdWVjb21tZW50LTYyNTA1MjMwNCIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzI3NyNpc3N1ZWNvbW1lbnQtNjA5NTM4NzI0IiwKICAgICAgImh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdhL3dhLWF1dG9tYXRlLW5vZGVqcy9pc3N1ZXMvMjYxI2lzc3VlY29tbWVudC02MDk0MDM0MDQiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy8yNjAjaXNzdWVjb21tZW50LTYwOTU1MDA2NyIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzgyI2lzc3VlY29tbWVudC01ODYxMzY5OTIiCiAgICBd&noCache=true&t=2"/>
  <img src="https://github-readme-testimonials.vercel.app/api?comments=WwogICAgICAnaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy83NDcjaXNzdWVjb21tZW50LTY4MjExNjE3MScsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzMyNSNpc3N1ZWNvbW1lbnQtNjE0NzQ3NDA5IiwKICAgICAgImh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdhL3dhLWF1dG9tYXRlLW5vZGVqcy9pc3N1ZXMvMjk3I2lzc3VlY29tbWVudC02MTIxODM4NDkiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy8zMDQjaXNzdWVjb21tZW50LTYxMjk3NTAwMyIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzk4I2lzc3VlY29tbWVudC01ODMyMzcxMTUiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy80MDcjaXNzdWVjb21tZW50LTYyNTA1MjMwNCIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzI3NyNpc3N1ZWNvbW1lbnQtNjA5NTM4NzI0IiwKICAgICAgImh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuLXdhL3dhLWF1dG9tYXRlLW5vZGVqcy9pc3N1ZXMvMjYxI2lzc3VlY29tbWVudC02MDk0MDM0MDQiLAogICAgICAiaHR0cHM6Ly9naXRodWIuY29tL29wZW4td2Evd2EtYXV0b21hdGUtbm9kZWpzL2lzc3Vlcy8yNjAjaXNzdWVjb21tZW50LTYwOTU1MDA2NyIsCiAgICAgICJodHRwczovL2dpdGh1Yi5jb20vb3Blbi13YS93YS1hdXRvbWF0ZS1ub2RlanMvaXNzdWVzLzgyI2lzc3VlY29tbWVudC01ODYxMzY5OTIiCiAgICBd&noCache=true&t=3"/>
</div>