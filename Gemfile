source 'https://rubygems.org'

gem 'rake', '~> 10.3.2'

gem 'thin', '~> 1.7.2'
gem 'sinatra', '~> 1.4.5', require: 'sinatra/base'
gem 'sinatra-contrib', '~> 1.4.2', require: 'sinatra/reloader'

gem 'coderay', '~> 1.1.0'
gem 'kramdown', '~> 1.17.0'

group :test do
  gem 'rack-test', '~> 0.6.2', require: 'rack/test'
  gem 'minitest', '~> 5.4.1', require: 'minitest/autorun'
end

# Windows workaround https://github.com/eventmachine/eventmachine/issues/820
gem 'eventmachine', '1.2.7', git: 'git@github.com:eventmachine/eventmachine', tag: 'v1.2.7'

# group :development do
#   gem 'foreman'
# end
