# Set up an Environment for local development

Install Dependencies

```bash
sudo apt update
sudo apt install autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm6 libgdbm-dev libdb-dev
```

Installing `rbenv` to manage ruby versions

```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```

Adding `PATH` variables.

```bash
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
```

Then you need to ensure these changes take place.
If you know how to do that without restarting feel free; for everyone else, just close and reopen your terminal.

Next `cd` to the directory of interest (in our example `MyWebsite`) and install the version of ruby specified in the `.ruby-version` file.

```bash
rbenv install 3.1.2  # Manual 
rbenv install $(cat .ruby-version) # Automatically install the version specified in the file
```

From there `rbenv` will automatically use the version specified in `.ruby-version` file.

Now you just need to install the dependencies

```bash
gem install bundler
bundle install  # Need to be cd'd to the project dir 
```

Finally you can launch the full site and begin testing

```bash
bundle exec jekyll serve
```

Remember for contributions you should create a new branch from `dev` and submit the pull request to the `dev` branch.
