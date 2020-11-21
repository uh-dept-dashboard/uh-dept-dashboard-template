# uh-dept-dashboard-template

This repo contains template code for creating University of Hawaii Department Dashboards.

## Creating a new dashboard from this template

Click the "Use this template" button to create a copy of this repository in a new repository.  Let's say that your new repository is in the GitHub organization "icsdept" and the name of the repository is "icsdept-dashboard".

Clone your new repository to your local computer.

Change directories to the src/ directory of icsdept-dashboard.

Edit the "homepage" property of package.json. For this example, the new homepage value is: "https://icsdept.github.io/icsdept-dashboard"

Run `npm install` to download and install third party libraries.

Run `npm deploy` to build and deploy the template to the gh-pages branch of icsdept-dashboard.

In GitHub, go to the Settings page, and make sure that 

Your template dashboard should now be available (in this example) at https://icsdept.github.io/icsdept-dashboard.
