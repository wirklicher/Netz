from flask import Blueprint
from flask import render_template

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template('index.html')


@views.route('/scriptos')
def scriptos():
    return render_template('scriptos.html')

@views.route('proc_jsou')
def proc_jsou():
    return render_template('proc_jsou.html')

