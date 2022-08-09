Tailwind CSS Rails
The tailwindcss gem helps you to easily install the Tailwind CSS framework by using WebPack and the webpacker gem.

Table of contents
Installing the gem
Contributing
License
Code of conduct
Installing the gem
In order to run the install generator from tailwindcss you need to add the webpacker gem, and run the installation setup for it.

Installing webpacker + tailwindcss
tailwindcss-rails ~> 1.0.0 supports Rails ~>5.2.0 and tailwindcss ~> 1.0

You first need to add the following gems to your Gemfile:

# Gemfile
gem 'webpacker', '~> 4.0.0'
gem 'tailwindcss', '~> 1.0.0'
Run the following:

bundle

bundle exec rails webpacker:install

bundle exec rails g tailwindcss:install
This will prepare the application to use tailwind by:

Adding tailwind by using yarn
Create a javascript/css directory
Init tailwind from the node_modules
Setup tailwind
Configure postcss.config.js file
If you want to know how this is achieved, you can go here.

These two lines will compile the assets from the app/javascript/css folder.

You must add the following to your config/initializers/content_security_policy.rb:

  Rails.application.config.content_security_policy do |policy|
    policy.connect_src :self, :https, 'http://localhost:3035', 'ws://localhost:3035' if Rails.env.development?
  end
Inside of config/webpacker.yml, you must set extract_css: true default is false.

You have to add these two lines to your application layout in order to compile it.

<%= stylesheet_pack_tag    'application' %>
<%= javascript_pack_tag 'application' %>
Webpacker will automatically compile your assets while a bundle exec rails s is active.

Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/IcaliaLabs/tailwindcss-rails. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

License
The gem is available as open source under the terms of the MIT License.

Code of Conduct
Everyone interacting in the Tailwindcss project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.
