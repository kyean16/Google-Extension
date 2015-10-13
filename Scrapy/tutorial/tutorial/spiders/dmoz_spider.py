#!/usr/bin/env python

import scrapy
from scrapy.selector import Selector
from scrapy.http import HtmlResponse

class DmozSpider(scrapy.Spider):
    name ="kevinyean" #Name of the Spider
    allowed_domains = ["kevinyean.com"] #Domained Allowed
    start_urls = ["http://www.kevinyean.com"] #Starting Websites
    
    def parse(self,response): #Parse each requests
        filename = response.url.split("/")[-2] + ".html" #Reg
        sel = Selector(response) #Sel if xpath use of response
        #titlePage = sel.xpath('//title/text()').extract() # extracts using xpath
        #str1 = ''.join(titlePage) #convert list to string
        with open(filename,'a') as f:
            f.write(response.body)
            #f.write(str1); #Title of Page
            #f.write("\n")
            #f.write("-----")
            #f.write("\n")
            
            #f.write('kevin')
            #f.write('kevin');