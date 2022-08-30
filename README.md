![](https://r2resumer.coursewhiz.org/img/logo.png)

# r2resume 0.1 R package
 

## An R package that converts rmarkdown to beautiful resume sites


![r2resume](https://r2resumer.coursewhiz.org/img/intro-img.png)

Please visit https://r2resumer.coursewhiz.org/ or http://coursewhiz.org/mainsite/r2resume.html for complete information regarding this package.

# Installation and Use

```{r}
#You need the devtools package

install.packages("devtools");
library(devtools);

#Install the r2resume package

install_github("oobianom/r2resume")

#Load the library

library(r2resume)

#Use - start with an example
##This copies the naranja resume template to your current directory
##Other templates include - manzana, limon, circuela, anana, naranja

loadExamples('naranja')

#Generate your resume website

rmarkdown::render_site('.', encoding = 'UTF-8')

```

# Check out some example of the outputs

## Demo 1 produced by r2resume package
[link to demo1](https://coursewhiz.org/r2resume/examples/naranja/index.html)

## Demo 2 produced by r2resume package
[link to demo2](https://r2resumer.coursewhiz.org/examples/limon/index.html)

## Demo 3 produced by r2resume package
[link to demo3](https://r2resumer.coursewhiz.org/examples/anana/index.html)

## Demo 4 produced by r2resume package
[link to demo4](https://r2resumer.coursewhiz.org/examples/circuela/index.html)

## Demo 5 produced by r2resume package
[link to demo5](https://r2resumer.coursewhiz.org/examples/manzana/index.html)
