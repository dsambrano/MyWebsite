from website import create_app

app = create_app()

if __name__ == "__main__":
    # Subdomains in flask: https://www.geeksforgeeks.org/subdomain-in-flask-python/
    website_url = "flask-test.com:5000"
    app.config['SERVER_NAME'] = website_url
    app.config['FLASK_ENV'] = "development"
    app.config['FLASK_DEBUG'] = True
    app.run()

