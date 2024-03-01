#!/usr/bin/env python

import flask
import json

# Opening JSON file
fGMU = open('GMUAPCredits.json')
fWM = open('WMAPCredits.json')
fUVA = open('UVAAPCredits.json')
fVT = open('VTAPCredits.json')
 
# returns JSON object as 
# a dictionary
dataGMU = json.load(fGMU)
dataWM = json.load(fWM)
dataUVA = json.load(fUVA)
dataVT = json.load(fVT)
 
# Iterating through the json
# list

ap_exams = []
for i in dataGMU['credit_transfer']:
    if(i['ap_exam'] not in ap_exams):
        ap_exams.append(i['ap_exam'])
 
# Closing file
fGMU.close()
fWM.close()
fUVA.close()
fVT.close()

# Create the application.
APP = flask.Flask(__name__)

@APP.route('/results')
def results():
    """ Displays the index page accessible at '/results'
    """
    return flask.render_template('results.html')

@APP.route('/')
def index():
    """ Displays the index page accessible at '/'
    """
    return flask.render_template('main.html', listGMU=dataGMU, listWM=dataWM, listUVA=dataUVA, listVT=dataVT, exams=ap_exams)

if __name__ == '__main__':
    APP.debug=True
    APP.run()