import urllib.request
import json
import os

def get_links(html, start, end):
	if end < 0 :
		end = len(html)
	links = []
	link_start = html.find('href="', start)
	while link_start >= 0 and link_start < end:
		link_start += len('href="')
		link_end = html.find('"', link_start)
		link_text = html[link_start : link_end]
		#pick only jpegs
		if link_text[-4:] in ('.jpg', '.JPG'):
			links.append(link_text)
		link_start = html.find('href="', link_end)
	#create a set from an array, removing duplicates
	return list(set(links))

def get_links_from_section(html, section, title):
	title = title.lower()
	links = []
	titles = []
	title_start = html.find('<' + section + '>')
	while title_start >= 0:
		title_end = html.find('</' + section + '>', title_start)
		title_text = html[title_start : title_end].lower()
		if title_text.find(title) >= 0:
			links += get_links(html, title_start, html.find('<' + section + '>', title_end))
		title_start = html.find('<' + section + '>', title_end)
	return links

def download_jpeg(file_name, link):
	try:
		jpeg = urllib.request.urlopen('https:' + link).read()
	except:
		return
	try:
		file = open(file_name, 'wb')
		file.write(jpeg)
		file.close()
	except:
		return
	
def filter_image(link):
	print('.')
	#get image's page
	try:
		html = urllib.request.urlopen(link).read().decode('utf-8', errors='replace')
	except:
		return None
	#filter by image year
	year_start = html.find('class="dtstart"')
	year_end = html.find('</tr>', year_start)
	year_text = html[year_start : year_end]
	year = 0
	for i in range(1990, 2099): #recent images, starting from 1990
		if year_text.find(str(i)) >= 0:
			year = i
			break
	if year == 0:
		return None
	#filter by image size
	size_start = html.find('class="fileInfo"')
	size_end = html.find('</div>', size_start)
	size_text = html[size_start : size_end].replace(',', '').replace('.', '')
	size = 0
	for i in range(2000, 8000): #at least 2000 pixels
		if size_text.find(str(i)) >= 0:
			size = i
			break
	if size == 0:
		return None
	#filter by license
	if html.find('Creative Commons') < 0 and html.find('GNU Free Documentation License') < 0: #pick only free licensed images
		return None
	#get large image link
	link_start = html.find('href="', html.find('class="fullImageLink"')) + len('href="')
	link_end = html.find('"', link_start)
	link_text = html[link_start : link_end]
	return link_text;
	
def get_images(url, sections):
	#create images dir
	try:
		os.makedirs('images')
	except:
		pass
	#download page
	try:
		html = urllib.request.urlopen(url).read().decode('utf-8', errors='replace')
	except:
		return []
	links = []
	#get links and download
	for section in sections:
		links += get_links_from_section(html, section[0], section[1])
	url_base = url[:url.find("/wiki")]
	for link in links:
		image_link = filter_image(url_base + link)
		if image_link:
			file_name = 'images/' + url.split('/')[-1] + '___' + image_link.split('/')[-1]
			if not os.path.isfile(file_name): #baixa apenas se não existe
				print('Downloading ' + file_name + '...')
				download_jpeg(file_name, image_link)

file = open('paises.json', 'r')
places = json.load(file)
file.close()
for place in places:
	print(place['nome']['en'])
	get_images('https://en.wikipedia.org/wiki/' + place['nome']['en'], [('h2', 'history'), ('h3', 'tourism')])
