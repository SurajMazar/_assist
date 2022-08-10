# Helper to generate components for vue , react , next 

## Get started

``` yarn add srz -D ```  or <br/>
``` npm i srz -d ```

## Recommended Usage

```
  npm i srz -g
```

Can be executed from anywhere with

```
_assist 
```

command

### Example

```
_assist make:rc Example
```

Generates react component inside src directory

## Available commands 

```
Make commands:
    make:rc         - REACT COMPONENT
    make:vc         - VUE COMPONENT
    make:lrc        - LARAVEL REACT COMPONENT
    make:lvc        - LARAVEL VUE COMPONENT
    make:nxc        - NEXT COMPONENT
    make:nxp        - NEXT PAGE
    make:nxpd       - NEXT DYNAMIC PAGE
    make:nxp-ssr    - NEXT PAGE WITH SSR
    make:nxpd-ssr   - NEXT DYNAMIC PAGE WITH SSR

Flags:
--help          - to see the available commands
--ts            - for typescript support
--name={name}   - component name

```

## Usage with laravel

```
npx srz make:lrc components/example 
``` 
for react
this command will create a react component inside `resources/js/component/example` with basic structure




## Usage with vue and react projects 

```
npx srz make:rc components/example 
```
this command will create a react component inside `src/component/example` with basic structure 

similarly for vue

```
npx srz make:vc components/example 
```



## Usage with NEXT JS

for next components

```
npx srz make:nxc components/example 
```


for next pages

```
npx srz make:nxp blog 
```

for next dynamic pages

```
npx srz make:nxpd blog/blogId
```

for next SSR pages

```
npx srz make:nxpd-ssr blog
```

for next SSR dynamic pages

```
npx srz make:nxpd-ssr blog/blogId
```




## For typescript support

```
  npx srz make:rc component/example --ts
```

Add `--ts` flag to generate typescript supported components





## Named components

```
  npx srz make:rc component/Blog/Create --name=CreateBlog
```

Add `--name={componentName}` flag for naming the component




