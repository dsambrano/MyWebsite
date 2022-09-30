#!/usr/bin/env python

from flask import Flask, render_template

def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True, subdomain_matching=True)

    @app.route('/hello')
    def hello():
        return "Hello World!"

    @app.route('/')
    def index():
        return render_template("new_index.html", header=False)
    
    @app.route("/", subdomain="blog")
    def blog_index():
        return "Blog Under Construction"

    return app
