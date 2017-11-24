import json, pprint

data = json.load(open('metadados/topologies/mundo.topojson', 'rb'))
# pprint.pprint(data, depth=1)
#pprint.pprint(data['arcs'], depth=1)
# pprint.pprint(data['bbox'], depth=1)
#pprint.pprint(data['type'], depth=1)
# pprint.pprint(data['objects'], depth=1)
# pprint.pprint(data['objects']['countries'], depth=1)
# pprint.pprint(data['objects']['countries']['geometries'][0], depth=1)
pprint.pprint(data['objects']['countries']['geometries'][0]['properties'], depth=1)