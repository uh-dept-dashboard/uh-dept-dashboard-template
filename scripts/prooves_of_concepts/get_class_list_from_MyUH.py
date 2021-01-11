#!/usr/bin/env python3 

#####################################################
#
# Software Requirements:
#   Firefox needs to be installed
#
#   Geckodriver needs to be installed
#     - https://github.com/mozilla/geckodriver/releases
#
#   Selenium needs to be installed:
#     - pip3 install selenium
#
# On Mac: certificate locations are wrong, but can be fixed with:
#   (security find-certificate -a -p ls /System/Library/Keychains/SystemRootCertificates.keychain &&        security find-certificate -a -p ls /Library/Keychains/System.keychain) > $HOME/.mac-ca-roots
#   export REQUESTS_CA_BUNDLE="$HOME/.mac-ca-roots"
#
#####################################################

# Standard packages
import sys
import time
import getpass


# Selenium
from selenium.webdriver.support.ui import Select
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.firefox.options import Options as FirefoxOptions

# Requests
import requests

# Get username and password
username = input('Enter your UH username: ')
password = getpass.getpass(prompt='Enter your UH password: ')

# Start (headless) irefox
sys.stderr.write("Starting headless Firefox driver...\n")
options = webdriver.FirefoxOptions()
options.headless = True
driver = webdriver.Firefox(options=options)

#sys.stderr.write("Starting non-headless Firefox driver...\n")
#driver = webdriver.Firefox()


# Go a a CAS-protected page, and enter username/password
sys.stderr.write("Navigating to Summary Class List URL...\n")
driver.get("https://myuh.hawaii.edu/launch-task/all/summary-class-list")
sys.stderr.write("Entering username and password...\n")
driver.find_element_by_id("username").send_keys(username)
driver.find_element_by_id("password").send_keys(password)
sys.stderr.write("Submitting...\n")
driver.find_element_by_id("submit").click()
time.sleep(1)  # Ugly sleep

# TODO: DEAL WITH WRONG username/password

# At this point, perhaps Duo has already sent the push, or it hasn't
# So we check if there is the Cancel button
try:
    driver.find_element_by_class_name("btn-cancel")
except NoSuchElementException:
    pass
else:
    ##### TODO: TEST THIS!
    sys.stderr.write("Requesting a push...\n")
    push_button = driver.get_element_by_xpath("//div[@class='push-label']/button")
    push_button.click();


# Wait for Duo Push acknowledgement by user
sys.stderr.write("Duo Push on its way... Check your phone! (this can take a while, especially if you've been running a lot of scripts lately))\n")
while (True):
    time.sleep(1)  # Ugly sleep
    if not driver.current_url.startswith("https://authn.hawaii.edu/cas"):
        break

sys.stderr.write("Duo Push accepted...\n")

sys.stderr.write("Starting a requests session...\n");
session = requests.session() 

sys.stderr.write("Setting that session's cookies from the selenium browser...\n");
for cookie in driver.get_cookies(): 
    c = {cookie['name']: cookie['value']} 
    session.cookies.update(c)

sys.stderr.write("Using the session to access a protected page, which should work...\n")
resp = session.get("https://www.sis.hawaii.edu/uhdad/bwlkfcwl.P_FacClaListSum")
if (resp.text.find("Spring 2018")):
    sys.stderr.write("The session successfully got the page, and thus  it means it should be able to use a REST API to pull data from the site (I think)!\n")
else:
    sys.stderr.write("The session did't get the page :(\n")

# Use Selenium to navigate the page
sys.stderr.write("Using Selenium to select term...\n")
select = Select(driver.find_element_by_name("term"))
select.options[4].click()
driver.find_element_by_xpath("//input[@type='submit']").click()
time.sleep(2) # Ugly sleep

sys.stderr.write("Using Selenium to select CRN...\n")
select = Select(driver.find_element_by_name("crn"))
select.options[0].click()
time.sleep(2) # Ugly sleep

sys.stderr.write("Submitting...\n")
driver.find_element_by_xpath("//input[@type='submit']").click()
time.sleep(2) # Ugly sleep

if ("Wait List" in driver.page_source):
    sys.stderr.write("Selenium successfully got the HTML class list!\n")
else:
    sys.stderr.write("Selenium did't get the HTML class list :(\n")

# TODO: Remove the geckodriver.log
