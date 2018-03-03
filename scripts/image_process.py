from PIL import Image
import os
import json

file = open('paises.json', 'r')
places = json.load(file)
file.close()

processed_path = './images_processed/'

#create images dir
try:
	os.makedirs(processed_path)
except:
	pass

images_path = './images/'

for path in os.listdir(images_path):
	if os.path.splitext(path)[1] in ('.jpg', '.JPG'):
		print(path)
		try:
			image = Image.open(images_path + path)
			
			#filename
			new_path = path.split('___')
			for place in places:
				if place['nome']['en'] == new_path[0]:
					new_path = place['sigla']
					break
			
			#resize image
			width = 2000
			height = (width * image.height) // image.width
			resized_image = image.resize((width, height))
			
			#crop image
			height = 500
			x = 0
			if resized_image.height <= height:
				resized_image.save(processed_path + new_path + '.jpg')
				continue
			for y_percent in range(0, 25, 25):
				y = (resized_image.height - height) * y_percent // 100
				cropped_image = resized_image.crop((x, y, x + width, y + height))
				cropped_image.save(processed_path + new_path + str(y_percent) + '.jpg')
			
			image.close()
		except:
			pass