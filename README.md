# CSE 135
Jon Carlo Bibat, Kelly Lo, Anh Tran

## Homework 1
1. **Password for user "grader" on your Apache server:** 
   - Password: grader123
3. **Link to site:** 
   - https://jak-cse135.site/
5. **Details of Github auto deploy setup:** 
   - For our Github auto deploy, we opted to use Github actions/workflows. This involved creating a .yml file which contains a script that runs to update the content of our website. In the script on every 'git push', we first change directory into the cloned Github repository located in user jon's home directory. After that, we call 'git pull' in order to retrieve all the changes that we pushed on to Github. Once git pull is done running, we go back to the home directory and perform an rsync command in order to copy and sync all of the contents of the cloned Github repository into our site's public_html directory, except for the hidden .git files to prevent those from making it on to the site. From here, the script is done and the website should be updated.
6. **Username/password info for logging into the site:**
    - Username: grader
    - Password: grader123
7.  **Summary of changes to HTML file in DevTools after compression:**
    - When we check the network tab and click on the site, we see in the Response Header that there is a 'Content-Encoding: gzip' which means that gzip is enabled and thus compressed. Additionally, in the network tab, it shows the size of the HTML file that got transferred over the network and the resource size. The size that got transferred over network is smaller than the resource size (From kB to B).
8. **Summary of removing 'server' header:**
    - In order to obscure our server identity, we installed the "libapache2-mod-security2" module and enabled it. Then, we edit apache2.conf file to include "ServerTokens Full". Then we edited security2.conf to include "SecServerSignature 'CSE135 Server'" to modify our server name and lastly restarted the web server!
