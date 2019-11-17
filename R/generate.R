#' R2RESUME: Converts Rmarkdown to Beautiful Resume Sites
#'
#' See the \href{https://www.r2resume.com}{Official R2RESUME
#' website} for additional details on using the \code{generate}
#' function.
#'
#' There is nothing extremely fancy about \code{generate},
#' it practically provides a shortcut to calling the already known
#' \code{rmarkdown::render_site} function with predefined arguments so that
#' the user does not have to spend time doing it.
#'
#'@param dir_lib Optional directory name where scripts are to be stored. By default
#' this is set to site_libs.
#'@param css Optional stlysheet name for further beautification of the resume site.
#' Set by default to style.css. You may edit that file and its automatically reflected in
#' the final outlook of your resume site.
#'@param template Optional but probably the most important config. Declare a template name
#' for the final look of your resume site. The options include:
#'
#' manzana, limon, circuela, anana, naranja
#'
#'@param self_contained Optional. Takes input of \code{TRUE} or \code{FALSE}(default). Here, TRUE
#' indicates that all output will be compiled into one single file. FALSE means a library
#' folder will be generated. This is most important for rendering multiple pages simultaneously
#' so that all pages only refer to the library as supposed to containing the full libraries
#' within them.
#'
#'@section Usage and constituents:
#'
#'  You may \code{generate} resume as a single page or a group of pages as a website.
#'  The same declaration as is used in html_document rendering applies here, where for \emph{a single page}
#'  \preformatted{  - include the call in the top portion of your page in the
#'  yml section. An example of this is shown below.}
#'
#'  For \emph{multiple pages}, as you may see in the examples provided with the \code{r2resume::loadExamples} function,
#'  you need to have an \emph{_site.yml} file and an \emph{index.Rmd}. The latter file should basically be one of your
#'  resume pages, other pages may be named differently, but this naming convention does not affect the content
#'  you choose to have in the files. \emph{_site.yml} is where the options are declared. See below for an example.
#'
#'  After creating your pages, use the \code{rmarkdown::render('index.Rmd')} to build single page resume and
#'  \code{rmarkdown::render_site('.')} to simulaneously build your multiple page resume site.
#'
#'
#'
#' @examples
#' Example of the top of a single page resume with rmarkdown
#' file temitope.Rmd
#' \dontrun{
#'
#' ---
#' title: "Official CV of Temitope Ajayi"
#' author: "Temitope Ajayi, PhD, MD"
#' email: "idonshayo-nonexist@buffalo.edu"
#' position: "Research Assistant Professor"
#' affiliation: "State University of New York at Buffalo"
#' address: "45 Main Street, Buffalo, NY"
#' date: "`r Sys.Date()`"
#' phone: "716-000-0000"
#' profile-image: "myself.jpg"
#' theme-custom-color: "brown"
#' bg-color: "default"
#' output:
#'     r2resume::generate:
#'         template: "limon"
#' ---
#'
#' body ...
#'
#' }
#' @export
#' @examples
#' Example for a multiple page site -  a typical _site.yml file
#'
#' \dontrun{
#'
#' exclude: [repo]
#' output_dir: 'site'
#' output:
#'   r2resume::generate:
#'      template: 'manzana'
#'
#' }
#' @export
#'


generate <- function(template='manzana',self_contained = FALSE,dir_lib ='site_libs',css = 'style.css',...){

  pkgloc = paste(find.package("r2resume"),"/library/",template,sep = "")
  suppressPackageStartupMessages(suppressMessages(rmarkdown::html_document(
    css= css,
    toc= FALSE,
    lib_dir = dir_lib,
    template = paste(pkgloc,"/index.html", sep=""),
    self_contained = self_contained,
    extra_dependencies = list(rmarkdown::html_dependency_jquery(),
                              rmarkdown::html_dependency_jqueryui(),
                              rmarkdown::html_dependency_font_awesome(),
                              htmltools::htmlDependency(
                                'RPPkg', '1.0',
                                src=pkgloc,
                                script = 'main.js',
                                stylesheet = 'main.css',
                                all_files=TRUE
                                )
                              )
    )))


}


