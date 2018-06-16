from flask import Flask, render_template

app = Flask(__name__)
application = app   # passenger_wsgi requires it


@app.route('/')
def under_development():
    return render_template("index.html")


if __name__ == '__main__':
    app.run()
