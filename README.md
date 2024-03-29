## NOVA University AP Credit Transfer Tool
A simple flask application incoming college students residing in NOVA can use to quickly calculate how many credits they will receive from their AP Exam scores from the most popular colleges in NOVA.

This tool is not 100% percent accurate as there are certain credit amounts that are different based on majors but gives a good esimate to how many credits you can receive.

#### Link to GMU transfer credit guide: <https://www.gmu.edu/freshman/requirements/exam-credit>
#### Link to WM transfer credit guide: <https://www.wm.edu/offices/registrar/documents/catalog/prematriculationexamtable.pdf>
#### Link to UVA transfer credit guide: <http://records.ureg.virginia.edu/content.php?catoid=52&navoid=4102#Advanced_Placement_Program>
#### Link to VT transfer credit guide: <https://www.registrar.vt.edu/content/dam/registrar_vt_edu/documents/Updates/ap_ib_clep/AP-Credits-2023.pdf>

## Setting up the Web-App Locally 

1. Clone The Repository

2. Install Requirements  `pip install -r requirements.txt`

3. To run the app on localhost run `python NOVA.py`

4. app is running at `http://127.0.0.1:5000`

## How to use:

1. Select which AP courses you would like to transfer, selected options appear green

2. Once you have selected all the AP courses you would like to transfer scroll and click calculate

3. A series of pop ups will appear prompting you to enter the score you received for each AP course you previously selected

4. Once you are done, you will see how many credits you will receive from the most popular colleges in NOVA for your AP scores!

5. Click back if you'd like to recalculate your scores

## WebApp 
#### Home Page 
![Home Page ](static/homepage.png)

#### Results Page 
![Home Page ](static/results.png)

