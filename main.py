import os
import re
import random
import hashlib
import urllib2
import hmac
from google.appengine.api import urlfetch
from google.appengine.api import users
from string import letters
from google.appengine.ext import blobstore
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
import datetime
import webapp2
import jinja2
from google.appengine.ext import db
from HTMLParser import HTMLParser

template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir),
                               autoescape = True)


def render_str(template, **params):
    t = jinja_env.get_template(template)
    return t.render(params)

class MainHandler(webapp2.RequestHandler):
    def write(self, *a, **kw):
        self.response.out.write(*a, **kw)

    def render_str(self, template, **params):
        return render_str(template, **params)

    def render(self, template, **kw):
        self.write(self.render_str(template, **kw))


class MainPage(MainHandler):
    def get(self):
        self.render('index.html')
  

app = webapp2.WSGIApplication([('/', MainPage)],
                              debug=True)
