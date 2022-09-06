import os
from flask import Flask

template_dir = os.path.relpath('../templates')
static_dir = os.path.relpath('../static')


def create_app():
    app = Flask(__name__, template_folder=template_dir, static_folder=static_dir)
    app.config['SECRET_KEY'] = 'uwuduwu'

    from .views import views

    app.register_blueprint(views, url_prefix='/')

    return app