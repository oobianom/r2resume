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
#' @import jsonlite
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
  for(i in as.character(PMID)){
    content <-NULL
    if(!dir.exists("repo")){
      dir.create("repo")
    }
    fileName <- paste('repo/',i,'.pub.part',sep='')
    ncbiweb <-'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&api_key=23c7391a6bb5b5d8f1b18addfc0597f20809&id='
      if (!file.exists(fileName)) {
        linkurl <- paste(ncbiweb,i,sep='')
        urlfile <- url(linkurl)
        content <- readLines(urlfile,warn = FALSE)
        content2 <- jsonlite::fromJSON(content)
        content3 <- content2$result
        content4 <- content3[[as.character(i)]]
        content5 <- paste("<div class='pub_tops'><span class='pub_authors'>",paste(content4$authors$name,collapse=", "),
                         "</span> <span class='pub_title'><a target='_blank' href='https://pubmed.ncbi.nlm.nih.gov/",i,"'>",content4$title,
                         "</a></span> <span class='pub_journal'>",content4$fulljournalname,
                         "</span> <span class='pub_pubvol'>",content4$pubdate,";", content4$volume,"(",content4$issue,")</span>; <i class='pub_publoc'>",content4$elocationid,"</i></div>",
                         sep = "")

        writeLines(content5,fileName)
      }
      else{
        content5 = readLines(fileName,warn = FALSE)
      }
    con <-c(con,content5)
  }
  con <- paste(paste0("<li>", con,"</li>"), collapse = "\n")

  con <-paste0("<ul>",con,"</ul>")

  attr(con, "html") <- TRUE

  class(con) <- c("html", "character")

  return(con)

 }

