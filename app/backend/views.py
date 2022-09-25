from flask import Blueprint
from flask import render_template

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template('index.html')


@views.route('/scriptos')
def scriptos():
    return render_template('scriptos.html')

@views.route('vlan')
def vlan():
    return render_template('vlan.html')

@views.route('rip')
def rip():
    return render_template('rip.html')