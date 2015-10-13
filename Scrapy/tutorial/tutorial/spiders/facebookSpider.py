#!/usr/bin/env python

import scrapy
from scrapy.selector import Selector
from scrapy.http import HtmlResponse
from tutorial.items import TutorialItem

class DmozSpider(scrapy.Spider):
    name = "facebook"
    allowed_domains = ["facebook.com"]
    start_urls = ["http://facebook.com"]
    
    def parse(self,response): #Parse each requests
        for href in response.css("a::attr('href')"):
            url = response.urljoin(href.extract())
            yield scrapy.Request(url, callback=self.parse_dir_contents)
    
    def parse_dir_contents(self, response):
        for sel in response.xpath('//ul/li'):
            item = TutorialItem()
            item['title'] = sel.xpath('a/text()').extract()
            item['link'] = sel.xpath('a/@href').extract()
            item['desc'] = sel.xpath('text()').extract()
            yield item
        next_page = response.css("a::attr('href')")
        if next_page:
            url = response.urljoin(next_page[0].extract())
            yield scrapy.Request(url, callback=self.parse_dir_contents)
        

       # print 
        #print "New Response"
        #filename = response.url.split("/")[-2] + ".html" #Reg
        #   title = sel.xpath('a/text()').extract()
         #   link = sel.xpath('a/@href').extract()
         #   desc = sel.xpath('text()').extract()
         #   print title, link, desc
            #with open(filename,'wb') as f:
                #f.write(link); #Title of Page
            #f.write("\n")
            #f.write("-----")
            #f.write("\n")
            
            #f.write('kevin')
            #f.write('kevin');
       # print
       # print