#' R2RESUME: Converts Rmarkdown to Beautiful Resume Sites
#'
#' See the \href{https://www.r2resume.com}{Official R2RESUME
#' website} for additional details on using the \code{generate}
#' function.
#'
#' Load an example starter resume template
#'
#'@param template Default is the manzana, but you may declare a different template name
#' for the final look of your resume site. The options include:
#'
#' manzana, limon, circuela, anana, naranja
#'
#'
#'@section Brief:
#'
#'  When called, a new folder is created in your current directory and the requested example
#'  is copied into this folder. Finally, a call is automatically made to render the template
#'  and create a sample resume site.
#'
#'  To edit and further build the template, you may proceed into the directory and manipulate
#'  the .Rmd files. You may also create other .Rmd files and it will be rendered simultaneously
#'
#'
#' @examples
#' Example of calling this function within your document
#' \dontrun{
#'
#' rmarkdown::loadExamples('naranja')
#'
#'
#' }
#' @export
#'



loadExamples <- function(template='manzana',...){
  pkgloc = paste(find.package("r2resume"),"/examples/",sep = "")
  currdir = getwd()
  file_in_ex = paste(pkgloc,template,sep = "")
  if(dir.exists(file_in_ex)){
    file.copy(file_in_ex,currdir,recursive = TRUE)

    #set working directory as the copied example
    setwd(template)

    #build the resume site and view
    indexrmd = "index.Rmd"
    if(file.exists(indexrmd)){
      rmarkdown::render_site(".",encoding = "UTF-8")
      rstudioapi::viewer('site/index.html',height = "maximize")
    }
    else{
      stop("The example may have not been copied appropriately. Please email idonshayo@gmail.com")
    }


  }
  else{
    stop("The requested template does not exist. Options include: manzana, limon, circuela, anana, naranja.")
  }


}


