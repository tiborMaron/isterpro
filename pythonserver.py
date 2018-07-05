from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)
application = app  # passenger_wsgi requires it


@app.route('/')
def map():
    return render_template("map.html")


@app.route('/hu/index')
def index():
    return render_template("index.html")


@app.route('/hu/news')
def news():
    return render_template('news.html')


@app.route('/hu/partners')
def partners():
    return render_template('partners.html')


@app.route('/hu/programs')
def programs():
    return render_template('programs.html')


@app.route('/hu/tenders')
def tenders():
    return render_template('tenders.html')


@app.route('/hu/supporters')
def supporters():
    return render_template('supporters.html')


@app.route('/hu/contact')
def contact():
    return render_template('contact.html')


@app.route('/under-development')
def under_development():
    return render_template('under-development.html')


if __name__ == '__main__':
    app.run(debug=True)
