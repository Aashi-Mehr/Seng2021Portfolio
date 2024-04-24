from flask import (
    Flask,
    render_template
)

app = Flask(__name__)

# Default route
@app.route('/', methods=['GET'])
def main():
    return render_template('AboutAashi.html')


@app.route('/about/aashi/artisanship', methods=['GET'])
def artisanship():
    return render_template('Artisanship.html')


@app.route('/about/aashi/management', methods=['GET'])
def management():
    return render_template('TimeProjectManagement.html')


@app.route('/about/aashi/teamwork', methods=['GET'])
def teamwork():
    return render_template('Teamwork.html')


# Run the Flask application
if __name__ == '__main__':
    app.run(debug=True)
