#include "stdio.h"
#include "stdlib.h"
#include "string.h"

int main(int argc, char **argv, char **envp)
{
  // Print HTML header
  printf("Cache-Control: no-cache\n");
  printf("Content-type: text/html\n\n");
  printf("<html><head><title>GET query string</title></head>\
	<body><h1 align=center>GET query string</h1>\
  	<hr/>\n");

  printf("<img id=\"imgFlag\" src=\"/images/testImage.gif\" alt>");

  // Get and format query string
  printf("Raw query string: %s\n<br/><br/>", getenv("QUERY_STRING"));
  printf("<table> Formatted Query String:");
  char *query = strdup(getenv("QUERY_STRING"));
  char *tokens = query;
  char *p = query;
  while ((p = strsep (&tokens, "&\n"))) {
        char *var = strtok (p, "="),
             *val = NULL;
        if (var && (val = strtok (NULL, "=")))
            printf ("<tr><td>%-8s:</td><td>%s</td></tr>\n", var, val);
        else
            fputs ("<empty field>\n", stderr);
    }
    free (query);

  printf("</table>");
  
  printf("<script type=\"text/javscript\">document.cookie = 'hasJS=true';</script>");
  printf("<noscript><img src=\"/nojs.php\"></noscript>");
  printf("<script src=\"/collector.js\" async> </script>");
  
  // Print HTML footer  
  printf("</body>");
  printf("</html>");
  return 0;
}
