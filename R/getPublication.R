#' R2RESUME: Converts Rmarkdown to Beautiful Resume Sites
#'
#' See the \href{https://www.r2resume.com}{Official R2RESUME
#' website} for additional details on using the \code{generate}
#' function.
#'
#' This function simply takes an input of one or multiple PMID(PUBMED ID)
#'
#' @param PMID Required. Enter one or multiple PMIDs.Ensure to concatenate the PMIDs.
#' See examples below
#'
#' PMID stands for pubmed ID. You may obtain this directly from www.ncbi.nlm.nih.gov/pubmed beneath your article.
#' In case you have many articles, you can quickly get a list of your PMID by selecting format to PMID.
#' Should you need assistance with this, shoot me a quick email at idonshayo at gmail.com
#'
#' Required
#' Rtools  https://cran.rstudio.com/bin/windows/Rtools
#' Rmarkdown
#'
#' @examples
#' \dontrun{
#'
#' getPublication(PMID = c(546178,997076,988976))
#'
#' }
#' @export
#'


getPublication<- function(PMID){
  con <-NULL
  PMID <-sort(PMID,decreasing = TRUE)
  for(i in PMID){
    content <-NULL
    if(!dir.exists("repo")){
      dir.create("repo")
    }
    fileName <- paste('repo/',i,'.pub.part',sep='')
    ncbiweb <-'https://www.ncbi.nlm.nih.gov/pubmed/'
      if (!file.exists(fileName)) {
        linkurl <- paste(ncbiweb,i,sep='')
        urlfile <- url(paste(ncbiweb,i,'?report=docsum&format=text',sep=''))
        content <- readLines(urlfile,warn = FALSE)[-(1:3)]
        content <- gsub('1: ','',paste(content[-(length(content))],collapse = ' '))
        content <-strsplit(content,"\\. ")[[1]]
        content <- paste("<div class='pub_top'><span class='pub_authors'>",content[1],
                         "</span> <span class='pub_title'><a target='_blank' href='",linkurl,"'>",content[2],
                         "</a></span> <span class='pub_journal'>",content[3],
                         "</span> <span class='pub_pubvol'>",content[4],
                         sep = "")

        writeLines(content,fileName)
      }
      else{
        content = readLines(fileName,warn = FALSE)
      }
    con <-c(con,content)
  }
  con <- paste(paste0(" - ",con),collapse='\n')

  attr(con, "html") <- TRUE
  class(con) <- c("html", "character")

  return(con)

 }

