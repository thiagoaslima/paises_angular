import json, pprint

data = json.load(open('metadados/topologies/countries.json', 'rb'))
# pprint.pprint(data, depth=2)
#pprint.pprint(data['arcs'], depth=1)
# pprint.pprint(data['bbox'], depth=1)
#pprint.pprint(data['type'], depth=1)
# pprint.pprint(data['objects'], depth=2)
pprint.pprint(data['objects']['ne_110m_admin_0_countries'], depth=2)
# pprint.pprint(data['objects']['countries']['geometries'][0], depth=1)
# pprint.pprint(data['objects']['countries']['geometries'][0]['properties'], depth=1)