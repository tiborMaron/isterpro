from flask import Flask

app = Flask(__name__)
application = app   # passenger_wsgi requires it


@app.route('/')
def under_development():
    return 'Site is under development yet!'


if __name__ == '__main__':
    app.run()
